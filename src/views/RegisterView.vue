<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const email = ref("");
const password = ref("");
const conf_password = ref("");
const alert_message = ref("");
const check_alert = ref(false);

const Register = async () => {
  if (!email.value || !password.value || !conf_password.value) {
    check_alert.value = true;
    alert_message.value = "Preencha todos os campos antes de continuar!";
    return;
  }

  if (password.value !== conf_password.value) {
    check_alert.value = true;
    alert_message.value = "As senhas digitadas não coincidem!";
    return;
  }

  const res = await fetch(
    "https://admirable-baklava-67109e.netlify.app/.netlify/functions/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    }
  ).then((res) => res.json());

  if (res.success) {
    localStorage.setItem("token", res.token);
    router.push("/");
  } else {
    check_alert.value = true;
    alert_message.value = res.message;
  }
};
</script>

<template>
  <main>
    <header>
      <h1 class="logo">APLICATIVO</h1>
      <h2>Cadastro</h2>
      <p>Escolha um e-mail e uma senha para continuar</p>
    </header>

    <form @submit.prevent="Register">
      <label>
        <span>Informe o seu e-mail:</span>
        <input type="email" v-model="email" placeholder="seu@email.com" />
      </label>
      <div class="twin-label">
        <label>
          <span>Informe a sua senha:</span>
          <input type="password" v-model="password" placeholder="••••••••" />
          <password-meter :password="password" />
        </label>
        <label>
          <span>Confirme a senha digitada:</span>
          <input
            type="password"
            v-model="conf_password"
            placeholder="••••••••"
          />
        </label>
        <Transition name="shakeIn">
          <span class="alert" :class="{ shakeStill: check_alert }">
            {{ alert_message }}
          </span>
        </Transition>
      </div>
      <input type="submit" value="Cadastrar-se" @click="check_alert = false" />
    </form>
    <footer>
      <p>
        Já possui uma conta?
        <router-link to="/login">Entre com o seu usuário</router-link>
      </p>
    </footer>
  </main>
</template>

<script>
import { defineComponent } from "vue";
import PasswordMeter from "vue-simple-password-meter";

export default defineComponent({
  components: {
    PasswordMeter,
  },
});
</script>
