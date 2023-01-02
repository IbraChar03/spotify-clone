<script>
import { store } from "../store.js"
import TopArtists from './TopArtists.vue'
import TopTracks from './TopTracks.vue'
import searchTracks from './searchTracks.vue'
import searchAlbums from './searchAlbums.vue'
import TopAlbums from './TopAlbums.vue'
export default {
    components: {
        TopArtists,
        TopTracks,
        TopAlbums,
        searchTracks,
        searchAlbums
    },
    data() {

        return {
            store,
            activeItem: 0,
            list: [
                {
                    name: "Daily Mix 1",
                    img: "/images/dailymix1.png",
                    href: "#",
                },
                {
                    name: "Chill",
                    img: "/images/chill.jpg",
                    href: "#",
                },
                {
                    name: "Release Radar",
                    img: "/images/releaseradar.jpg",
                    href: "#",
                },
                {
                    name: "Daily Mix 2",
                    img: "/images/dailymix2.png",
                    href: "#",
                },
                {
                    name: "Global Top 50",
                    img: "/images/top50global.jpg",
                    href: "#",
                },
                {
                    name: "Top Hits",
                    img: "/images/tophits.png",
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
        <div class="cont-list" v-if="store.searchInput === ``">
            <div class="title">
                <span>Shortcuts</span>
            </div>

            <div class="listItem">
                <div class="section" v-for="item in list">
                    <a :href="item.href">

                        <div class="img">
                            <img :src="item.img" alt="">
                        </div>
                        <div class="text">
                            <span> {{ item.name }} </span>
                        </div>
                    </a>
                </div>

            </div>
        </div>
        <div class="search" v-if="store.searchInput !== ``">

            <div class="title">Tracks</div>
            <div class="cards">
                <searchTracks v-for="item in store.arraySearchSongs" :info="item" />

            </div>
        </div>

        <div class="search" v-if="store.searchInput !== ``">

            <div class="title">Albums</div>
            <div class="cards">
                <searchAlbums v-for="item in store.arraySearchAlbums" :info="item" />

            </div>
        </div>

        <div class="top" v-if="store.searchInput === ``">

            <div class="title">TOP ARTISTS</div>
            <div class="cards">
                <TopArtists v-for="item in store.arrayTopArtists" :info="item" />

            </div>
        </div>
        <div class="top" v-if="store.searchInput === ``">
            <div class="title">TOP TRACKS</div>
            <div class="cards">
                <TopTracks v-for="item in store.arrayTopTracks" :info="item" />

            </div>
        </div>
        <div class="top" v-if="store.searchInput === ``">
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
    overflow-x: hidden;
    padding-left: 10px;

    .cont-list {
        // height: 200px;
        width: 100%;
        // display: flex;
        justify-content: center;
        // background-color: red;
        align-items: center;
        margin-bottom: 10px;
        margin-top: 10px;

        .title {
            height: 80px;
            width: 100%;
            // background-color: red;
            display: flex;
            align-items: center;
            margin-left: 22px;

            span {
                color: white;
                font-weight: bold;
                font-size: 30px;
            }
        }

        .listItem {
            width: 100%;
            height: 100%;
            margin-left: 15px;

            // background-color: aquamarine;
            display: flex;
            flex-wrap: wrap;

            .section {
                height: 80px;
                width: calc(100% / 3 - 20px);
                margin: 10px;
                background-color: #2c2c2c;


                a {
                    height: 100%;
                    width: 100%;
                    display: flex;
                    text-decoration: none;

                    .img {
                        width: 15%;
                        height: 100%;
                        background-color: aqua;

                        img {
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                        }
                    }

                    .text {
                        width: 85%;
                        height: 100%;
                        display: flex;
                        align-items: center;
                        margin-left: 20px;
                        color: white;
                        font-size: 17px;
                        font-weight: bold;
                    }
                }
            }

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

    .top {
        margin-top: 30px;
        height: 350px;
        width: 100%;
        // background-color: red;

        .title {
            color: white;
            font-weight: bold;
            font-size: 25px;
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

    .search {
        margin-top: 40px;
        height: 350px;
        width: 100%;
        // background-color: red;

        .title {
            color: white;
            font-weight: bold;
            font-size: 25px;
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
