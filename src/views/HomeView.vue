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
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  background-color: var(--primary);
  padding: 1rem;
  border: 0;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: 0.2s ease;
}

button:hover {
  background-color: var(--primary-dark);
}
</style>
