<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref, onMounted } from 'vue';

// Import components //
import Menu from './components/Menu.vue';
import Logo from './components/Logo.vue';
import Experience from './components/Experience.vue';
import Hamburger from './components/Hamburger.vue';
import PortraitPicture from './components/PortraitPicture.vue';
import Triangle from './components/layout/Triangle.vue';

// Define variables //
const showMenu = ref(false);
const isScrolled = ref(false);

// Add event listener to detect scroll //
window.addEventListener('scroll', () => {
  isScrolled.value = window.scrollY > 0;
});

// Handle menu click //
function handleMenuClick() {
  showMenu.value = !showMenu.value;
}

// Call mounted hook //
onMounted(() => {
  // Add any additional code here if needed //
});
</script>
<template>
  <!-- Header component -->
  <header :class="{ 'header-scroll': isScrolled }">
    <div class="container">
      <div class="triangle">
        <Triangle />
      </div>
      <div class="row">
        <div class="col-3 offset-1 d-flex align-items-center">
          <Logo />
        </div>
        <div class="col-7 d-flex justify-content-end">
          <Hamburger @click="handleMenuClick" />
        </div>
      </div>
    </div>
  </header>
  <!-- Home section -->
  <section id="home">
    <div class="container">
      <div class="row introduction">
        <div class="col-5 offset-1">
          <h1 class="introduction__title--white">Velkommen!</h1>
          <p class="introduction__text--white ">Velkommen til min portefølje! Jeg er en ambitiøs webudviklingsstuderende
            med en
            passion for at skabe effektive og engagerende websteder. Min uddannelse, samt
            erfaring fra erhvervet har givet mig en solid forståelse af front-end teknologier, og jeg er
            altid ivrig efter at lære mere og forbedre mine færdigheder.
            <br><br>
            Tak fordi du besøger min side!
          </p>
        </div>
        <div class="col-5 offset-1">
          <PortraitPicture />
        </div>
      </div>
    </div>
  </section>
  <!-- About section -->
  <section id="about">
    <Experience />
  </section>


  <section id="contact">
    <form action="https://formspree.io/f/xknazqyo" method="POST">
      <label>
        Your email:
        <input type="email" name="email">
      </label>
      <label>
        Your message:
        <textarea name="message"></textarea>
      </label>
      <!-- your other form fields go here -->
      <button type="submit">Ssend</button>
    </form>
  </section>
  <!-- Loading sections -->
  <section class="loading delayed"></section>
  <section class="loading">
    <div class="svg-wrapper">
      <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
        <rect class="shape" height="60" width="320" />
        <h2 class="text">mads welling</h2>
      </svg>
    </div>
  </section>

  <!-- Menu component -->

  <Menu :class="{ active: showMenu }" />
</template> 