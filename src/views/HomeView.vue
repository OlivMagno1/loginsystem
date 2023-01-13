<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

const Logout = async () => {
  const res = await fetch("http://localhost:3000/logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      session_token: localStorage.getItem("token"),
    }),
  }).then((res) => res.json());

  if (res.success) {
    localStorage.removeItem("token");
    router.push("/login");
  } else {
    alert(res.message);
  }
};
</script>

<template>
  <main>
    <h1>Página Principal</h1>
    <button @click="Logout">Sair</button>
  </main>
</template>

<style scoped>
main {
  padding: 1.5rem;
}

button {
  margin-bottom: 1rem;
}
</style>
