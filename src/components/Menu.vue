<script setup>
import { ref, onMounted } from 'vue'




</script>

<template>
    <div id="menu">
        <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
            <RouterLink to="/test">Test</RouterLink>
        </nav>
    </div>
</template>

<style lang="scss" scoped>

#menu {
  position: fixed;
  
  right: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  background: rgb(255,102,0);
  background: linear-gradient(90deg, rgba(255,102,0,1) 0%, rgba(213,141,94,1) 100%);
  transform: translateX(100vw);
    transition: all 1000ms cubic-bezier(1, -0.22, 0.765, 1);
  &.active {
    transform: translateX(0px);
  }
  nav {
    flex-direction: column;
    display: flex;
    gap: 10px;
    height: 100%;
    justify-content: center;
    align-items: center;
    right: 0;
    a {
        color: #fff;
        text-decoration: none;
        font-size: 25px;
    }
  }

}




</style>