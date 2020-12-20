<template>
  <div class="home">
  <img alt="Vue logo" src="../assets/icon-logo.png">
  <navbar/>
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from "../components/navbar.vue";


export default {
  name: "Home",
  components: {
    navbar,
  
  },
};
</script>