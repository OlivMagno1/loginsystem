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

<style scoped>
main {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: var(--primary);
  color: #fff;
}

header {
  padding: 1.5rem;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: center;
  width: 35rem;
}

footer {
  background-color: #fff;
  width: 35rem;
  color: var(--dark);
  text-align: center;
  padding: 1.5rem;
  padding-bottom: 3rem;
}

h2 {
  font-size: 2.125rem;
  margin-bottom: 1rem;
}

h2 ~ p {
  font-weight: 500;
  font-size: 1rem;
}

form {
  flex: 1 1 0%;
  display: block;
  border-radius: 1.5rem 1.5rem 0 0;
  background-color: #fff;
  box-shadow: 0px -4px 12px 4px rgba(0, 0, 0, 0.16);
  color: var(--dark);
  padding: 2rem 1.5rem;
  width: 35rem;
}

label {
  display: block;
  margin-bottom: 1.5rem;
  height: 7rem;
}

label span {
  display: block;
  color: var(--gray);
  font-size: 1rem;
  font-weight: 500;
  margin: 0.5rem 0;
}

.alert {
  color: var(--alert);
  transition: 0.82s;
}

input:not([type="submit"]) {
  display: block;
  width: 100%;
  border-radius: 0.5rem;
  padding: 1.5rem 1rem;
  font-size: 1rem;
  font-weight: 500;
  color: var(--dark);
  background-color: var(--light);
}

input:not([type="submit"])::placeholder {
  color: var(--gray);
  font-style: italic;
}

input[type="submit"] {
  display: block;
  width: fit-content;
  margin: 0 auto;
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  background-color: var(--primary);
  padding: 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: 0.2s ease;
}

input[type="submit"]:hover {
  background-color: var(--primary-dark);
}

.shakeIn-enter-active,
.shakeStill {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
}

.shakeIn-leave-active {
  transition: opacity 0.5s ease;
}

.shakeIn-leave-to {
  opacity: 0;
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
