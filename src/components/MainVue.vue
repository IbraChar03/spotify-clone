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
        getApiTopArtists() {
            const options = {
                method: 'GET',
                url: 'https://genius-song-lyrics1.p.rapidapi.com/chart/artists/',
                params: { time_period: 'all_time', per_page: '15', page: '1' },
                headers: {
                    'X-RapidAPI-Key': `${store.apiKey}`,
                    'X-RapidAPI-Host': `${store.apiHost}`
                }
            };

            axios.request(options).then(function (res) {
                store.arrayTopArtists = res.data.chart_items
            }).catch(function (error) {
                console.error(error);
            });

        },
        getApiTrackSearch() {

            const options = {
                method: 'GET',
                url: 'https://youtube-music1.p.rapidapi.com/v2/search',
                params: { query: `${store.searchInput}` },
                headers: {
                    'X-RapidAPI-Key': 'eea47d88e1mshb2397ce160dd292p1d9107jsnb28e91e0fb7b',
                    'X-RapidAPI-Host': 'youtube-music1.p.rapidapi.com'
                }
            };

            axios.request(options).then(function (res) {
                store.arraySearchSongs = res.data.result.songs
            }).catch(function (error) {
                console.error(error);
            });

        },
        getApiAlbumSearch() {

            const options = {
                method: 'GET',
                url: 'https://spotify23.p.rapidapi.com/search/',
                params: { q: `${store.searchInput}`, type: 'albums', offset: '0', limit: '10', numberOfTopResults: '5' },
                headers: {
                    'X-RapidAPI-Key': 'eea47d88e1mshb2397ce160dd292p1d9107jsnb28e91e0fb7b',
                    'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
                }
            };

            axios.request(options).then(function (res) {
                store.arraySearchAlbums = res.data.albums.items
            }).catch(function (error) {
                console.error(error);
            });

        },

        getApiTopTracks() {
            const options = {
                method: 'GET',
                url: 'https://genius-song-lyrics1.p.rapidapi.com/chart/songs/',
                params: { time_period: 'all_time', chart_genre: 'all', per_page: '15', page: '1' },
                headers: {
                    'X-RapidAPI-Key': `${store.apiKey}`,
                    'X-RapidAPI-Host': `${store.apiHost}`
                }
            };

            axios.request(options).then(function (res) {
                store.arrayTopTracks = res.data.chart_items

            }).catch(function (error) {
                console.error(error);
            });

        },
        getApiTopAlbums() {
            const options = {
                method: 'GET',
                url: 'https://genius-song-lyrics1.p.rapidapi.com/chart/albums/',
                params: { time_period: 'all_time', per_page: '15', page: '1' },
                headers: {
                    'X-RapidAPI-Key': `${store.apiKey}`,
                    'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
                }
            };

            axios.request(options).then(function (res) {
                store.arrayTopAlbums = res.data.chart_items
            }).catch(function (error) {
                console.error(error);
            });
        },
        converterMp3() {
            const options = {
                method: 'GET',
                url: 'https:t-one-youtube-converter.p.rapidapi.com/api/v1/createProcess',
                params: {
                    url: 'https:www.youtube.com/watch?v=tR1ECf4sEpw',
                    format: 'mp3',
                    responseFormat: 'json',
                    lang: 'en'
                },
                headers: {
                    'X-RapidAPI-Key': 'eea47d88e1mshb2397ce160dd292p1d9107jsnb28e91e0fb7b',
                    'X-RapidAPI-Host': 't-one-youtube-converter.p.rapidapi.com'
                }
            };

            axios.request(options).then(function (res) {
                store.music = res.data.YoutubeAPI.urlMp3
            }).catch(function (error) {
                console.error(error);
            });
        },
        search() {
            this.getApiTrackSearch()
            this.getApiAlbumSearch()
        }

    },
    mounted() {
        this.search()
        this.getApiTopArtists()
        this.getApiTopTracks()
        this.getApiTopAlbums()
    }
}
</script>

<template>
    <div class="container-main">
        <HeaderMain @FunctionSearch="search" />
        <MainList />

    </div>

</template>

<style lang="scss" scoped>
.container-main {
    background-color: #121212;
    width: calc(100% - 250px);
    height: calc(100vh - 80px);


}

@media screen and (max-width:580px) {
    .container-main {
        width: calc(100% - 80px);

    }
}
</style>
