<template>
    <div id="nav">
        <div class="nav-left">
            <router-link to="/" class="logo">BAZ'ART</router-link>
            <router-link to="/">Accueil</router-link>
            <router-link to="/articles/categorie/films">Films</router-link>
            <router-link to="/articles/categorie/series">Séries</router-link>
            <router-link to="/articles/categorie/nouveautes">Nouveautés</router-link>
        </div>
        <div class="right-left">
            <div class="input-search">
                <input type="text" class="search" placeholder="Titres, genres..." />
                <img style="width:16px;" src="../assets/pictos/zoom.svg" />
            </div>
            <img class="bookmark" style="width:16px;" src="../assets/pictos/saved.svg" />
            <div class="user-profile"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Nav'
    }
</script>

<style scoped>
    #nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 1.5rem;
    }

    #nav .nav-left > * {
        text-decoration: none;
        font-weight: 500;
        margin: 0 1rem;
        color: white;
    }

    #nav .right-left {
        display: flex;
        align-items: center;
    }

    .logo {
        font-weight: bold !important;
        font-size: 18px !important;
    }

    .search {
        border: 1px solid white;
        display: flex;
        align-items: center;
        width: 12rem;
        height: 2rem;
        font-weight: normal;
        color: #C6C6C6;
        padding: 0 2rem;
        background: none;
    }

    .search img {
        margin-right: .5rem;
    }

    .input-search {
        position: relative;
    }

    .input-search img {
        position: absolute;
        left: .5rem;
        pointer-events: none;
        top: 50%;
        transform: translateY(-50%);
        margin-right: 1rem;
    }

    .input-search input::placeholder {
        margin-left: 2rem;
        font-size: 15px;
        color: #C6C6C6;
    }

    .bookmark {
        margin: 0 1.5rem;
    }

    .user-profile {
        background: url("../assets/img/user.png");
        background-size: cover;
        width: 40px;
        height: 40px;
        border-radius: 100%;
    }
</style>