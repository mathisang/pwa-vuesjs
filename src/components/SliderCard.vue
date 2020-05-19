<template>
  <div class="slider-container">
    <slick ref="slick" :options="slickOptions">
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
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
        data() {
            return {
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
