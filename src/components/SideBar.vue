<script >
export default {
  data() {
    return {
      menuList: [
        {
          img: "/images/home.svg",
          name: "Home",
          href: "#"
        },
        {
          img: "/images/search.svg",
          name: "Search",
          href: "#"
        },
        {
          img: "/images/libreria.svg",
          name: "Library",
          href: "#"
        },
      ],
      playlist: [
        {
          name: "Recently Played",
          href: "#"
        },
        {
          name: "Punk",
          href: "#"
        },
        {
          name: "Trap",
          href: "#"
        },
        {
          name: "Rock",
          href: "#"
        },
        {
          name: "Rap",
          href: "#"
        },

      ]

    }
  }
}
</script>

<template>
  <div class="container">
    <div class="menu">
      <div class="logo">
        <img src="images/logo.svg" alt="">

      </div>
      <div class="inner-menu">
        <div class="section" v-for="(item, index) in menuList" :key="index">
          <a :href="item.href">
            <img :src="item.img" alt="" class="imgtag">
            <span>
              {{ item.name }}
            </span>
          </a>

        </div>
      </div>
      <div class="playlist">
        <div class="title">
          PLAYLIST
        </div>
        <div class="createPlaylist">
          <a href="" class="deco"> <span class="square"></span> <span class="text-big">Crea Playlist</span> </a>
        </div>
        <div class="playlistNames">
          <div v-for="item in playlist" class="name">
            {{ item.name }}

          </div>
        </div>

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
      background-color: aquamarine;
      height: 80px;
      width: 100%;
      display: flex;
      padding-left: 20px;
      align-items: center;

      img {
        width: 70%;
        height: 70%;
      }
    }

    .inner-menu {
      height: 150px;
      width: 100%;
      background-color: aqua;

      .section {
        padding-left: 20px;
        height: 50px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        a {
          text-decoration: none;
          color: #a9a9a9;
          font-size: 18px;

          .imgtag {
            height: 13%;
            width: 13%;
            vertical-align: middle;
            margin-right: 5px;
            filter: invert(63%) sepia(98%) saturate(0%) hue-rotate(150deg) brightness(102%) contrast(118%);
          }

        }

      }

    }

    .playlist {
      height: 400px;
      width: 100%;
      background-color: blueviolet;
      overflow-y: auto;

      .title {
        color: white;
        font-size: 25px;
        padding-left: 20px;
        font-weight: bold;
        margin-bottom: 10px;
      }

      .createPlaylist {
        padding-left: 20px;
        margin-bottom: 10px;

        .deco {
          text-decoration: none;
          color: #a9a9a9;

          .square {

            display: inline-block;
            width: 40px;
            height: 40px;
            border-radius: 50%;

            background:
              linear-gradient(#000 0 0),
              linear-gradient(#000 0 0),
              #a9a9a9;
            background-position: center;
            background-size: 50% 2px, 2px 50%;
            background-repeat: no-repeat;
            vertical-align: middle;
          }

          .text-big {
            font-size: 20px;
            color: #a9a9a9;
          }
        }
      }

      .playlistNames {
        .name {
          padding-left: 20px;
          margin-bottom: 10px;
          font-size: 20px;
          color: #a9a9a9;
        }
      }
    }
  }

  .profile {
    height: calc(100% - 800px);
    width: 100%;
    background-color: chartreuse;
  }
}
</style>
