<script>
import SideBar from './components/SideBar.vue'
import FooterVue from './components/FooterVue.vue'
import MainVue from './components/MainVue.vue'
export default {
  components: {
    SideBar,
    FooterVue,
    MainVue

  }
}
</script>

<template>
  <main>
    <SideBar />
    <MainVue />

  </main>

  <footer>
    <FooterVue />
  </footer>


</template>

<style lang="scss">
@use "./styles/general.scss" as *;

main {
  display: flex;
}
</style>
