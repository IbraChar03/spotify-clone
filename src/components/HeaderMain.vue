<script>
import { store } from "../store.js"
export default {
    data() {
        return {
            store
        }
    },

}
</script>

<template>

    <div class="header">
        <div class="search">
            <a href=""> <font-awesome-icon icon="fa-solid fa-angle-left" class="mrg" /></a>
            <a href=""> <font-awesome-icon icon="fa-solid fa-angle-right" class="mrg" /></a>
            <input type="text" placeholder="Search for Artists, Songs, or Podcasts" v-model="store.searchInput"
                @keyup.enter="$emit(`FunctionSearch`)">
        </div>
        <div class="up">
            <a href=""><span class="upgrade">EFFETTUA L`UPGRADE</span></a>
        </div>

    </div>



</template>

<style lang="scss" scoped>
.header {
    width: 100%;
    height: 80px;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: space-between;
    align-items: center;

    // position: fixed;
    // top: 0;
    // left: 0;
    .search {
        margin-left: 20px;

        a {
            text-decoration: none;
            color: #a9a9a9;
            font-size: 25px;

            .mrg {
                margin-right: 30px;
                vertical-align: middle;
            }

        }

        input {
            padding: 10px 8px;
            width: 300px;
            outline: none;
            border-radius: 15px;
            background-image: url("https://www.svgrepo.com/show/13652/magnifying-glass.svg");
            background-size: 13px;
            background-repeat: no-repeat;
            background-position: 10px center;
            padding-left: 30px;
        }
    }

    a {
        text-decoration: none;

        .upgrade {
            color: white;
            font-size: 15px;
            padding: 10px 30px;
            border-radius: 20px;
            border: 1px solid white;
            margin-right: 20px;

        }

    }

}
</style>
