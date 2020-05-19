<template>
    <div class="listing">
        <!-- componenet a faire -->
        <HeaderListing :categorie="$route.params.categorie" :key="$route.params.categorie"/>
        <h2 v-if="$route.params.categorie === 'films'">TOP 10 FILMS</h2>
        <h2 v-else-if="$route.params.categorie === 'series'">TOP 10 SÉRIES</h2>
        <h2 v-else-if="$route.params.categorie === 'nouveautes'">NOUVEAUTÉS</h2>
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
    import HeaderListing from "@/components/HeaderListing";

    export default {
        components: {
            HeaderListing
        },
        data() {
            return {
                posts: []
            }
        },
        created() {
            fetch('https://jsonplaceholder.typicode.com/posts/?_limit=18').then((response) => {
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
    .card {
        width: 30%;
        border: 1px gray solid;
        margin: .5rem;
    }

    .content {
        display: flex;
        flex-wrap: wrap;
    }
</style>