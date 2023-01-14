<template>
  <div>
    <router-view />
  </div>
</template>

<style>
:root {
  --primary: #0f636b;
  --primary-dark: #093a3e;
  --alert: #bf160d;
  --gray: #9ca3af;
  --light: #f3f4f6;
  --dark: #111827;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  color: var(--primary);
}

input {
  appearance: none;
  outline: none;
  border: none;
  background: none;
}

.logo {
  display: inline-block;
  font-size: 1rem;
  font-weight: 900;
  letter-spacing: 5px;
  padding: 0.5rem;
  padding-right: calc(0.5rem - 5px);
  border: 2px solid #fff;
  color: #fff;
  margin-bottom: 1.5rem;
}
</style>
