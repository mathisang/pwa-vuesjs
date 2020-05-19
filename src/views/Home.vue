<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld @updateMessage="title = $event" :msg="title"/>
    <Card title="titre"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Card from '@/components/Card.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
      Card
  },
  data() {
    return {
      title: "coucou"
    }
  }
}
</script>
