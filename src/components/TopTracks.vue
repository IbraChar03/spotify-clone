<script>
import { store } from "../store.js"
export default {
    props: {
        info: Object
    },
    data() {
        return {
            store,
        }
    },
    methods: {
        // play() {
        //     var audio = document.getElementById("audio");
        //     if (!audio.paused) { /* Check if it's not paused */
        //         audio.pause();  /* To pause the audio */
        //         audio.currentTime = 0;  /* To reset the time back to 0 */
        //     }
        //     else {
        //         audio.play();  /* To make it play again */
        //     }
        // }
    }

}
</script>

<template>

    <div class="card">
        <div class="img">
            <img alt="" :src="info.item.header_image_thumbnail_url">

        </div>
        <div class="title">
            <span>{{ info.item.full_title }}</span>

        </div>
        <div class="subtitle">
            <span>{{ info.item.artist_names }}</span>
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
        // background-color: red;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            cursor: pointer;
        }

        img[src=""] {
            display: none;
        }
    }

    .img img[src=""] {
        display: none;
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
            font-size: 17px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-weight: bold;
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
