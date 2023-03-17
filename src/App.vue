
<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref, onMounted } from 'vue';
import anime from 'animejs';

// Import components //
import Menu from './components/Menu.vue';
import Email from './components/Email.vue';
import Logo from './components/Logo.vue';
import Experience from './components/Experience.vue';
import Hamburger from './components/Hamburger.vue';
import PortraitPicture from './components/PortraitPicture.vue';
import Triangle from './components/layout/Triangle.vue';
import Loading from './components/layout/Loading.vue';
import ContactForm from './components/layout/ContactForm.vue';



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

const myElement = ref(null);

// Call mounted hook //
onMounted(() => {
  // Wrap every letter in a span
  var textWrapper = document.querySelector('.ml14 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml14 .line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeInOutExpo",
    duration: 900
  }).add({
    targets: '.ml14 .letter',
    opacity: [0,1],
    translateX: [40,0],
    translateZ: 0,
    scaleX: [0.3, 1],
    easing: "easeOutExpo",
    duration: 800,
    offset: '-=600',
    delay: (el, i) => 150 + 25 * i
  }).add({
    targets: '.ml14',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
});
</script>
<template>
  <!-- Header component -->

<Loading />
<Menu :class="{ active: showMenu }" />
<header :class="{ 'header-scroll': isScrolled }">
  <div class="container header">
    <div class="container__triangle">
      <Triangle />
    </div>
    <div class="container__menu">
      <div class="container__menu__logo">
        <Logo />
      </div>
      <div class="container__menu_hamburger">
        <Hamburger @click="handleMenuClick" />
      </div>
    </div>
  </div>
</header>


<!-- Home section -->
<section id="home">
  <div class="container">
    <div class="container__introduction">
      <div class="container__introduction__wrapper">
        <h1 class="ml14">
          <span class="text-wrapper">
            <span class="letters">Welcome!</span>
            <span class="line"></span>
          </span>
        </h1>
        <p class="container__introduction__wrapper__text--white">Welcome to my portfolio! I am an ambitious web development student with a passion for creating effective and engaging websites. My education, as well as my experience in the industry, has given me a strong understanding of front-end technologies, and I am always eager to learn more and improve my skills.<br>
          <br> Thanks for visiting my site! 
        </p>
      </div>
      <div class="container__introdution__wrapper__image">
        <PortraitPicture />
      </div>

      <div class="container__introduction__cta">
        <a href="#about" class="container__introduction__cta__arrow"></a>
      </div>
    </div>
  </div>
</section>



<!-- About section -->
<section id="about" class="container">
  <Experience />
</section>


<!-- Contact section -->
<section class="container" id="contact">
  <div class="container__bg">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1428.019" height="919.513" viewBox="0 0 1428.019 919.513">
      <defs>
        <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
          <stop offset="0" stop-color="#f60" />
          <stop offset="1" stop-color="#d58d5e" />
        </linearGradient>
      </defs>
      <g id="Group_9" data-name="Group 9" transform="translate(-211.981 -73.052)">
        <path id="Path_11" data-name="Path 11" d="M15.9,13.978,1.054-1.565l.228,189.7L15.9,171.375Z" transform="translate(1624.099 160.434)" fill="url(#linear-gradient)" />
        <path id="Path_25" data-name="Path 25" d="M15.9,13.978,1.054-1.565l.228,189.7L15.9,171.375Z" transform="translate(944.1 467.478)" fill="url(#linear-gradient)" />
        <path id="Path_12" data-name="Path 12" d="M1.054,29.862,31.073-1.565,30.611,382,1.054,348.12Z" transform="translate(210.927 307.38)" fill="url(#linear-gradient)" />
        <path id="Path_21" data-name="Path 21" d="M1.054,29.862,31.073-1.565,30.611,382,1.054,348.12Z" transform="translate(777.073 991) rotate(180)" fill="url(#linear-gradient)" />
        <path id="Path_27" data-name="Path 27" d="M1.054,29.862,31.073-1.565,30.611,382,1.054,348.12Z" transform="translate(1162.208 991) rotate(180)" fill="url(#linear-gradient)" />
        <path id="Path_23" data-name="Path 23" d="M1.054,29.862,31.073-1.565,30.611,382,1.054,348.12Z" transform="translate(1188.073 524) rotate(180)" fill="url(#linear-gradient)" />
        <path id="Path_26" data-name="Path 26" d="M1.054,21.669,23.247-1.565,22.905,282,1.054,256.953Z" transform="translate(615.945 610.565)" fill="url(#linear-gradient)" />
        <path id="Path_14" data-name="Path 14" d="M0,17.386,16.607,0l-.256,212.2L0,193.453Z" transform="translate(327.258 694.684)" fill="url(#linear-gradient)" />
        <path id="Path_19" data-name="Path 19" d="M0,17.386,16.607,0l-.256,212.2L0,193.453Z" transform="translate(439 253.717)" fill="url(#linear-gradient)" />
        <path id="Path_22" data-name="Path 22" d="M0,17.386,16.607,0l-.256,212.2L0,193.453Z" transform="translate(792.627 411.913) rotate(180)" fill="url(#linear-gradient)" />
        <path id="Path_18" data-name="Path 18" d="M0,45.147,43.126,0l-.664,551.026L0,502.354Z" transform="translate(515 73.052)" fill="url(#linear-gradient)" />
        <path id="Path_24" data-name="Path 24" d="M0,45.147,43.126,0l-.664,551.026L0,502.354Z" transform="translate(1405.125 910.841) rotate(180)" fill="url(#linear-gradient)" />
      </g>
    </svg>
  </div>
  <ContactForm/>
</section>

</template> 