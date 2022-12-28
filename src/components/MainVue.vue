<script>
import axios from "axios"
import HeaderMain from './HeaderMain.vue'
import MainList from './MainList.vue'
import { store } from "../store.js"
export default {
    components: {
        HeaderMain,
        MainList
    },
    data() {
        return {
            store

        }
    },
    methods: {
        getApiTracks() {
            let api = `${store.apiTopTracks}&${store.apiKey}&format=json`
            if (store.searchInput !== "") {
                api = `${store.apiSearchTracks}${store.searchInput}&${store.apiKey}&format=json`

            }
            axios
                .get(api)
                .then(res => {
                    store.arrayTracks = res.data.tracks.track

                })
                .catch(err => {
                    console.log("errori", err)
                });

        },
        getApiArtists() {
            let api = `${store.apiTopArists}&${store.apiKey}&format=json`
            axios
                .get(api)
                .then(res => {
                    store.arrayArtists = res.data.artists.artist

                })
                .catch(err => {
                    console.log("errori", err)
                });

        },
    },
    mounted() {
        this.getApiTracks()
        this.getApiArtists()
    }
}
</script>

<template>
    <div class="container">
        <HeaderMain />
        <MainList />

    </div>

</template>

<style lang="scss" scoped>
.container {
    background-color: #121212;
    width: calc(100% - 250px);
    height: calc(100vh - 80px);


}
</style>
