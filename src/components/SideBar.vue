<script >
export default {
  data() {
    return {

    }
  }
}
</script>

<template>
  <div class="container">
    <div class="menu">
      <div class="logo">

      </div>
    </div>
    <div class="profile">

    </div>

  </div>

</template>

<style lang="scss" scoped>
.container {
  background-color: black;
  width: 250px;
  height: calc(100vh - 80px);

  .menu {
    height: 800px;
    width: 100%;
    background-color: red;

    .logo {
      height: 80px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .profile {
    height: calc(100% - 800px);
    width: 100%;
    background-color: chartreuse;
  }
}
</style>
