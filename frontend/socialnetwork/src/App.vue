<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Accueil</router-link> |
      <router-link to="/signup">S'inscrire</router-link> |
      <router-link to="/login">Se connecter</router-link> |
      <router-link to="/mention">Mentions légales</router-link>
    </div>
    <router-view/>
    
  </div>
</template>

<style>
#app {
 font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 40px;
  }

#nav a {
  font-weight: bold;
  color:#014955 ;
}

#nav a.router-link-exact-active {
  color:#dd0a35 ;
}
</style>
