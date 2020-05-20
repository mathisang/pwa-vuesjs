<template>
    <div class="topsCards">
        <SmallCard idarticle="2" idimage="small-casa-de-papel" title="Casa de papel" temps="8" like="14215" />
        <SmallCard idarticle="4" idimage="small-avengers" title="Avengers" temps="14" like="47321" />
        <SmallCard idarticle="7" idimage="small-prison-break" title="Prison Break" temps="12" like="30124" />
    </div>
</template>

<script>
    import SmallCard from '@/components/SmallCard.vue'

    export default {
        name: 'TopsCards',
        components: {
            SmallCard
        }
    }
</script>

<style scoped>
    .topsCards {
        height: 380px;
        width: 300px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
</style>