<template>
    <div class="home">
        <div class="header">
            <div class="content">
                <h1>BAZ'ART</h1>
                <p>Notre blog ne ressemble à aucune autre plateforme sur Internet. Notre seul objectif est de vous aider à passer un bon moment devant votre écran.</p>
            </div>
        </div>
      <div class="wrapper-content">
        <div class="news" style="margin: 0;" >
          <h2 style="text-align: left; width: 300px;">Nouveautés</h2>
        </div>
        <div class="news-wrapper">
            <div class="news" v-for="post in posts" :key="post.id">
              <Card :key="post.id" :titre="post.title" :idimage="post.id"/>
            </div>
          <div class="news" >
            <TopsCards />
          </div>
        </div>
        <div style=" margin: 3em 0;" >
          <div style="width: 25%; display: flex; justify-content: center;">
            <h2 style="text-align: left; width: 300px;">FILMS</h2>
          </div>
          <SliderCard/>
        </div>
        <div style=" margin: 3em 0;" >
          <div style="width: 25%; display: flex; justify-content: center;">
            <h2 style="text-align: left; width: 300px;">SERIES</h2>
          </div>
          <SliderCard/>
        </div>
      </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import TopsCards from '@/components/TopsCards.vue'
    import SliderCard from "@/components/SliderCard";
    import Card from "@/components//Card";

    export default {
        name: 'Home',
        components: {
            SliderCard,
            TopsCards,
            Card
        },
        created() {
            fetch('https://jsonplaceholder.typicode.com/posts/?_limit=3').then((response) => {
                response.json().then((data) => {
                    this.posts = data
                })
            })
        },
        data() {
            return {
                posts: []
            }
        }
    }
</script>

<style scoped>
    .content {
        display: flex;
        flex-direction: column;
        position: relative;
        left: 2.5rem;
        top: 28%;
    }
    .header {
        height: 380px;
        width: 100%;
        background: url('../assets/img/header-home.jpg') no-repeat;
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

    .news {
      width: 25%;
      display: flex;
      justify-content: center;
    }

    .news-wrapper {
      display: flex;
    }

    @media (max-width: 575px) {
      .wrapper-content {
        padding: 2em;
      }
      .news-wrapper {
        flex-direction: column;
      }
      .news {
        margin-bottom: 2em;
        width: 100%;
      }
      .header p {
        width: 80%;
      }
    }
</style>
