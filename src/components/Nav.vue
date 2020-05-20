<template>
    <div :class="{ 'fixed' : $route.params.id}" id="nav">
        <div class="nav-left menu-desktop">
            <router-link to="/" class="logo">BAZ'ART</router-link>
            <router-link to="/">Accueil</router-link>
            <router-link to="/articles/categorie/films">Films</router-link>
            <router-link to="/articles/categorie/series">Séries</router-link>
            <router-link to="/articles/categorie/nouveautes">Nouveautés</router-link>
        </div>
        <div class="right-left menu-desktop">
            <div class="input-search">
                <input type="text" class="search" placeholder="Titres, genres..."/>
                <img style="width:16px;" src="../assets/pictos/zoom.svg"/>
            </div>
            <img class="bookmark" style="width:16px;" src="../assets/pictos/saved.svg"/>
            <div class="user-profile"></div>
        </div>
        <div class="menu-mobile">
            <router-link to="/" v-on:click.native="closeMobile" class="logo">BAZ'ART</router-link>
            <a class="hamburger">
                <div class="burger" v-on:click="openMobile"></div>
            </a>
            <div id="open-mobile">
                <div class="container">
                    <router-link v-on:click.native="closeMobile" to="/">Accueil</router-link>
                    <router-link v-on:click.native="closeMobile" to="/articles/categorie/films">Films</router-link>
                    <router-link v-on:click.native="closeMobile" to="/articles/categorie/series">Séries</router-link>
                    <router-link v-on:click.native="closeMobile" to="/articles/categorie/nouveautes">Nouveautés</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Nav',
        methods: {
            openMobile: function () {
                var mobile = document.getElementById('open-mobile');
                if (mobile.style.height !== "100%") {
                    mobile.style.height = "100%";
                    document.body.style.overflowY = "hidden";
                } else {
                    mobile.style.height = "0%";
                    document.body.style.overflowY = "scroll";
                }
            },
            closeMobile: function () {
                var mobile = document.getElementById('open-mobile');
                if (mobile.style.height !== "0%") {
                    mobile.style.height = "0%";
                    document.body.style.overflowY = "scroll";
                }
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
        top: 0;
    }

    #nav.fixed {
        margin: 0;
        padding: 1.5rem;
        position: fixed;
        width: 100%;
        background: black;
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
        text-decoration: none;
        color: white;
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

    .menu-mobile {
        display: none;
    }

    #open-mobile {
        position: fixed;
        left: 0;
        top: 4rem;
        height: 0%;
        width: 100%;
        background: #141414;
        z-index: 9800;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow-x: hidden;
        transition: 0.5s;
    }

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: -6rem;
    }

    .container a {
        margin: 0.5rem 0;
        font-size: 1.5rem;
        font-weight: 700;
        color: white;
        text-decoration: none;
    }

    @media screen and (max-width: 900px) {

        .menu-desktop {
            display: none !important;
        }

        .menu-mobile {
            display: flex;
            justify-content: space-between;
        }

        .burger {
            position: absolute;
            width: 28px;
            height: 5px;
            background: white;
            z-index: 9999;
            right: 1.5rem;
            top: 34px;
            border-radius: 1px;
            cursor: pointer;
        }

        .burger::before, .burger::after {
            content: "";
            display: block;
            position: absolute;
            width: 28px;
            height: 5px;
            background: white;
            -moz-transition: all 0.3s;
            -o-transition: all 0.3s;
            -webkit-transition: all 0.3s;
            transition: all 0.3s;
            border-radius: 1px;
        }

        .burger::before {
            margin-top: -10px;
        }

        .burger::after {
            margin-top: 10px;
        }

        .burger.is-active {
            background: white;
        }

        .burger.is-active::before {
            margin-top: 0px;
            -moz-transform: rotate(-45deg);
            -ms-transform: rotate(-45deg);
            -webkit-transform: rotate(-45deg);
            transform: rotate(-45deg);
        }

        .burger.is-active::after {
            margin-top: 0px;
            -moz-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            -webkit-transform: rotate(45deg);
            transform: rotate(45deg);
        }

        #nav.fixed {
            padding: 1.5rem 0;
        }

        #nav.fixed .logo {
            margin-left: 1.5rem;
        }
    }
</style>
