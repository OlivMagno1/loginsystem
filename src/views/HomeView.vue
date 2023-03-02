<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

const Logout = async () => {
  const res = await fetch(
    "https://admirable-baklava-67109e.netlify.app/.netlify/functions/logout",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        session_token: localStorage.getItem("token"),
      }),
    }
  ).then((res) => res.json());

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
    <header>
      <h1 class="logo">APLICATIVO</h1>
      <h2>Menu principal</h2>
      <p>Aqui estão todas as funcionalidades do nosso aplicativo</p>
    </header>
    <div class="pageBody">
      <span>
        Muito obrigado por usar nosso aplicativo, atualmente a única
        funcionalidade existente é sair do sistema.
      </span>
      <button @click="Logout">Sair</button>
    </div>
  </main>
</template>

<style scoped>
.pageBody {
  flex: 1 1 0%;
  display: block;
  border-radius: 1.5rem 1.5rem 0 0;
  background-color: #fff;
  box-shadow: 0px -4px 12px 4px rgba(0, 0, 0, 0.16);
  color: var(--dark);
  padding: 4rem 1.5rem;
  width: 35rem;
}

.pageBody span {
  display: block;
  color: var(--gray);
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 4rem;
}

button {
  display: block;
  width: fit-content;
  margin: 0 auto;
  font-size: clamp(0.75rem, 0.5rem + 0.8vw, 1.5rem);
  font-weight: 700;
  color: #fff;
  background-color: var(--primary);
  padding: clamp(0.5rem, 0.333rem + 0.6vw, 1rem);
  border-radius: clamp(0.3rem, 0.233rem + 0.2vw, 0.5rem);
  cursor: pointer;
  transition: 0.2s ease;
}

button:hover {
  background-color: var(--primary-dark);
}
</style>
