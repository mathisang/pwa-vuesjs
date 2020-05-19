<template>
    <div class="header" :style="`background: url('/img/${ image }') no-repeat;background-size: cover;background-position:center;`">
        <div class="content">
            <span>{{ time }} min</span>
            <h1>{{ titre }}</h1>
            <p>{{ description }}</p>
            <div class="bar">
                <div class="views">
                    <img src="../assets/pictos/eye.svg" width="20px"/>
                    <p>{{ vues }}</p>
                </div>
                <div class="likes">
                    <img src="../assets/pictos/like.svg" width="20px"/>
                    <p>{{ likes }}</p>
                </div>
                <router-link :to="`/article/${ idArticle }`">
                    <div class="read">
                        Lire
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HeaderListing.vue",
        props: {
            categorie: String
        },
        data() {
            if (this.categorie === "films") {
                return {
                    time: "11",
                    titre: "Koğuştaki Mucize",
                    description: "Koğuştaki Mucize est un film dramatique turc réalisé par Mehmet Ada Öztekin, sorti en 2019. Il s’agit de l’adaptation du film sud-coréen, Miracle in Cell No. 7 de Lee Hwan-gyeong.",
                    vues: "17643",
                    likes: "4210",
                    idArticle: "5",
                    image: "header-film.jpg"
                }
            }
            else if (this.categorie === "series") {
                return {
                    time: "8",
                    titre: "Casa de papel",
                    description: "Huit voleurs font une prise d'otages dans la Maison royale de la Monnaie d'Espagne, tandis qu'un génie du crime manipule la police pour mettre son plan à exécution.",
                    vues: "24308",
                    likes: "11438",
                    idArticle: "7",
                    image: "header-series.jpg"
                }
            }
            else if (this.categorie === "nouveautes") {
                return {
                    time: "13",
                    titre: "La voie de la justice",
                    description: "e combat historique du jeune avocat Bryan Stevenson.  Après ses études à l’université de Harvard, Bryan Stevenson aurait pu se lancer dans une carrière des plus lucratives.",
                    vues: "13012",
                    likes: "2792",
                    idArticle: "10",
                    image: "header-nouveaute.jpg"
                }
            }
        }
    }
</script>

<style scoped>
    .header .content {
        display: flex;
        flex-direction: column;
        position: relative;
        left: 2.5rem;
        top: 23%;
        align-items: baseline;
    }

    .header {
        height: 380px;
        width: 100%;
    }

    .header h1 {
        color: #FFD800;
        font-weight: bold;
        font-size: 64px;
        margin: 0;
        display: inherit;
    }

    .header p {
        font-size: 18px;
        font-weight: 500;
        max-width: 600px;
        width: 50%;
        text-align: justify;
        margin: 0;
    }

    .bar {
        margin-top: 1rem;
    }

    .content span {
        margin-bottom: -10px;
    }

    .bar, .bar > * {
        display: flex;
        align-items: center;
    }

    .bar > * img {
        margin-right: .5rem;
    }

    .bar p {
        width: 100%;
        font-size: 14px;
    }

    .bar > * {
        margin-right: 1rem;
    }

    .header a {
        text-decoration: none;
    }

    .read {
        padding: .25rem;
        background: #E50914;
        border-radius: 20px;
        width: 5rem;
        color: white;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 15px;
    }
</style>