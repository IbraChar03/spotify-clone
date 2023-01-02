<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<template>
    <div class="container">
        <div class="brano">

            <img src="images/sinister.jpeg" class="sinister">
            <div>
                <div class="sinister-name"><strong>Sinister</strong> </div>
                <div class="brano-name">Song name</div>

            </div>
            <div>

                <a href="" class=deco><font-awesome-icon icon="fa-solid fa-heart" class="marg-icon icon-brano" /></a>
                <a href="" class="deco"><font-awesome-icon icon="fa-solid fa-folder" class="icon-brano" /></a>

            </div>
        </div>
        <div class="player">
            <div class="player1">
                <div> <a href="" class="deco"> <font-awesome-icon icon="fa-solid fa-shuffle" class="icon-player" /></a>
                </div>
                <div> <a href="" class="deco"> <font-awesome-icon icon="fa-solid fa-backward-step"
                            class="icon-player" /></a>
                </div>
                <div> <a href="" class="deco"> <font-awesome-icon icon="fa-solid fa-circle-play"
                            class="icon-player" /></a> </div>
                <div> <a href="" class="deco"> <font-awesome-icon icon="fa-solid fa-forward-step"
                            class="icon-player" /></a> </div>
                <div> <a href="" class="deco"> <font-awesome-icon icon="fa-solid fa-rotate-right"
                            class="icon-player" /></a> </div>
            </div>
            <div class="player2">
                <div class="minute"><strong>0:25</strong> </div>
                <div class="line1">
                    <div class="line2">
                        <a href="" class="deco">
                            <i class="fa-solid fa-circle cerchio"></i>
                        </a>

                    </div>
                </div>
                <div class="minute"> <strong>4:35</strong> </div>
            </div>
        </div>
        <div class="audio">
            <div> <a href="" class="deco"> <font-awesome-icon icon="fa-solid fa-bars" class="icon-audio" /></a> </div>
            <div> <a href="" class="deco"> <font-awesome-icon icon="fa-solid fa-desktop" class="icon-audio" /></a>
            </div>
            <div> <a href="" class="deco"> <font-awesome-icon icon="fa-solid fa-volume-high" class="icon-audio" /></a>
            </div>
            <div class="line3 ">
                <div class="line4 ">
                    <a href="" class="deco">
                        <i class="fa-solid fa-circle cerchio"></i>
                    </a>
                </div>
            </div>
        </div>

    </div>

</template>

<style lang="scss" scoped>
.container {
    background-color: #282828;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .brano {
        height: 80%;
        width: 250px;
        /* background-color: cornflowerblue;  */
        margin-left: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;

    }

    .icon-brano {
        color: #5a5a5a;
        font-size: 15px;
    }

    .marg-icon {
        margin-right: 15px;
    }

    .sinister {
        width: 30%;
        height: 80%;
        vertical-align: middle;
        margin-right: 10px;

    }

    .sinister-name {
        color: white;
        font-size: 18px;

    }

    .brano-name {
        color: #a9a9a9;
        font-size: 15px;

    }


    .player {
        /* height: 80%; */
        width: 40%;
        /* background-color: cyan; */

    }

    .player1 {
        /* width: 40%; */
        margin: auto;
        /* height: 50%; */
        /* background-color: brown; */
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .icon-player {
        color: white;
        font-size: 30px;
        margin-right: 30px;
    }

    .player2 {
        /* width: 80%; */
        margin: auto;
        /* height: 40%; */
        /* background-color: chocolate; */
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .minute {
        color: white;
        font-size: 17px;
    }

    .line1 {
        width: 80%;
        height: 5px;
        background-color: #5a5a5a;
        position: relative;
    }

    .line2 {
        width: 20%;
        height: 5px;
        background-color: white;
        position: absolute;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    .cerchio {
        color: white;
        display: inline-block;
        opacity: 0;

    }

    .line2:hover .cerchio {
        display: block;
        opacity: 1;
    }

    .line4:hover .cerchio {
        display: block;
        opacity: 1;

    }

    .audio {
        /* height: 80%;
    width: 15%;
    background-color: blueviolet; */
        margin-right: 10px;
        display: flex;
        justify-content: space-around;
        align-items: center;

    }

    .border2 {
        width: 50%;
        height: 2px;
        border: 5px solid grey;
        display: flex;
    }

    .width1 {
        width: 50%;
    }

    .line3 {
        width: 150px;
        height: 5px;
        background-color: #5a5a5a;
        position: relative;
    }

    .width2 {
        width: 20%;
    }

    .line4 {
        width: 40px;
        height: 5px;
        background-color: white;
        position: absolute;
        display: flex;
        justify-content: flex-end;
        align-items: center;

    }

    .icon-audio {
        color: white;
        font-size: 15px;
        margin-right: 20px;
    }
}

@media screen and (max-width:580px) {
    .container {
        display: flex;
        justify-content: space-around;
        align-items: center;

        .brano {
            display: none;
        }

        .player {
            width: 100%;

            .player2 {
                .minute {
                    margin-right: 10px;
                    margin-left: 10px;
                }
            }
        }

        .audio {
            display: none;

            .line3 {
                display: none;
            }
        }
    }

}

@media screen and (max-width:400px) {}
</style>
