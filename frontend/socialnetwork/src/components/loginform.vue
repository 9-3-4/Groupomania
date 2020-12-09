<template>
  <div id="login">
    <form @submit.prevent="submit()">
      <input class="imput" id="email" type="email"  placeholder="Email" v-model="email" />
      <input class="imput" id="password" type="password" placeholder="Mot de passe" v-model="password" /><br/>
      <button class="button" type="submit">Me connecter</button>
    </form>
  </div>  
</template>

<script>
/*export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
methods: {
    submit() {
      axios.post(
          "http://localhost:3000/api/auth/login",
          {
            email: document.getElementById("email").value,
            password: document.getElementById("password").value,
          },
          headers: {
              "Content-Type": "application/json",
            },
      )
        .catch(function (error) {
                  console.log(error);
                });
            console.log(data);
          },
  
        return {
          nom,
          email,
          password,
          }
  
    }
  
};*/
</script>

         
          
            
          }
        )
        


<style>
.button {
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
#email, #password{
  text-align: center;
}
.imput{
  background: #e4d1d3;
  margin-bottom: 20px;
  margin-top: 75px;
  margin-right: 20px;
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