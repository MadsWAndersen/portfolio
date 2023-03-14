<template>
    <div class="container fixed-email">
        <div class="rows">
           <div class="col-11">
            <a href="mailto:madswandersen@hotmail.com">madswandersen@hotmail.com</a>
           </div>
        </div>
       
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.fixed-email {
    position: relative;
    a {
        position: fixed;
        right: 0;
        bottom: 0;
        transform: rotate(90deg);
    }
}
</style>