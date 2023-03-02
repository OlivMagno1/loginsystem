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

@media screen and (orientation: landscape) {
  main {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: clamp(30rem, 100vw, 120rem);
    background-color: var(--primary);
    color: #fff;
  }

  header {
    padding: clamp(0.75rem, 0.5rem + 0.8vw, 1.5rem);
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    justify-content: center;
    width: clamp(25rem, 21.667rem + 11.1vw, 35rem);
  }

  footer {
    background-color: #fff;
    width: clamp(25rem, 21.667rem + 11.1vw, 35rem);
    color: var(--dark);
    text-align: center;
    padding: clamp(0.5rem, 0.167rem + 1.1vw, 1.5rem);
    padding-bottom: clamp(0.5rem, -0.333rem + 2.8vw, 3rem);
  }

  .logo {
    display: inline-block;
    font-size: clamp(0.6rem, 0.467rem + 0.4vw, 1rem);
    font-weight: 900;
    letter-spacing: 5px;
    padding: clamp(0.25rem, 0.167rem + 0.3vw, 0.5rem);
    padding-right: calc(clamp(0.25rem, 0.167rem + 0.3vw, 0.5rem) - 5px);
    border: 2px solid #fff;
    color: #fff;
    margin-bottom: clamp(0.5rem, 0.167rem + 1.1vw, 1.5rem);
    cursor: default;
  }

  h2 {
    font-size: clamp(1rem, 0.667rem + 1.11vw, 2rem);
    margin-bottom: clamp(0.5rem, 0.167rem + 1.1vw, 1.5rem);
  }

  p {
    font-weight: 500;
    font-size: clamp(0.6rem, 0.467rem + 0.4vw, 1rem);
  }

  form {
    position: relative;
    flex: 1 1 0%;
    display: flex;
    flex-flow: column nowrap;
    border-radius: clamp(0.75rem, 0.5rem + 0.8vw, 1.5rem)
      clamp(0.75rem, 0.5rem + 0.8vw, 1.5rem) 0 0;
    background-color: #fff;
    box-shadow: 0px -4px 12px 4px rgba(0, 0, 0, 0.16);
    color: var(--dark);
    padding: clamp(0.5rem, 1.7vw, 2rem) clamp(0.75rem, 0.5rem + 0.8vw, 1.5rem);
    width: clamp(25rem, 21.667rem + 11.1vw, 35rem);
  }

  label {
    display: block;
    margin-bottom: clamp(0.75rem, 0.5rem + 0.8vw, 1.5rem);
    height: clamp(3rem, 2.333rem + 2.2vw, 5rem);
  }

  label span {
    display: block;
    color: var(--gray);
    font-size: clamp(0.6rem, 0.467rem + 0.4vw, 1rem);
    font-weight: 500;
    margin: 0.5rem 0;
  }

  .alert {
    color: var(--alert);
    font-size: clamp(0.6rem, 0.467rem + 0.4vw, 1rem);
    transition: 0.82s;
    width: clamp(25rem, 21.667rem + 11.1vw, 35rem);
  }

  .twin-label {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    margin-bottom: clamp(0.75rem, 0.5rem + 0.8vw, 1.5rem);
    height: clamp(4rem, 3rem + 3.3vw, 7rem);
  }

  .twin-label label {
    width: clamp(11rem, 9.667rem + 4.4vw, 15rem);
  }

  input:not([type="submit"]) {
    display: block;
    width: 100%;
    border-radius: clamp(0.3rem, 0.233rem + 0.2vw, 0.5rem);
    padding: clamp(0.5rem, 0.167rem + 1.1vw, 1.5rem) clamp(0.25rem, 0.8vw, 1rem);
    font-size: clamp(0.6rem, 0.467rem + 0.4vw, 1rem);
    font-weight: 500;
    color: var(--dark);
    background-color: var(--light);
  }

  input:not([type="submit"])::placeholder {
    color: var(--gray);
    font-style: italic;
  }

  input[type="submit"] {
    align-self: center;
    position: relative;
    display: block;
    width: fit-content;
    font-size: clamp(0.75rem, 0.5rem + 0.8vw, 1.5rem);
    font-weight: 700;
    color: #fff;
    background-color: var(--primary);
    padding: clamp(0.5rem, 0.333rem + 0.6vw, 1rem);
    border-radius: clamp(0.3rem, 0.233rem + 0.2vw, 0.5rem);
    cursor: pointer;
    transition: 0.2s ease;
  }

  input[type="submit"]:hover {
    background-color: var(--primary-dark);
  }
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
