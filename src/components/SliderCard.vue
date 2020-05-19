<template>
  <div class="about">
    <h1>Liste des articles : {{ $route.params.categorie }}</h1>
    <div class="content">
      <div class="card" v-for="post in posts" :key="post.id">
        <router-link :to="`/article/${ post.id }`">
          {{ post.title }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                posts: null
            }
        },
        created() {
            fetch('https://jsonplaceholder.typicode.com/posts').then((response) => {
                response.json().then((data) => {

                    this.posts = data
                })
            })
        }
    }
</script>


<style scoped>
  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .card {
    width: 33%;
    padding: 10px;
    border: 1px gray solid;
    margin: .5rem;
  }
</style>
