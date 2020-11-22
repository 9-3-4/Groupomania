<template>
  <div id="login">
    <form action="">
      <label class="labels" for="email">email</label>
      <input name="email" id="email" type="email" required/>
      <label class="labels" for="password">password</label>
      <input name="password" id="password" type="password" required/>
      <impt type="submit" class="loginButton" value="Me connecter"/>
     
      
    </form>
  </div>  
</template>

<script>
export default {
  name: 'Login',
  components: {

  },
  methods: {
        
    }
}
</script>