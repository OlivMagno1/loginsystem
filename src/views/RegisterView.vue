<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const email = ref("");
const password = ref("");
const conf_password = ref("");

const Register = async () => {
  if (!email.value || !password.value || !conf_password.value) {
    return alert("Preencha todos os campos antes de continuar");
  }

  if (password.value !== conf_password.value) {
    return alert("As senhas digitadas são diferentes");
  }

  const res = await fetch("http://localhost:3434/register", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      email: email.value,
      password: password.value,
    }),
  }).then((res) => res.json());

  if (res.success) {
    localStorage.setItem("token", res.token);
    router.push("/");
  } else {
    alert(res.message);
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
        <span>Informe o seu e-mail</span>
        <input type="email" v-model="email" placeholder="test@test.com" />
      </label>
      <label>
        <span>Informe a sua senha</span>
        <input type="password" v-model="password" placeholder="************" />
      </label>
      <label>
        <span>Confirme a senha digitada</span>
        <input
          type="password"
          v-model="conf_password"
          placeholder="************"
        />
      </label>
      <input type="submit" value="Cadastrar-se" />
    </form>
    <footer>
      <p>
        Já possui uma conta?
        <router-link to="/login">Entre com o seu usuário</router-link>
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
  padding: 4rem 1.5rem;
  width: 35rem;
}

label {
  display: block;
  margin-bottom: 1.5rem;
}

label span {
  display: block;
  color: var(--gray);
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
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
</style>
