<template>
  <div class="tile columns">
    <div class="column tile">
      <div class="tile is-child box">
        <h2 class="title">Inscription</h2>
        <Input
          placeholder="Nom"
          icon="fa-user"
          v-model="nom.value"
          :ref="nom.ref"
          :is-danger="!!nom.error"
          :error-message="nom.error && nom.error.message"
        />
        <Input
          placeholder="Email"
          icon="fa-user"
          v-model="email.value"
          :ref="email.ref"
          :is-danger="!!email.error"
          :error-message="email.error && email.error.message"
        />
        <Input
          placeholder="Mot de passe"
          type="password"
          icon="fa-key"
          v-model="password.value"
          :ref="password.ref"
          :is-danger="!!password.error"
          :error-message="password.error && password.error.message"
        />
        <Input
          placeholder="Confirmer mot de passe"
          type="password"
          icon="fa-key"
          v-model="confirmedPassword.value"
          :ref="confirmedPassword.ref"
          :is-danger="!!confirmedPassword.error"
          :error-message="
            confirmedPassword.error && confirmedPassword.error.message
          "
        />
        <button class="button is-link" @click="onSubmit">s'inscrire</button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Input from "../components/Input.vue";
import { useForm } from "vue-hooks-form";
import axios from "axios";

export default defineComponent({
  name: "signup",
  components: {
    Input,
  },
  props: {
    modelValue: String,
  },
  setup() {
    const { useField, errors, values, handleSubmit } = useForm({
      defaultValues: {
        nom: "",
      },
    });
    const nom = useField("nom", {
      rule: { required: true },
    });
    const email = useField("email", {
      rule: { required: true },
    });
    const password = useField("password", {
      rule: {
        required: true,
        min: 6,
        max: 10,
      },
    });

    const confirmedPassword = useField("confirmedPassword", {
      rule: {
        required: true,
        validator(rule, value) {
          if (!value || value !== values.password) {
            return new Error("The two passwords do not match !");
          }
          return true;
        },
      },
    });
    const onSubmit = (data) => {
      console.log(data);
      axios
        .post("http://localhost:3000/api/auth/signup", data, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          console.log(response.data.token);
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("id", response.data.userId);
          window.location.href = "http://localhost:8080/?#/";
        })
        .catch(function(error) {
          console.log(error);
        });
      console.log(data);
    };

    return {
      nom,
      email,
      password,
      confirmedPassword,
      onSubmit: handleSubmit(onSubmit),
      errors,
      values,
    };
  },
});
</script>

<style scoped>
h1 {
  text-align: center;
}
.box {
  min-width: 250px;
}
h2 {
  color: #014955;
}
.button {
  cursor: pointer;
  background: #1687a7;
  color: #fff7f7;
  width: 150px;
  height: 35px;
  border: none;
  border-radius: 20px;
  margin-top: 50px;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 1px;
}
</style>
