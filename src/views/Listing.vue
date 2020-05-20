<template>
    <div class="listing">
        <HeaderListing :categorie="$route.params.categorie" :key="$route.params.categorie"/>
        <!--<h2 v-if="$route.params.categorie === 'films'">TOP 10 FILMS</h2>
        <h2 v-else-if="$route.params.categorie === 'series'">TOP 10 SÉRIES</h2>
        <h2 v-else-if="$route.params.categorie === 'nouveautes'">NOUVEAUTÉS</h2>
        <div class="content">
            <div class="card" v-for="post in list" :key="post.id">
                <img :src="'/img/affiche/' + post.id + '.png'"/><br>
                <router-link :to="`/article/${ post.id }`">
                    {{ post.title | subStr }}
                </router-link>
                <p>Vues : {{ randomNumber(50000) }}</p>
                <p>Likes : {{ randomNumber(5000) }}</p>
                <p>Lecture {{ randomNumber(20) }} min</p>
                <p>{{ setEtiquette(post.id) }}</p>
                <p>{{ randomDate('05/19/2020', '01/01/2018') }}</p>
            </div>
        </div>-->
        <div class="wrapper-content">
            <div style=" margin: 3em 0;" >
                <div style="width: 25%; display: flex; justify-content: center;">
                    <h2 style="text-align: left; width: 300px;" v-if="$route.params.categorie === 'films'">TOP 10 FILMS</h2>
                    <h2 style="text-align: left; width: 300px;" v-else-if="$route.params.categorie === 'series'">TOP 10 SÉRIES</h2>
                    <h2 style="text-align: left; width: 300px;" v-else-if="$route.params.categorie === 'nouveautes'">NOUVEAUTÉS</h2>
                </div>
                <SliderCard :categorie="$route.params.categorie" :key="$route.params.categorie"/>
            </div>
            <div style=" margin: 3em 0;" >
                <div style="width: 25%; display: flex; justify-content: center;">
                    <h2 style="text-align: left; width: 300px;" v-if="$route.params.categorie === 'films'">FILMS À SUSPENSE</h2>
                    <h2 style="text-align: left; width: 300px;" v-else-if="$route.params.categorie === 'series'">SÉRIES DE SCIENCE FICTION</h2>
                    <h2 style="text-align: left; width: 300px;" v-else-if="$route.params.categorie === 'nouveautes'">LES DERNIÈRES SÉRIES</h2>
                </div>
                <SliderCard :categorie="$route.params.categorie" :key="$route.params.categorie"/>
            </div>
            <div style=" margin: 3em 0;" >
                <div style="width: 25%; display: flex; justify-content: center;">
                    <h2 style="text-align: left; width: 300px;" v-if="$route.params.categorie === 'films'">FILMS FRANÇAIS</h2>
                    <h2 style="text-align: left; width: 300px;" v-else-if="$route.params.categorie === 'series'">SÉRIES FRANÇAISE</h2>
                    <h2 style="text-align: left; width: 300px;" v-else-if="$route.params.categorie === 'nouveautes'">LES DERNIERS FILMS</h2>
                </div>
                <SliderCard :categorie="$route.params.categorie" :key="$route.params.categorie"/>
            </div>
        </div>
    </div>
</template>

<script>
    import HeaderListing from "@/components/HeaderListing";
    import SliderCard from "@/components/SliderCard";

    export default {
        components: {
            HeaderListing,
            SliderCard
        }
    }
</script>