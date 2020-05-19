<template>
  <div v-on:mouseenter="overCard" v-on:mouseleave="overCard" class="card-container">
    <div class="info-container" v-if="showCard">
      <div class="black-background">
        <div class="date-container">
          <p>Sortie</p>
          <p class="entry-date">5 juin 2019</p>
        </div>
        <div class="middle-info">
          <p class="genre">{{genre}}</p>
          <p class="director">BONG JOON-HO</p>
          <p class="duration">Lecture {{ randomNumber(20) }} min</p>
        </div>
        <div class="rate-container">
          <div class="views">
            <img src="../assets/pictos/eye.svg" width="20px" />
            <p>{{ randomNumber(50000) }}</p>
          </div>
          <div class="like">
            <img src="../assets/pictos/like.svg" width="20px" />
            <p>{{ randomNumber(5000) }}</p>
          </div>
        </div>
        <div class="save-read-container">
          <button>Lire</button>
          <img src="../assets/pictos/Save.svg" width="20px" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'Card',
        data() {
            return {
                showCard: false,
                saveImg: "../assets/pictos/Save.svg",
                savedImg: "../assets/pictos/saved.svg"
            }
        },
        props: {
            genre: String,
        },
        methods : {
            overCard: function() {
                this.showCard = !this.showCard;
            },
            randomNumber: function (e) {
                return Math.floor(Math.random() * e) + 1;
            }
        }
    }
</script>
<style scoped>
  .card-container {
    background-image: url("../assets/img/affiche/peaky.png");
    height: 380px;
    width: 300px!important;
    background-size: cover;
    background-position: center;
    position: relative;
  }
  .card-container:hover {
    background-image: url("../assets/img/affiche/peaky.png");
    height: 380px;
    width: 300px!important;
    background-size: cover;
    background-position: center;
    cursor: pointer;
  }
  .info-container {
    position: absolute;
    width: 100%;
    bottom: 0;
    border-radius: 8px;
    height: 100%;
    background: linear-gradient(360deg, #000000 19.24%, rgba(0, 0, 0, 0) 103.4%);
  }
  .black-background {
    background-color: rgba(0, 0, 0, 0.5);
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .card-container p {
    font-size: 14px;
  }
  p.entry-date {
    font-size: 36px;
    color: #FFD800;
    font-weight: bold;
    text-transform: uppercase;
  }
  p.genre {
    font-size: 16px;
  }
  p.director {
    font-weight: bold;
    font-size: 24px;
    text-transform: uppercase;
  }
  .card-container button {
    background: #FFD800;
    border-radius: 30px;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    font-size: 16px;
    text-transform: uppercase;
    border: none;
    padding: 5px 1.5em;
    margin: 0 1em;
  }
  .rate-container {
    display: flex;
    justify-content: space-evenly;
  }
  .rate-container img {
    margin-right: 5px;
  }
  .views,
  .like {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .save-read-container {
    position: relative;

  }
  .save-read-container img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

</style>
