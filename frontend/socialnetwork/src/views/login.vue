<template>
    <div clas="Login">
        
        <loginform/>
    </div>
</template>

<script>

import loginform from '@/components/loginform.vue';

export default {
    name: 'login',
  components: {
      loginform,
  },
}
</script>