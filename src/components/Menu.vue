<script setup>
import { ref, onMounted } from 'vue'




</script>

<template>
    <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/test">Test</RouterLink>
    </nav>
</template>

<style lang="scss" scoped>

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


</style>