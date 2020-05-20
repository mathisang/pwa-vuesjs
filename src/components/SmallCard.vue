<template>
    <router-link :to="`/article/${ idimage }`" style="height: 31%; width: 100%; text-decoration: none">
        <div class="small-card">
            <div class="picture" :style="{ backgroundImage: 'url(' + image + ')' }" style="background-size: cover; background-position: center"></div>
            <div class="content">
                <h3>{{ title }}</h3>
                <p style="margin: .5rem 0">Lecture {{ temps }} min</p>
                <div class="bar">
                    <div class="like">
                        <img src="../assets/pictos/like-black.svg" width="16px"/>
                        <p>{{ randomNumber(10000) }}</p>
                    </div>
                    <img src="../assets/pictos/mark-black.svg" width="16px"/>
                </div>
            </div>
        </div>
    </router-link>
</template>

<script>
    export default {
        name: "SmallCard",
        props: {
            title: String,
            temps: String,
            like: String,
            idimage: String
        },
        data() {
            return {
                image: '/img/affiche/' + this.idimage + '.png',
            }
        },
        methods : {
            randomNumber : function(e){
                return Math.floor(Math.random() * e);
            }
        }
    }
</script>

<style scoped>
    .small-card {
        width: 100%;
        height: 100%;
        background: white;
        border-radius: 8px;
        color: black;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 14px !important;
    }

    .small-card * {
        margin: 0;
    }

    .small-card h3 {
        font-size: 16px !important;
    }

    .content {
        width: 180px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: baseline;
    }

    .picture {
        width: 100px;
        height: 100px;
        border-radius: 5px;
        margin: 0 .5rem;
    }

    .bar, .like {
        display: flex;
        align-items: center;
    }

    .like img {
        margin-right: .5rem;
    }

    .bar {
        width: 80%;
        justify-content: space-between;
    }
</style>