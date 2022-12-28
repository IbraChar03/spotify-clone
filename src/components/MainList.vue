<script>
import { store } from "../store.js"
import Track from './Track.vue'
export default {
    components: {
        Track
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
        <div class="top">
            <div class="title">TOP TRACKS</div>
            <div class="cards">
                <Track v-for="item in store.arrayTracks" :info="item" />

            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.cont {
    height: calc(100% - 80px);
    width: 100%;

    .cont-list {
        height: 80px;
        width: 100%;
        display: flex;
        justify-content: center;
        // background-color: red;
        align-items: center;

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

    .top {
        height: 350px;
        width: 100%;
        // background-color: red;

        .title {
            color: white;
            font-weight: bold;
            font-size: 20px;
            margin-bottom: 10px;
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
</style>
