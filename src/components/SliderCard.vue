<template>
    <div class="slider-container">
        <slick ref="slick" :options="slickOptions" v-if="list.length">
            <Card v-for="post in shuffle(list)" :key="post.id" :titre="post.title" :idimage="post.id"/>
        </slick>
    </div>
</template>

<script>
    import Card from '@/components/Card.vue'
    import Slick from 'vue-slick'

    export default {
        name: 'SliderCard',
        components: {
            Card,
            Slick
        },
        props: {
            categorie: String
        },
        created() {
            fetch('https://my-json-server.typicode.com/mathisang/api-vuejs/articles/').then((response) => {
                response.json().then((data) => {
                    this.posts = data
                })
            })
        },
        methods: {
            shuffle: function (a) {
                var j, x, i;
                for (i = a.length - 1; i > 0; i--) {
                    j = Math.floor(Math.random() * (i + 1));
                    x = a[i];
                    a[i] = a[j];
                    a[j] = x;
                }
                return a;
            }
        },
        data() {
            return {
                posts: [],
                slickOptions: {
                    slidesToShow: 4,
                    infinite: true,
                    adaptiveHeight: false,
                    arrows: true,
                    dots: false,
                    draggable: true,
                    swipe: true,
                    responsive: [
                        {
                            breakpoint: 575,
                            settings: {
                                slidesToShow: 1,
                            }
                        }
                    ],
                    prevArrow: '<img src="/img/left-button.png" data-role="none" class="slick-prev"/>',
                    nextArrow: '<img src="/img/right-button.png" data-role="none" class="slick-next "/>'
                }
            }
        },
        computed: {
            list: function () {
                if (this.categorie === "series") {
                    return this.posts.filter(function (i) {
                        return i.userId === 1
                    })
                } else if (this.categorie === "films") {
                    return this.posts.filter(function (i) {
                        return i.userId === 2
                    })
                } else {
                    return this.posts
                }
            }
        }
    }
</script>

<style>
    .slider-container {
        width: 100%;
    }

    .slick-slide {
        width: auto;
    }

    .slick-track {
        display: flex;
    }

    .slick-slider {
        position: relative;
    }

    .slick-prev {
        position: absolute;
        z-index: 1;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
    }

    .slick-next {
        position: absolute;
        z-index: 1;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
    }

    @media (max-width: 575px) {
        .slick-slide.slick-current {
            z-index: 1;
        }
    }
</style>
