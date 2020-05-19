<template>
    <div class="home">
        <div class="header">
            <div class="content">
                <h1>BAZ'ART</h1>
                <p>Notre blog ne ressemble à aucune autre plateforme sur Internet. Notre seul objectif est de vous aider à passer un bon moment devant votre écran.</p>
            </div>
        </div>
        <div style="display: flex">
            <TopsCards title="titre"/>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import TopsCards from '@/components/TopsCards.vue'

    export default {
        name: 'Home',
        components: {
            TopsCards
        },
        data() {
            return {
                title: "coucou"
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
</style>