<script>
import axios from "axios"
export default {
    props: {
        info: Object
    },


}
</script>

<template>

    <div class="card">
        <div class="img" v-for="item in info.data.coverArt.sources.slice(0, 1)">
            <img :src="item.url" alt="" onerror="this.src='/images/notfound.webp';">

        </div>
        <div class="title">
            <span>{{ info.data.name }}</span>

        </div>
        <div class="subtitle">
            <span v-for="item in info.data.artists.items">{{ item.profile.name }}</span>
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
        cursor: pointer;
        touch-action: manipulation;


        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            cursor: pointer;
            touch-action: manipulation;
        }


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
        display: flex;
        align-self: center;
        align-items: center;
        justify-content: flex-start;

        span {
            color: #a7a7a7;
            font-size: 13px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
}
</style>
