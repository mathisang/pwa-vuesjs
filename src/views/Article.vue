<template>
    <div>
        Voici un Article
        {{ $route.params.id }}
        <div v-if="post">
            <h1>{{ post.title }}</h1>
            <p>{{ post.body }}</p>
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
            fetch(`https://jsonplaceholder.typicode.com/posts/${ this.$route.params.id }`).then((response) => {
                response.json().then((data) => {
                    this.post = data
                })
            })
        }
    }
</script>