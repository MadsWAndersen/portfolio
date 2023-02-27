<script setup>
import { RouterLink, RouterView } from "vue-router";
import Header from  './components/Header.vue';
import { ref, setTransitionHooks } from 'vue';





</script>

<template>
  <header>
    <div class="wrapper">
      <Header/>  

 
      
    </div>
  
  </header>

  <section>
    <RouterView />
  </section>

</template>

