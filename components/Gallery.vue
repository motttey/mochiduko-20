<template>
  <v-container fluid id="Gallery">
    <h1>Gallery</h1>
    <h3>これまでに描いたイラストなどです. </h3>
    <v-row class="mb-6" align-center>
      <v-col sm="8" cols="12">
        <div class="d-flex flex-row align-baseline">
          <v-text-field
            class="mb-6 mr-6"
            v-model="tagName"
            hide-details
            single-line
            label="Input Tag Name"
            @submit.prevent
          >
          </v-text-field>
          <v-btn
            color="white"
            elevation="1"
            @click="addNewTag()"
            outlined
          >
            Filter
          </v-btn>
        </div>
        <v-chip
          v-for="(tag, index) in tags"
          :key="tag"
          filter
          outlined
          close
          @click:close="removeTag(index)"
        >
          {{ tag }}
        </v-chip>
      </v-col>
    </v-row>
    <v-row class="mb-6" align-center>
      <v-col sm="8" cols="12" v-resize="onResize">
        <div ref="canvas_holder" id="canvas_holder"
          @mousemove="onDocumentMouseMove($event)"
          @click="onTouch($event)"
          @touchend="onTouch($event)"
        >
        </div>
      </v-col>
      <v-col sm="4" cols="8" class="mx-auto">
        <v-card id="target_image">
          <a :href="target_illust.url" target="_blank">
            <v-img
              :src="target_illust.src"
              :alt="target_illust.title"
              loading="lazy"
              class="white--text align-end"
              aspect-ratio="1"
            >
            </v-img>
          </a>
          <v-card-actions>
           <v-spacer></v-spacer>
          </v-card-actions>

          <v-card-text>
            <h2>{{target_illust.title}}</h2>
            <p>{{target_illust.date}}</p>
            <p>{{target_illust.tags_text}}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { scaleSqrt } from 'd3-scale';

const tagName = ref('');
const tags = ref([]);
const target_illust = ref({
  title: 'dora1',
  date: '20200718',
  tags_text: '#doraemon',
  src: '/doraemon-namecard.webp',
  url: 'https://www.pixiv.net/users/415546', flex: 12
});
const canvas_settings = {
  canvas_width: 1200,
  canvas_height: 650,
  canvas_offset_x: 0,
  canvas_offset_y: -50,
  box_size: 40,
  image_max: 200,
};
const api_url = 'https://mochiduko-api.netlify.app/';
const pixiv_embed = 'http://embed.pixiv.net/decorate.php';
const pixiv_artwork = 'https://www.pixiv.net/artworks/';
const axes = ['tsne-X', 'tsne-Y', 'tsne-Z'];
const mousePosition = ref([]);
const target_images = ref([]);
let renderer, canvas, scene, camera, controls;
let MOUNTED = false;
const canvas_holder = ref(null);

watch(mousePosition, (val) => {
  if (val) selectImage(val);
});

onMounted(() => {
  renderer = new THREE.WebGLRenderer({ alpha: true });
  canvas = canvas_holder.value;
  canvas_settings.canvas_width = canvas.clientWidth;

  canvas.appendChild(renderer.domElement);
  renderer.setSize(canvas_settings.canvas_width, canvas_settings.canvas_height);

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(45, canvas_settings.canvas_width / canvas_settings.canvas_height, 0.5, 1000);

  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 1;
  controls.dampingFactor = 0.25;
  controls.enableZoom = true;

  renderer.setSize(canvas_settings.canvas_width, canvas_settings.canvas_height);
  renderer.setClearColor(0x000000, 0.0);
  renderer.clear();

  drawScatter();
  renderScene();

  MOUNTED = true;
});

function v(x, y, z) {
  return new THREE.Vector3(x, y, z);
}

function renderScene() {
  requestAnimationFrame(renderScene);
  controls.update();
  renderer.render(scene, camera);
}

function setTargetImageProperties(target_image) {
  target_illust.value.src = pixiv_embed + '?illust_id=' + target_image['id'] + '&mode=sns-automator';
  target_illust.value.title = target_image['title'];
  target_illust.value.date = target_image['date'];
  target_illust.value.tags_text = target_image['tags'].map((tag) => '#' + tag['name']).join(' ');
  target_illust.value.url = pixiv_artwork + target_image['id'];
}

function calcMousePositionInCanvas(event) {
  let pos_x = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft - Math.floor(canvas.offsetLeft);
  let pos_y = event.clientY + document.body.scrollTop + document.documentElement.scrollTop - Math.floor(canvas.offsetTop);
  pos_x = ((pos_x + canvas_settings.canvas_offset_x) / canvas_settings.canvas_width) * 2 - 1;
  pos_y = -((pos_y + canvas_settings.canvas_offset_y) / canvas_settings.canvas_height) * 2 + 1;
  return [pos_x, pos_y];
}

function onDocumentMouseMove(e) {
  mousePosition.value = calcMousePositionInCanvas(e);
}

function onTouch(e) {
  if (e.touches && e.touches.length > 0) {
    mousePosition.value = calcMousePositionInCanvas(e.touches[0]);
  } else if (e.changedTouches && e.changedTouches.length > 0) {
    mousePosition.value = calcMousePositionInCanvas(e.changedTouches[0]);
  }
}

async function selectImage(mousePos) {
  let raycaster = new THREE.Raycaster();
  let mouse = new THREE.Vector2(mousePos[0], mousePos[1]);
  raycaster.setFromCamera(mouse, camera);

  let children = scene.children[0].children;
  let intersects = raycaster.intersectObjects(children.slice(0, children.length - 1), true).filter(o => o.object.name && o.object.visible);

  if (intersects.length > 0) {
    let target_image_data = target_images.value.find(img => img['id'] == intersects[0].object.name);
    if (target_image_data) {
      await setTargetImageProperties(target_image_data);
    }
  }
}

function onResize() {
  if (!MOUNTED) return;
  const width = canvas.clientWidth;
  const height = canvas_settings.canvas_height;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
}

function filterImage() {
  let children = scene.children[0].children;
  if (tags.value.length === 0) {
    children.forEach((child) => child.visible = true);
    return;
  }
  const filtered_image_indices = target_images.value
    .filter((image) => image.tags.some((tag) => tags.value.includes(tag.name)))
    .map((image) => image.id.toString());

  children.forEach((child) => {
    child.visible = filtered_image_indices.includes(child.name);
  });
}

function addNewTag() {
  if (!tags.value.includes(tagName.value)) {
    tags.value.push(tagName.value);
    tagName.value = '';
    filterImage();
  }
}

function removeTag(index) {
  tags.value.splice(index, 1);
  filterImage();
}

const { data: illustsData, error } = await useFetch(api_url + 'each_illusts.json');

if (error.value) {
  console.error('response error', error.value);
}

function drawScatter() {
  if (!illustsData.value) return;

  let scatterPlot = new THREE.Object3D();
  const box_size = canvas_settings.box_size;
  scene.add(scatterPlot);

  let coordinate_bounds = {};
  target_images.value = illustsData.value.slice(0, canvas_settings.image_max);

  axes.forEach((axis) => {
    coordinate_bounds[axis] = [
      Math.max(...target_images.value.map(o => o[axis])),
      Math.min(...target_images.value.map(o => o[axis]))
    ];
  });

  target_images.value.forEach(d => {
    const loader = new THREE.TextureLoader();
    loader.setCrossOrigin('anonymous');
    loader.load(api_url + 'thumbs/' + d['id'] + '.webp', (texture) => {
      let mat = new THREE.PointsMaterial({
        color: 0xFFFFFF,
        size: 20,
        transparent: true,
        map: texture,
      });

      let scales = axes.map((axis) => {
        return scaleSqrt().domain(coordinate_bounds[axis]).range([-box_size, box_size]);
      });

      const points = [];
      let x = scales[0](d['tsne-X']);
      let y = scales[1](d['tsne-Y']);
      let z = scales[2](d['tsne-Z']);
      points.push(v(x, y, z));

      let pointGeo = new THREE.BufferGeometry().setFromPoints(points);
      let pointsObj = new THREE.Points(pointGeo, mat);
      pointsObj.name = d['id'].toString();
      scatterPlot.add(pointsObj);
    });
  });

  if (target_images.value.length > 0) {
    setTargetImageProperties(target_images.value[0]);
  }

  renderer.setSize(canvas_settings.canvas_width, canvas_settings.canvas_height);
  renderer.setViewport(-1 * canvas_settings.canvas_offset_x, 0, canvas_settings.canvas_width, canvas_settings.canvas_height);
  controls.update();
  renderer.render(scene, camera);
  camera.position.set(100, 100, 100);
}
</script>

<style>
@media all and (min-width: 480px) { 
  #canvas_holder {
    width: 100%;
  }
}
@media all and (max-width: 480px) { 
  #canvas_holder {
    width: 90%;
    margin: 5%;
  }
}

#target_image {
  top: 0%;
  background-color: none;
}
</style>
