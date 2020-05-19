<template>
    <div id="app">
        <Nav />
        <router-view/>
    </div>
</template>

<script>
    import Nav from '@/components/Nav.vue'

    export default {
        components: {
            Nav
        }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&display=swap');

    body {
        background: #141414;
        color: white;
    }

    #app {
        font-family: 'Poppins', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        margin: 2rem;
        font-size: 16px;
    }

    p {
        margin-top: 0;
        margin-bottom: 0;
    }
</style>
