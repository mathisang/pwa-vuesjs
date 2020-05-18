<template>
  <div class="hello">
    <h1 v-if="isShow">{{ msg }}</h1>
    <h1 v-else>{{ "Salut à tous" }}</h1>
    <h2 @click="$emit('updateMessage', 'Article modifié')">{{ isShow }}</h2>
    <h3>{{ bigMessage }}</h3>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      isShow: false
    }
  },
  methods: {
    toogleShow() {
      this.isShow = !this.isShow
    }
  },
  created() {
    console.log("crée")
  },
  mounted() {
    console.log("monté")
  },
  computed: {
    bigMessage() {
      return this.msg + "!!!!!!"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
h2 {
  cursor: pointer;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
