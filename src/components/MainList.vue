<script>
import { store } from "../store.js"
import TopArtists from './TopArtists.vue'
import TopTracks from './TopTracks.vue'
import searchTracks from './searchTracks.vue'
import TopAlbums from './TopAlbums.vue'
export default {
    components: {
        TopArtists,
        TopTracks,
        TopAlbums,
        searchTracks
    },
    data() {

        return {
            store,
            activeItem: 0,
            list: [
                {
                    name: "IN EVIDENZA",
                    href: "#",
                },
                {
                    name: "PODCAST",
                    href: "#",
                },
                {
                    name: "CLASSIFICHE",
                    href: "#",
                },
                {
                    name: "GENERI E MOOD",
                    href: "#",
                },
                {
                    name: "NUOVE USCITE",
                    href: "#",
                },
                {
                    name: "SCOPRI",
                    href: "#",
                },
            ]

        }
    },
    methods: {
        ActiveClick(index) {
            this.activeItem = index

        }
    }
}
</script>

<template>
    <div class="cont">
        <div class="cont-list">

            <div class="listItem">

                <ul>
                    <li v-for="(item, index) in list" :key="index">
                        <a :href="item.href" @click="ActiveClick(index)" :class="activeItem === index ? `active` : ``">
                            {{ item.name }}
                        </a>

                    </li>
                </ul>

            </div>
        </div>
        <div class="searchTracks" v-if="store.searchInput !== ``">

            <div class="title">Tracks</div>
            <div class="cards">
                <searchTracks v-for="item in store.arraySearchSongs" :info="item" />

            </div>
        </div>

        <div class="topArtists" v-if="store.searchInput === ``">

            <div class="title">TOP ARTISTS</div>
            <div class="cards">
                <TopArtists v-for="item in store.arrayTopArtists" :info="item" />

            </div>
        </div>
        <div class="topTracks" v-if="store.searchInput === ``">
            <div class="title">TOP TRACKS</div>
            <div class="cards">
                <TopTracks v-for="item in store.arrayTopTracks" :info="item" />

            </div>
        </div>
        <div class="topAlbums" v-if="store.searchInput === ``">
            <div class="title">TOP ALBUMS</div>
            <div class="cards">
                <TopAlbums v-for="item in store.arrayTopAlbums" :info="item" />

            </div>
        </div>


    </div>
</template>

<style lang="scss" scoped>
.cont {
    height: calc(100% - 80px);
    width: 100%;
    overflow-y: auto;
    padding-left: 10px;

    .cont-list {
        height: 80px;
        width: 100%;
        display: flex;
        justify-content: center;
        // background-color: red;
        align-items: center;
        margin-bottom: 10px;

        .listItem {
            width: 60%;
            height: 100%;
            // background-color: aquamarine;
            display: flex;

            ul {
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: space-evenly;
                align-items: center;

                li {
                    list-style-type: none;

                    a {
                        text-decoration: none;
                        color: #6c6f74;
                        font-size: 15px;


                    }

                    .active {
                        display: inline-block;
                        position: relative;
                    }

                    .active:after {
                        position: absolute;
                        content: '';
                        border-bottom: 1px solid #adff2f;
                        width: 70%;
                        transform: translateX(-50%);
                        bottom: -5px;
                        left: 50%;
                    }
                }
            }
        }
    }

    .topTracks {
        margin-top: 20px;
        height: 350px;
        width: 100%;
        // background-color: red;

        .title {
            color: white;
            font-weight: bold;
            font-size: 20px;
            margin-bottom: 10px;
            margin-left: 15px;
        }

        .cards {
            height: 310px;
            // background-color: aqua;
            width: 100%;
            overflow: hidden;
            overflow-x: auto;
            display: flex;

        }
    }

    .topAlbums {
        margin-top: 20px;
        height: 350px;
        width: 100%;
        // background-color: red;

        .title {
            color: white;
            font-weight: bold;
            font-size: 20px;
            margin-bottom: 10px;
            margin-left: 15px;
        }

        .cards {
            height: 310px;
            // background-color: aqua;
            width: 100%;
            overflow: hidden;
            overflow-x: auto;
            display: flex;

        }
    }

    .topArtists {
        margin-top: 40px;
        height: 350px;
        width: 100%;
        // background-color: red;

        .title {
            color: white;
            font-weight: bold;
            font-size: 20px;
            margin-bottom: 10px;
            margin-left: 15px;
        }

        .cards {
            height: 310px;
            // background-color: aqua;
            width: 100%;
            overflow: hidden;
            overflow-x: auto;
            display: flex;

        }
    }

    .searchTracks {
        margin-top: 40px;
        height: 350px;
        width: 100%;
        // background-color: red;

        .title {
            color: white;
            font-weight: bold;
            font-size: 20px;
            margin-bottom: 10px;
            margin-left: 15px;
        }

        .cards {
            height: 310px;
            // background-color: aqua;
            width: 100%;
            overflow: hidden;
            overflow-x: auto;
            display: flex;

        }
    }
}

@media screen and (max-width:580px) {
    .cont-list {
        display: block;

        .listItem {
            height: 100%;
            min-width: 100%;

            ul {
                width: 100%;
                flex-wrap: wrap;
            }

        }
    }

}
</style>
