<script setup>
import { RouterLink, RouterView } from "vue-router";
import Menu from  './components/Menu.vue';
import Logo from  './components/Logo.vue';
import Hamburger from  './components/Hamburger.vue';
import Triangle from  './components/layout/Triangle.vue';
import { ref, setTransitionHooks, onMounted } from 'vue';

onMounted(() => {
  const ham = document.getElementById('hamburger');
  const menu = document.getElementById('menu')

  ham.addEventListener("click", function() {
    menu.classList.toggle("active");
    console.log("toggle")
  })



})



</script>

<template>
  <div id="menu">
    <Menu/>
  </div>


  <header>
    <div class="container">
      <div class="triangle"><Triangle/></div>
      <div class="row pt-5">
        <div class="col-3 offset-1 d-flex align-items-center"><Logo/></div>
        <div class="col-8 d-flex justify-content-end"><Hamburger/></div>
      </div>
    </div>
  </header>


<section>
  <div class="container">
    <div class="row">
      <div class="col-6">ey</div>
      <div class="col-6">eys</div>

    </div>
  </div>

</section>

  <section>
    <RouterView />
  </section>

</template>

