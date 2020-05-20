<template>
    <div id="app">
        <Nav />
        <router-view/>
        <Footer />
    </div>
</template>

<script>
    import Nav from '@/components/Nav.vue'
    import Footer from '@/components/Footer.vue'

    export default {
        components: {
            Nav,
            Footer
        }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');

    body {
        background: #141414;
        color: white;
        margin: 0;
        overflow-x: hidden;
    }

    #app {
        font-family: 'Poppins', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        font-size: 16px;
        font-weight: 400;
    }

    p {
        margin-top: 0;
        margin-bottom: 0;
    }

    html {
        overflow-x: hidden;
    }
</style>
