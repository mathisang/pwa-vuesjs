<template>
    <div class="listing">
        <!-- componenet a faire -->
        <div class="header">
            <div class="content">
                <span>8 min</span>
                <h1>Koğuştaki Mucize</h1>
                <p>Koğuştaki Mucize est un film dramatique turc réalisé par Mehmet Ada Öztekin, sorti en 2019. Il s’agit
                    de l’adaptation du film sud-coréen, Miracle in Cell No. 7 de Lee Hwan-gyeong.</p>
                <div class="bar">
                    <div class="views">
                        <img src="../assets/pictos/eye.svg" width="20px"/>
                        <p>18 463</p>
                    </div>
                    <div class="likes">
                        <img src="../assets/pictos/like.svg" width="20px"/>
                        <p>8674</p>
                    </div>
                    <router-link :to="`/article/1`">
                        <div class="read">
                            Lire
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
        <h1>Liste des articles : {{ $route.params.categorie }}</h1>
        <div class="content">
            <div class="card" v-for="post in list" :key="post.id">
                <img :src="'/img/affiche/' + post.id + '.png'"/><br>
                <router-link :to="`/article/${ post.id }`">
                    {{ post.title | subStr }}
                </router-link>
                <p>Vues : {{ randomNumber(50000) }}</p>
                <p>Likes : {{ randomNumber(5000) }}</p>
                <p>Lecture {{ randomNumber(20) }} min</p>
                <p>{{ setEtiquette(post.id) }}</p>
                <p>{{ randomDate('05/19/2020', '01/01/2018') }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                posts: []
            }
        },
        created() {
            fetch('http://jsonplaceholder.typicode.com/posts/?_limit=18').then((response) => {
                response.json().then((data) => {
                    this.posts = data
                })
            })
        },
        filters: {
            subStr: function (string) {
                return string.substring(0, 22);
            }
        },
        computed: {
            list: function() {
                if(this.$route.params.categorie === "series")
                {
                    return this.posts.filter(function(i) {
                        return i.userId === 1
                    })
                }
                else if(this.$route.params.categorie === "films")
                {
                    return this.posts.filter(function(i) {
                        return i.userId === 2
                    })
                }
                else {
                    return this.posts
                }
            }
        },
        methods: {
            getImgUrl(pic) {
                return require('../assets/img/affiche' + pic)
            },
            randomNumber: function (e) {
                return Math.floor(Math.random() * e) + 1;
            },
            setEtiquette(e) {
                const nCat = e % 5 + 1;

                if (nCat === 1) {
                    return "Reviews"
                } else if (nCat === 2) {
                    return "Analyses"
                } else if (nCat === 3) {
                    return "Sorties"
                } else if (nCat === 4) {
                    return "Films"
                } else if (nCat === 5) {
                    return "Séries"
                }
            },
            randomDate(date1, date2){
                function randomValueBetween(min, max) {
                    return Math.random() * (max - min) + min;
                }
                date1 = new Date(date1).getTime()
                date2 = new Date(date2).getTime()

                const options = {year: 'numeric', month: 'long', day: 'numeric' };

                return new Date(randomValueBetween(date2,date1)).toLocaleDateString('fr-FR', options)
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

    .card {
        width: 30%;
        border: 1px gray solid;
        margin: .5rem;
    }

    .header {
        height: 380px;
        width: 100%;
        background: url('../assets/img/header-film.jpg') no-repeat;
        background-size: cover;
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

    .content {
        display: flex;
        flex-wrap: wrap;
    }
</style>