<script setup>

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
    background-color: orange;
    height: 8vh;
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
}


</style>