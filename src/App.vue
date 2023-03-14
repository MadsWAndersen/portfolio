<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref, onMounted } from 'vue';

// Import components //
import Menu from './components/Menu.vue';
import Email from './components/Email.vue';
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
  isScrolled.value = window.scrollY > 10;
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
        <div class="col-xl-2 col-md-6 offset-1 com-sm-1 d-flex align-items-center">
          <Logo />
        </div>
        <div class="col-xl-8  col-md-5 col-sm-2 d-flex justify-content-end">
          <Hamburger @click="handleMenuClick" />
        </div>
      </div>
    </div>
  </header>
  <!-- Home section -->
  <section id="home">
    <div class="container">
      <div class="row introduction">
        <div class="col-lg-5 offset-lg-1 col-sm-12">
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
        <div class="col-lg-5 offset-lg-1 col-sm-12">
          <PortraitPicture />
        </div>
      </div>
    </div>
  </section>
  <!-- About section -->
  <section id="about">
    <div class="bg">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1428.019" height="919.513" viewBox="0 0 1428.019 919.513">
        <defs>
          <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
            <stop offset="0" stop-color="#f60"/>
            <stop offset="1" stop-color="#d58d5e"/>
          </linearGradient>
        </defs>
        <g id="Group_9" data-name="Group 9" transform="translate(-211.981 -73.052)">
          <path id="Path_11" data-name="Path 11" d="M15.9,13.978,1.054-1.565l.228,189.7L15.9,171.375Z" transform="translate(1624.099 160.434)" fill="url(#linear-gradient)"/>
          <path id="Path_25" data-name="Path 25" d="M15.9,13.978,1.054-1.565l.228,189.7L15.9,171.375Z" transform="translate(944.1 467.478)" fill="url(#linear-gradient)"/>
          <path id="Path_12" data-name="Path 12" d="M1.054,29.862,31.073-1.565,30.611,382,1.054,348.12Z" transform="translate(210.927 307.38)" fill="url(#linear-gradient)"/>
          <path id="Path_21" data-name="Path 21" d="M1.054,29.862,31.073-1.565,30.611,382,1.054,348.12Z" transform="translate(777.073 991) rotate(180)" fill="url(#linear-gradient)"/>
          <path id="Path_27" data-name="Path 27" d="M1.054,29.862,31.073-1.565,30.611,382,1.054,348.12Z" transform="translate(1162.208 991) rotate(180)" fill="url(#linear-gradient)"/>
          <path id="Path_23" data-name="Path 23" d="M1.054,29.862,31.073-1.565,30.611,382,1.054,348.12Z" transform="translate(1188.073 524) rotate(180)" fill="url(#linear-gradient)"/>
          <path id="Path_26" data-name="Path 26" d="M1.054,21.669,23.247-1.565,22.905,282,1.054,256.953Z" transform="translate(615.945 610.565)" fill="url(#linear-gradient)"/>
          <path id="Path_14" data-name="Path 14" d="M0,17.386,16.607,0l-.256,212.2L0,193.453Z" transform="translate(327.258 694.684)" fill="url(#linear-gradient)"/>
          <path id="Path_19" data-name="Path 19" d="M0,17.386,16.607,0l-.256,212.2L0,193.453Z" transform="translate(439 253.717)" fill="url(#linear-gradient)"/>
          <path id="Path_22" data-name="Path 22" d="M0,17.386,16.607,0l-.256,212.2L0,193.453Z" transform="translate(792.627 411.913) rotate(180)" fill="url(#linear-gradient)"/>
          <path id="Path_18" data-name="Path 18" d="M0,45.147,43.126,0l-.664,551.026L0,502.354Z" transform="translate(515 73.052)" fill="url(#linear-gradient)"/>
          <path id="Path_24" data-name="Path 24" d="M0,45.147,43.126,0l-.664,551.026L0,502.354Z" transform="translate(1405.125 910.841) rotate(180)" fill="url(#linear-gradient)"/>
        </g>
      </svg>
    </div>
    
    <Experience />
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