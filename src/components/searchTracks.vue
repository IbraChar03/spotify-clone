<script>
export default {
    props: {
        info: Object
    },
    data() {
        return {


        }
    },

}
</script>

<template>
    <div class="card">
        <div class="img">
            <img :src="info.result.header_image_url" alt="">
        </div>
        <div class="title">
            <span>{{ info.result.full_title }}</span>

        </div>
        <div class="subtitle">
            <span>{{ info.result.artist_names }}</span>
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
