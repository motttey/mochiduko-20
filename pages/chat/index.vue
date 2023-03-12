<template>
    <v-layout
      column
      justify-center
      align-center
    >
        <v-flex
            xs12
            sm12
            md12
        >
            <v-container fluid>
                <v-row>
                    <h1>しつもん! ドラえもん</h1>
                </v-row>
                <v-row>
                    <v-col>
                        <v-row v-for="(msg, i) in messages" :key="i" dense>
                            <v-col>
                                <div :class="[msg.isClient ? 'balloon_r' : 'balloon_l']">
                                    <div class="face_icon">
                                        <v-avatar :color="msg.avatar_color">
                                            <v-img
                                                :src="msg.avatar_src"
                                                :alt="msg.name"
                                            ></v-img>
                                        </v-avatar>
                                    </div>
                                    <p class="says">
                                        {{ msg.message }}
                                    </p>
                                </div>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
                <v-row>
                    <v-text-field
                        label="ドラえもんにしつもん"
                        v-model="question"
                        append-icon="mdi-send"
                        variant="outlined"
                        v-on:keydown.enter="sendQuestion"
                        @click:append="sendQuestion"
                    ></v-text-field>
                </v-row>
            </v-container>
        </v-flex>
    </v-layout>
</template>  
<script>  
    export default {
        name: "Chat",
        components: {},
        head: () => ({
            title: " Chat"
        }),
        data: () => ({
            question: '',
            messages: [
                {
                    'name': 'ドラえもん',
                    'message': 'こんにちは, ぼくドラえもんです。',
                    "isClient": false,
                    'avatar_src': "/mochiduko-20/doraemon-namecard.webp",
                    'avatar_color': "#0288D1",
                },
                {
                    'name': '俺',
                    'message': 'こんにちは, 好きな食べ物は何ですか?こんにちは, 好きな食べ物は何ですか?こんにちは, 好きな食べ物は何ですか?こんにちは, 好きな食べ物は何ですか?',
                    "isClient": true,
                    'avatar_src': "/mochiduko-20/doraemon-namecard.webp",
                    'avatar_color': "#E3F2FD",
                }
            ]
        }),
        methods: {
            sendQuestion() {
                console.log(this.question)
                this.messages.push({
                    'name': '俺',
                    'message': this.question,
                    "isClient": true,
                    'avatar_src': "/mochiduko-20/doraemon-namecard.webp",
                    'avatar_color': "#E3F2FD",
                })
                this.question = ''
            }
        },
        computed: {
            headers() {
                return []
            }
        },
        created () {
        }
    }
</script>
  
<style scoped>
    h1 {
        text-align: center;
        justify-content: center;
    }
    .balloon_l, .balloon_r {
        margin: 10px 0;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
    }
    .balloon_l {
        color: #E3F2FD;
        margin-left: -75px;
    }
    .balloon_r {
        color: #263238;
        justify-content: flex-end;
        margin-right: -75px;
    }
    .face_icon img {
        width: 80px;
        height: auto;
    }
    .balloon_r .face_icon {
        margin-left: 25px;
    }
    .balloon_l .face_icon {
        margin-right: 25px;
    }
    .balloon_r .face_icon {
        order: 2 !important;
    }
    .says {
        max-width: 300px;
        display: flex;
        flex-wrap: wrap;
        position: relative;
        padding: 10px;
        border-radius: 12px;
        background: #0288D1;
        box-sizing: border-box;
        margin: 0;
        line-height: 1.5;
    }

    .balloon_l .says {
        background: #0288D1;
    }

    .balloon_r .says {
        background: #E3F2FD;
    }
    .says p {
        margin: 8px 0 0 !important;
    }
    .says p:first-child {
        margin-top: 0 !important;
    }
    .says:after {
        content: "";
        position: absolute;
        border: 10px solid transparent;
        margin-top: -3px;
    }
    .balloon_l .says:after {
        left: -26px;
        border-right: 22px solid #0288D1;
    }
    .balloon_r .says:after {
        right: -26px;
        border-left: 22px solid #E3F2FD;
    }
</style>