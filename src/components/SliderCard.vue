<template>
  <div class="slider-container">
    <slick ref="slick" :options="slickOptions">
        <Card />
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
        created() {
            fetch('https://jsonplaceholder.typicode.com/posts/?_limit=18').then((response) => {
                response.json().then((data) => {
                    this.posts = data
                })
            })
        },
        data() {
            return {
                posts:[],
                slickOptions: {
                    slidesToShow: 4,
                    infinite: true,
                    adaptiveHeight: false,
                    arrows: true,
                    dots: false,
                    draggable: true,
                    swipe: true,
                    prevArrow: '<img src="../assets/img/left-button.png" data-role="none" class="slick-prev"/>',
                    nextArrow: '<img src="../assets/img/right-button.png" data-role="none" class="slick-next "/>'
                }
            }
        },
        methods: {
            getImgUrl(pic) {
                return require('../assets/img/affiche' + pic)
            },
            setGenre(e) {
                const nCat = e % 5 + 1;

                if (nCat === 1) {
                    return "Thriller"
                } else if (nCat === 2) {
                    return "Comedie"
                } else if (nCat === 3) {
                    return "Drame"
                } else if (nCat === 4) {
                    return "Action"
                } else if (nCat === 5) {
                    return "Aventure"
                }
            }
        },
        computed: {
            list: function() {
                if(this.$route.params.categorie === "series")
                {
                    return this.posts.filter(function(i) {
                        return i.userId === 1
                    })
                }
                else if(this.$route.params.categorie === "films")
                {
                    return this.posts.filter(function(i) {
                        return i.userId === 2
                    })
                }
                else {
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
</style>
