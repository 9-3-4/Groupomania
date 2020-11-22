<template>
<div class="home">
        <img alt="logo" src="../asset/icon.png">  
        <button class="signUpButton">M'inscrire</button>
        <button class="LoginButton">Me connecter</button>

</div>
</template>

<script>

import Presentation from '@/components/Presentation.vue';



export default {
  name: 'home',
  components: {
    Presentation,
  },
};
</script>
