<template>
    <div id="block-post">
        <div id="post" v-if="post">
            <div class="head-article">
                <span>{{ randomNumber(20) }} min</span>
                <h1>{{ post.title | subStr }}</h1>
            </div>
            <div class="content">
                <div class="image">
                    <img :src="'/img/affiche/' + post.id + '.png'"/>
                    <div class="rate">
                        <div class="views">
                            <img src="../assets/pictos/eye.svg" width="20px" />
                            <p>12 263</p>
                        </div>
                        <div class="like">
                            <img src="../assets/pictos/like.svg" width="20px" />
                            <p>4316</p>
                        </div>
                        <div class="mark">
                            <img src="../assets/pictos/mark.svg" width="17px" />
                        </div>
                    </div>
                </div>
                <div class="body">
                    <p>{{ post.body }}{{ post.body }}{{ post.body }}{{ post.body }}{{ post.body }}{{ post.body }}{{
                        post.body }}{{
                        post.body }}</p><br>
                    <p>{{ post.body }}{{ post.body }}{{ post.body }}{{ post.body }}</p><br>
                    <p>{{ post.body }}{{ post.body }}{{ post.body }}{{ post.body }}{{ post.body }}{{ post.body }}{{
                        post.body }}{{
                        post.body }}{{ post.body }}{{ post.body }}{{ post.body }}{{ post.body }}{{ post.body }}{{
                        post.body }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                post: null
            }
        },
        created() {
            fetch(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`).then((response) => {
                response.json().then((data) => {
                    this.post = data
                })
            })
        },
        filters: {
            subStr: function (string) {
                return string.substring(0, 22);
            }
        },
        methods: {
            randomNumber: function (e) {
                return Math.floor(Math.random() * e) + 1;
            }
        }
    }
</script>

<style scoped>
    #block-post {
        border-top: 3px solid #E50914;
    }

    #post {
        max-width: 1200px;
        margin: 3rem auto 0;
    }

    h1 {
        text-transform: uppercase;
        color: #FFD800;
        margin: 0 0 1rem 0;
    }

    .head-article {
        display: flex;
        flex-direction: column;
        align-items: baseline;
    }

    .content {
        display: flex;
    }

    @media (max-width: 575px) {
        .content {
            flex-direction: column;
        }

        .content .body {
            margin-top: 2em;
        }
    }

    .content .image {
        margin-right: 1.5rem;
    }

    .content .body p {
        text-align: justify;
        font-weight: 300;
    }

    .content .body p:first-letter {
        text-transform: uppercase;
    }

    .rate {
        display: flex;
        justify-content: space-around;
        margin-top: 1.5rem;
    }
</style>
