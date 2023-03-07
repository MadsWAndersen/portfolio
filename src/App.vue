<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref, setTransitionHooks, onMounted } from 'vue';

// Import components //

import Menu from './components/Menu.vue';
import Logo from './components/Logo.vue';
import Hamburger from './components/Hamburger.vue';
import PortraitPicture from './components/PortraitPicture.vue';

import Triangle from './components/layout/Triangle.vue';
// import Sideline from './components/layout/Sideline.vue';
// import Loading from './components/layout/Loading.vue';


// Activate Menu //

onMounted(() => {






  // Activate Menu //
  const ham = document.getElementById('menu-icon');
  const menu = document.getElementById('menu')

  ham.addEventListener("click", function () {
    menu.classList.toggle("active");
  })


  const header = document.querySelector('header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      header.classList.add('header-scroll');
    } else {
      header.classList.remove('header-scroll');
    }
  });




})
</script>

<template>
  <header>
    <div class="container">
      <div class="triangle">
        <Triangle />
      </div>
      <div class="row">
        <div class="col-3 offset-1 d-flex align-items-center">
          <Logo />
        </div>
        <div class="col-7 d-flex justify-content-end">
          <Hamburger />
        </div>
      </div>
    </div>
  </header>

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

  <section id="home">
    <div class="container">
      <div class="row introduction">
        <div class="col-5 offset-1">
          <h1 class="introduction__title--white">Velkommen!</h1>
          <p class="introduction__text--white "> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamc
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum."

            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum."</p>

        </div>
        <div class="col-5 offset-1">
          <PortraitPicture />
        </div>
      </div>
    </div>
  </section>


  <section id="about">

  </section>




  <section class="loading delayed"></section>
  <section class="loading">
    <div class="svg-wrapper">
      <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
        <rect class="shape" height="60" width="320" />
        <h2 class="text">mads welling</h2>
      </svg>
    </div>
  </section>



  <section>
    <RouterView />
  </section>

  <Menu />
</template>
