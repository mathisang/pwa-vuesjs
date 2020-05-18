<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Accueil</router-link>
            <router-link to="/articles">Articles</router-link>
            <div class="dropdown">
                Catégories
                <svg viewBox="0 0 451.847 451.847" width="12">
                    <path d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751
		c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0
		c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z"
                          fill="#000"></path>
                </svg>
                <div class="menu-dropdown">
                    <router-link to="/articles/categorie/reviews">Reviews</router-link>
                    <router-link to="/articles/categorie/analyses">Analyses</router-link>
                    <router-link to="/articles/categorie/sorties">Sorties</router-link>
                    <router-link to="/articles/categorie/populaires">Populaires</router-link>
                </div>
            </div>
        </div>
        <router-view/>
    </div>
</template>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #nav > * {
        text-decoration: underline;
        font-weight: bold;
        margin: 0 1rem;
    }

    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
    }

    #nav .menu-dropdown {
        display: none;
    }

    #nav .dropdown:hover .menu-dropdown {
        display: flex !important;
        flex-direction: column;
        position: absolute;
        background: white;
    }
</style>
