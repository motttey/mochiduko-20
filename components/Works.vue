<template>
  <v-container fluid id="Works">
    <h1>Works</h1>
    <h3>頒布した同人誌や寄稿, そのほか"望月田吾作"名義で実施したプロジェクトをまとめています。</h3>
    <v-row>
      <v-col cols="12" sm="12">
        <v-sheet
          color="transparent"
          elevation="10"
        >
          <v-slide-group
            class="pa-4"
            show-arrows
            center-active
            @change="onChange"
          >
            <v-slide-item
              v-for="card in cards"
              :key="card.title"
              class="mx-3"
              v-slot:default="{ _, toggle }"
            >
              <v-card flat hover
                @click="toggle">
                  <v-img
                    :src="card.src"
                    :lazy-src="card.src"
                    max-width="200px"
                    width="200px"
                    aspect-ratio="1"
                    class="grey lighten-4"
                    gradient="to bottom, rgba(0,0,0,.5), rgba(0,0,0,.1)"
                  >
                    <template>
                      <v-card-text>
                        <h2>{{ card.title }}</h2>
                      </v-card-text>
                    </template>
                </v-img>
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-sheet>
      </v-col>
    </v-row>
    <v-row dense class="my-6">
       <v-col cols="12" sm="6" offset-sm="3">
         <v-card flat>
           <a :href="maincard.url" target="_blank">
             <v-img
               :src="maincard.src"
               :lazy-src="maincard.src"
               aspect-ratio="auto"
               max-height="600px"
               class="grey lighten-2"
               gradient="to bottom, rgba(0,0,0,.5), rgba(0,0,0,.1)"
             >
               <template v-slot:placeholder>
                 <v-row
                   class="fill-height ma-0"
                   align-center
                   justify="center"
                 >
                   <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                 </v-row>
               </template>
             </v-img>
           </a>
           <v-card-text class="text--primary">
            <div class="my-2">
              <a :href="maincard.url" target="_blank">
                <h1>{{ maincard.title }}</h1>
              </a>
            </div>
            <div><h3>{{ maincard.year }}</h3></div>
            <div>{{ maincard.description }}</div>
          </v-card-text>
        </v-card>
       </v-col>
     </v-row>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      maincard: new Object(),
      cards: [
        { title: 'THE BOOK OF CIRCLES', year: 2022, src: '/mochiduko-20/bookofcircles.jpg',
        url: 'https://motitago.booth.pm/items/4441457', description: '2018-2022年に描いたドラえもんイラストメインにしたイラスト集です. C101にて頒布. B5 フルカラー / 36ページ (本文32ページ)', flex: 6 },
        {title: 'フジコ・スピリット', year: 2022, src: '/mochiduko-20/fujikospirits.jpg',
        url: 'https://motttey.github.io/c101/', description: '藤子不二雄作品が好きな11名による一次創作合同誌 表紙イラストを担当', flex: 6 },
        { title: 'モチヅ庫 10th Special Site', year: 2018, src: '/mochiduko-20/10th.png',
        url: 'https://motttey.github.io/10th/', description: 'pixivに登録して10年たった記念に作ったサイトです. pixivのイラストをタグで検索できたり, 投稿数の統計とかもみれます. お祝いのコメントも入力できるのでお待ちしてます. ', flex: 6 },
        { title: 'Perfect Blue', year: 2017, src: '/mochiduko-20/perfectblue.jpg',
        url: 'https://motitago.booth.pm/items/4441438', description: '青色のイラストをメインにしたイラスト集です. C93にて頒布. (C101で再販) B5 フルカラー / 32ページ (本文28ページ)', flex: 6 },
        { title: 'パラレルソレイユ 9',  year: 2017, src: '/mochiduko-20/parallel9.jpg',
        url: 'https://booth.pm/ja/items/723395', description: 'ひぐちあき様主催の藤子ファンの藤子ファンによる藤子ファンのための同人誌です. 表紙イラストを担当し, 喪黒さんを描かせていただきました. C93頒布. カラーページ込みA5 102ページ', flex: 6 },
        { title: 'DORA THE PAST', year: 2016, src: '/mochiduko-20/dorathepast.jpg',
        url: 'https://www.deviantart.com/motttey', description: '[SOLD OUT] 2008-2016あたりに描いてきたドラえもん関連イラストの総集編 + 描き下しイラストな画集っぽい感じの本です. C91にて頒布 B5 96ページ, 収録作品数189', flex: 6 },
      ],
    }),
    mounted: function(){
      this.maincard = this.cards[0];
    },
    methods: {
      onChange(v){
        this.maincard = this.cards[v];
      }
    }
  }
</script>
