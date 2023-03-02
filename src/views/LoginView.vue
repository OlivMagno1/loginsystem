<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const email = ref("");
const password = ref("");
const alert_message = ref("");
const check_alert = ref(false);

const Login = async () => {
  if (!email.value || !password.value) {
    check_alert.value = true;
    alert_message.value = "Preencha todos os campos antes de continuar!";
    return;
  }

  const res = await fetch(
    "https://admirable-baklava-67109e.netlify.app/.netlify/functions/login",
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
      <h2>Login</h2>
      <p>Entre com seu usuário ou cadastre uma conta nova para continuar</p>
    </header>

    <form @submit.prevent="Login">
      <label>
        <span>Informe o seu e-mail</span>
        <input type="email" v-model="email" placeholder="seu@email.com" />
      </label>
      <label>
        <span>Informe a sua senha</span>
        <input type="password" v-model="password" placeholder="••••••••" />
        <Transition name="shakeIn">
          <span class="alert" :class="{ shakeStill: check_alert }">
            {{ alert_message }}
          </span>
        </Transition>
      </label>
      <input type="submit" value="Entrar" @click="check_alert = false" />
    </form>
    <footer>
      <p>
        Ainda não possui uma conta?
        <router-link to="/register">Cadastre-se</router-link>
      </p>
    </footer>
  </main>
</template>
