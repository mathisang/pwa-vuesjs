<template>
    <div class="listing">
        <HeaderListing :categorie="$route.params.categorie" :key="$route.params.categorie"/>
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