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
      menuListMobile: [
        {
          img: "/images/home.svg",
          href: "#"
        },
        {
          img: "/images/search.svg",
          href: "#"
        },
        {
          img: "/images/libreria.svg",
          href: "#"
        },
      ],
      playlist: [
        {
          name: "90s",
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
          <a href="" class="deco"> <span class="square"></span> <span class="text-big">Create Playlist</span> </a>
        </div>
        <div class="playlistNames">
          <div v-for="item in playlist" class="name">
            <a href="">
              <span>
                {{ item.name }}
              </span>
            </a>

          </div>
        </div>

      </div>
    </div>
    <div class="profile">
      <div>
        <a href="">
          <img src="images/download.svg" class="download">
          <span class="text-download">Install app</span>
        </a>
      </div>
      <hr>
      <div>
        <a href=""><img src="images/profile.svg" class="profile">
          <span class="name"> <strong>John Doe</strong> </span>
        </a>
      </div>

    </div>

  </div>

  <div class="container-mobile">
    <div class="menu">
      <div class="logo">
        <img src="images/logo-small.svg" alt="">

      </div>
      <div class="inner-menu">
        <div class="section" v-for="(item, index) in menuListMobile" :key="index">
          <a :href="item.href">
            <img :src="item.img" alt="" class="imgtag">
          </a>

        </div>
      </div>

    </div>
    <div class="profile2">
      <div class=cont-download>
        <a href="" class="dec">
          <img src="images/download.svg" class="download">

        </a>
      </div>
      <!-- <hr> -->
      <div class="cont-profile">
        <a href="" class="dec2"><img src="images/profile.svg" class="profile">

        </a>
      </div>

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
    // background-color: red;

    .logo {
      // background-color: aquamarine;
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
      margin-bottom: 10px;
      width: 100%;
      // background-color: aqua;

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
          font-size: 15px;

          .imgtag {
            height: 13%;
            width: 13%;
            vertical-align: middle;
            margin-right: 5px;
            filter: invert(63%) sepia(98%) saturate(0%) hue-rotate(150deg) brightness(102%) contrast(118%);
          }

        }

      }

      .section:hover {
        background-color: #323232;

        a {
          color: white;
        }

        .imgtag {
          filter: brightness(0) invert(1);
        }
      }

    }

    .playlist {
      height: 400px;
      width: 100%;
      // background-color: blueviolet;
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
        margin-bottom: 15px;

        .deco {
          text-decoration: none;
          color: #a9a9a9;

          .square {
            margin-right: 5px;
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
          margin-bottom: 10px;

          a {
            padding-left: 20px;
            margin-bottom: 10px;
            text-decoration: none;
            font-size: 17px;
            color: #a9a9a9;
          }
        }

      }
    }
  }

  .profile {
    height: calc(100% - 800px);
    width: 100%;
    // background-color: chartreuse;

    a {
      text-decoration: none;
      color: #a9a9a9;
    }

    .download {
      width: 8%;
      vertical-align: middle;
      margin-left: 10px;
    }

    .text-download {
      color: #a9a9a9;
      font-size: 17px;
      margin-left: 5px;
    }

    hr {
      width: 90%;
      margin: 10px auto;
      color: #414141;

    }

    .profile {
      width: 10%;
      background-color: gray;
      object-fit: cover;
      border-radius: 20px;
      margin-left: 10px;
      margin-right: 10px;
      vertical-align: middle;

    }

    .name {
      color: white;
      font-size: 18px;

    }


  }
}

.container-mobile {
  display: none;
  background-color: black;
  width: 250px;
  height: calc(100vh - 80px);

  .menu {
    height: 800px;
    width: 100%;
    // background-color: red;

    .logo {
      // background-color: aquamarine;
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
      margin-bottom: 10px;
      width: 100%;
      // background-color: aqua;

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
          font-size: 15px;

          .imgtag {
            height: 13%;
            width: 13%;
            vertical-align: middle;
            margin-right: 5px;
            filter: invert(63%) sepia(98%) saturate(0%) hue-rotate(150deg) brightness(102%) contrast(118%);
          }

        }

      }

      .section:hover {
        background-color: #323232;

        a {
          color: white;
        }

        .imgtag {
          filter: brightness(0) invert(1);
        }
      }

    }

    .playlist {
      height: 400px;
      width: 100%;
      // background-color: blueviolet;
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
        margin-bottom: 15px;

        .deco {
          text-decoration: none;
          color: #a9a9a9;

          .square {
            margin-right: 5px;
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
          margin-bottom: 10px;

          a {
            padding-left: 20px;
            margin-bottom: 10px;
            text-decoration: none;
            font-size: 17px;
            color: #a9a9a9;
          }
        }

      }
    }
  }

  .profile {
    height: calc(100% - 800px);
    width: 100%;
    // background-color: chartreuse;

    a {
      text-decoration: none;
      color: #a9a9a9;
    }

    .download {
      width: 8%;
      vertical-align: middle;
      margin-left: 10px;
    }

    .text-download {
      color: #a9a9a9;
      font-size: 17px;
      margin-left: 5px;
    }

    hr {
      width: 90%;
      margin: 10px auto;
      color: #414141;

    }

    .profile {
      width: 10%;
      background-color: gray;
      object-fit: cover;
      border-radius: 20px;
      margin-left: 10px;
      margin-right: 10px;
      vertical-align: middle;

    }

    .name {
      color: white;
      font-size: 18px;

    }


  }
}

@media screen and (max-width:580px) {
  .container {
    display: none;
  }

  .container-mobile {
    display: block;
    width: 80px;

    .menu {
      height: calc(100% - 80px);
      // background-color: red;


      .logo {
        height: 80px;
        width: 100%;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          height: 60%;
          width: 60%;
          filter: invert(63%) sepia(98%) saturate(0%) hue-rotate(150deg) brightness(102%) contrast(118%);
        }
      }

      .inner-menu {
        .section {
          width: 100%;
          padding: 0;


          a {
            display: flex;
            justify-content: center;
            align-items: center;

            .imgtag {
              height: 60%;
              width: 60%;
            }
          }

        }

        .imgtag {
          height: 50px;
          width: 50px;
        }
      }
    }

    .profile2 {
      height: 80px;
      width: 100%;
      margin: 0;

      .cont-download {
        height: 30%;
        width: 100%;

        .dec {
          height: 100%;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;


          img {
            height: 100%;
            width: 100%;
          }
        }

      }

      .cont-profile {
        height: 70%;
        width: 100%;
        // background-color: aquamarine;

        .dec2 {
          height: 100%;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          // background-color: blueviolet;

          img {
            height: 80%;
            width: 50%;

            background-color: gray;
            object-fit: contain;
            border-radius: 100%;
            text-align: center;
            margin-top: 0px;
          }
        }
      }
    }

  }


}
</style>
