<template>
    <div class="small-card">
        <div class="picture"></div>
        <div class="content">
            <h3>{{ title }}</h3>
            <p>Lecture {{ temps }} min</p>
            <p>{{ randomNumber(10000) }} like</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SmallCard",
        props: {
            title: String,
            temps: Number,
            like: Number,
            image: String
        },
        methods : {
            randomNumber : function(e){
                return Math.floor(Math.random() * e);
            }
        }
    }
</script>

<style scoped>
    .small-card {
        width: 100%;
        height: 31%;
        background: white;
        border-radius: 8px;
        color: black;
    }

    .small-card * {
        margin: 0;
    }

    .picture {
        width: 50px;
        height: 50px;
    }
</style>