<template>
  <div id="login">
    <form action="">
      <label class="labels" for="email">Email</label>
      <input class="imput" id="email" type="text" />
      <label class="labels" for="password">Mot de passe</label>
      <input class="imput" id="password" type="password" /><br/>
      <button v-on:click="login" class="loginButton">Me connecter</button>
    </form>
  </div>  
</template>

<script>
export default {
    
}
</script>


<style>
.loginButton {
  cursor: pointer;
  width: 150px;
  height: 35px;
  border: none;
  border-radius: 10px;
  margin-top: 50px;
  background: #014955;
  color: white;
  font-weight: bold;
  font-size: 16px;
}
.imput{
  background: #e4d1d3;
  margin-bottom: 20px;
  margin-top: 75px;
  width: 250px;
  height: 50px;
  border: none;
  border-radius: 10px;
}
.labels{
   padding:15px;
   margin-top: 75px;
   margin-bottom: 20px;
   font-weight: bold;
   font-size: 16px;
}
</style>