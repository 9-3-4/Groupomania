<template>
  <nav>
    <ul>
      <router-link to="/signup">
      <i class="icon fas fa-user-alt"></i>
      <li class="item signUpItem">S'inscrire</li>
      </router-link>
      <router-link to="/login">
      <i class="icon fas fa-sign-in-alt"></i>
      <li class="item connectItem">Se connecter</li>
      </router-link>
      <div>
        <i class="icon fas fa-sign-out-alt" @click="disconnect"></i>
        <li class="item disconnectItem" v-on:click="disconnect">Déconnexion</li>
      </div>
    </ul>
  </nav>
</template>

<script>

export default {
  name: "Navbar",
  
  methods: {
    disconnect() {
      console.log("anything");
      alert("Vous êtes bien déconnecté !");
      localStorage.clear();
    },
  },

  
};
</script>


<style scoped>
* {
  box-sizing: border-box;
  padding: 0;
  margin-bottom: 10px;
  font-size: 16px;
}

nav {
  background: #ffffff;
  padding: 5px 0 0 0;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  box-shadow: 0.5px 0.5px 4px #fd2d01;
}

ul {
  display: flex;
  justify-content: space-around;
  list-style-type: none;
}

li {
  cursor: pointer;
  color: #1687a7;
  font-weight: bold;
  justify-self: baseline;
}

a {
  text-decoration: none;
}

.item {
  font-size: 20px;
}

.searchBar {
  border: none;
  background: #e8f0fe;
  width: 400px;
  padding-left: 5px;
  border-radius: 6px 6px;
}

.fa-search {
  margin-right: 4px;
}

@media only screen and (max-width: 600px) {
  ul {
    display: flex;
    flex-direction: row;
  }
  .connectItem,
  .signUpItem,
  .disconnectItem {
    visibility: hidden;
  }

  .icon {
    margin: 25px 0 -20px 0;
  }

  .logo {
    display: none;
  }
  nav {
    background: white;
  }
}
</style>