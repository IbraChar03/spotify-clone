<script>
import axios from "axios"
import { store } from "../store.js"
export default {
    props: {
        info: Object
    },
    data() {
        return {
            store,
            idSong: this.info.id,

        }
    },
    methods: {
        mp3() {
            const options = {
                method: 'GET',
                url: 'https://youtube-music1.p.rapidapi.com/get_download_url',
                params: { id: `${this.idSong}`, ext: 'mp3' },
                headers: {
                    'X-RapidAPI-Key': 'eea47d88e1mshb2397ce160dd292p1d9107jsnb28e91e0fb7b',
                    'X-RapidAPI-Host': 'youtube-music1.p.rapidapi.com'
                }
            };

            axios.request(options).then(function (res) {
                store.linkMp3 = res.data.result.download_url
            }).catch(function (error) {
                console.error(error);
            });
        },
        play() {

            var audio = document.getElementById("audio");
            if (!audio.paused) { /* Check if it's not paused */
                audio.pause();  /* To pause the audio */
                audio.currentTime = 0;  /* To reset the time back to 0 */
            }
            else {
                audio.play();  /* To make it play again */
            }

        }
    },

}
</script>

<template>
    <!-- <div class="card">
        <div class="img">
            <img :src="info.result.header_image_url" alt="">
        </div>
        <div class="title">
            <span>{{ info.result.full_title }}</span>

        </div>
        <div class="subtitle">
            <span>{{ info.result.artist_names }}</span>
        </div>
    </div> -->
    <div class="card">
        <div class="img" @click="mp3()">
            <font-awesome-icon icon="fa-solid fa-circle-play" class="circle" />
            <img :src="info.thumbnail" alt="" onerror="this.src='/images/notfound.webp';" @click="play()">
            <audio id=audio :src="store.linkMp3" type="audio/mpeg"></audio>

        </div>
        <div class="title">
            <span>{{ info.title }}</span>

        </div>
        <div class="subtitle">
            <span>{{ info.name }}</span>
        </div>
    </div>

</template>

<style lang="scss" scoped>
.card {
    margin: 10px;
    min-width: 190px;
    max-width: 190px;
    height: 265px;
    background-color: #181818;
    border-radius: 8px;
    margin-top: 20px;
    margin-bottom: 30px;
    padding: 15px 18px;

    .img {
        width: 100%;
        height: 65%;
        position: relative;

        .circle {
            font-size: 60px;
            color: white;
            opacity: 0;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        audio {
            width: 190px;
            position: relative;
            bottom: -20%;
            right: 10%;
        }
    }

    .img:hover img {
        opacity: 0.3;
        cursor: pointer;
    }

    .img:hover .circle {
        display: block;
        opacity: 1;
        cursor: pointer;
    }

    .title {
        width: 100%;
        height: 10%;
        margin-top: 10px;
        margin-bottom: 5px;
        display: flex;
        align-self: center;
        align-items: center;
        justify-content: flex-start;

        span {
            color: white;
            font-size: 15px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }

    .subtitle {
        width: 100%;
        height: 10%;

        span {
            color: #a7a7a7;
            font-size: 13px;
        }
    }
}
</style>
