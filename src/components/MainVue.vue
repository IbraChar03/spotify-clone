<script>
import HeaderMain from './HeaderMain.vue'
import MainList from './MainList.vue'
export default {
    components: {
        HeaderMain,
        MainList
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
    background-color: #141922;
    width: calc(100% - 250px);
    height: calc(100vh - 80px);

}
</style>
