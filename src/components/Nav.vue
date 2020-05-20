<template>
    <div id="nav" v-if="!isMobile()">
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
    <div @click.prevent="toggle" id="burger-nav" :class="{ 'active' : isBurgerActive }" v-else>
            <div class="hamburger"></div>
        <router-link to="/" class="logo">BAZ'ART</router-link>
            <router-link to="/">Accueil</router-link>
            <router-link to="/articles/categorie/films">Films</router-link>
            <router-link to="/articles/categorie/series">Séries</router-link>
            <router-link to="/articles/categorie/nouveautes">Nouveautés</router-link>
            <div class="input-search">
                <input type="text" class="search" placeholder="Titres, genres..." />
                <img style="width:16px;" src="../assets/pictos/zoom.svg" />
            </div>
            <img class="bookmark" style="width:16px;" src="../assets/pictos/saved.svg" />
            <div class="user-profile"></div>
    </div>
</template>

<script>
    export default {
        name: 'Nav',
        data: () => ({
            isBurgerActive: false
        }),
        methods: {
            isMobile() {
                if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                    return true
                } else {
                    return false
                }
            },
            toggle() {
                this.isBurgerActive = !this.isBurgerActive
            }

        }
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
        opacity: .7;
    }

    #nav .right-left {
        display: flex;
        align-items: center;
    }

    #nav .router-link-exact-active {
        opacity: 1;
    }

    .logo {
        opacity: 1 !important;
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

    #burger-nav {
        position:absolute;
        padding:0.8em;
        top:1em;
        right: .5em;
        cursor:pointer;
    }


    .hamburger, .hamburger::before, .hamburger::after {
        content:'';
        display:block;
        background:#EBEBD3;
        height:3px;
        width:2em;
        border-radius:3px;
        -webkit-transition:all ease-in-out 350ms;
        transition:all ease-in-out 350ms;
    }

    .hamburger::before {
        -webkit-transform: translateY(-7px);
        transform: translateY(-7px);
    }

    .hamburger::after {
        -webkit-transform: translateY(4px);
        transform: translateY(4px);
    }


</style>
