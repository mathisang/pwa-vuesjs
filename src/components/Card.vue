<template>
    <div v-on:mouseenter="overCard" v-on:mouseleave="overCard" class="card-container">
        <div class="block-card" :style="{ backgroundImage: 'url(' + image + ')' }"
             style="background-size: cover; background-position: center">
            <div class="info-container" v-if="showCard">
                <div class="black-background">
                    <div class="date-container">
                        <p>Sortie</p>
                        <p class="entry-date">{{ randomDate('05/19/2020', '01/01/2018') }}</p>
                    </div>
                    <div class="middle-info">
                        <p class="genre">{{ setGenre(idimage) }}</p>
                        <p class="director">{{ titre }}</p>
                        <p class="duration">Lecture {{ randomNumber(20) }} min</p>
                    </div>
                    <div class="rate-container">
                        <div class="views">
                            <img src="../assets/pictos/eye.svg" width="20px"/>
                            <p>{{ randomNumber(50000) }}</p>
                        </div>
                        <div class="like">
                            <img src="../assets/pictos/like.svg" width="20px"/>
                            <p>{{ randomNumber(5000) }}</p>
                        </div>
                    </div>
                    <router-link :to="`/article/${ idimage }`">
                        <div class="save-read-container">
                            <button>Lire</button>
                            <img src="../assets/pictos/Save.svg" width="20px"/>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Card',
        data() {
            return {
                showCard: false,
                saveImg: "../assets/pictos/Save.svg",
                savedImg: "../assets/pictos/saved.svg",
                image: '/img/affiche/' + this.idimage + '.png',
            }
        },
        props: {
            genre: String,
            titre: String,
            idimage: Number
        },
        methods: {
            overCard: function () {
                this.showCard = !this.showCard;
            },
            randomNumber: function (e) {
                return Math.floor(Math.random() * e) + 1;
            },
            setGenre(e) {
                const nCat = e % 5 + 1;

                if (nCat === 1) {
                    return "Thriller"
                } else if (nCat === 2) {
                    return "Comedie"
                } else if (nCat === 3) {
                    return "Drame"
                } else if (nCat === 4) {
                    return "Action"
                } else if (nCat === 5) {
                    return "Aventure"
                }
            },
            randomDate(date1, date2) {
                function randomValueBetween(min, max) {
                    return Math.random() * (max - min) + min;
                }

                date1 = new Date(date1).getTime()
                date2 = new Date(date2).getTime()

                const options = {year: 'numeric', month: 'long', day: 'numeric'};

                return new Date(randomValueBetween(date2, date1)).toLocaleDateString('fr-FR', options)
            }
        }
    }
</script>
<style scoped>
    .card-container, .card-container:hover {
        height: 380px;
        width: 300px !important;
        position: relative;
    }

    .block-card {
        width: 100%;
        height: 100%;
    }

    .info-container {
        position: absolute;
        width: 100%;
        bottom: 0;
        border-radius: 8px;
        height: 100%;
        background: linear-gradient(360deg, #000000 19.24%, rgba(0, 0, 0, 0) 103.4%);
    }

    .black-background {
        background-color: rgba(0, 0, 0, 0.5);
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }

    .card-container p {
        font-size: 14px;
    }

    p.entry-date {
        font-size: 28px;
        color: #FFD800;
        font-weight: bold;
        text-transform: uppercase;
    }

    p.genre {
        font-size: 16px;
    }

    p.director {
        font-weight: bold;
        font-size: 24px;
        text-transform: uppercase;
    }

    .card-container button {
        background: #FFD800;
        border-radius: 30px;
        font-family: 'Poppins', sans-serif;
        font-weight: bold;
        font-size: 16px;
        text-transform: uppercase;
        border: none;
        padding: 5px 1.5em;
        margin: 0 1em;
    }

    .rate-container {
        display: flex;
        justify-content: space-evenly;
    }

    .rate-container img {
        margin-right: 5px;
    }

    .views,
    .like {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .save-read-container {
        position: relative;
    }

    .save-read-container button {
        cursor: pointer;
    }

    .save-read-container img {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }

</style>
