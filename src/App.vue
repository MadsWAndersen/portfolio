
<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref, onMounted } from 'vue';
import anime from 'animejs';

// Import components //

import Logo from './components/Logo.vue';
import Experience from './components/Experience.vue';
import PortraitPicture from './components/PortraitPicture.vue';
import Triangle from './components/layout/Triangle.vue';
import Loading from './components/layout/Loading.vue';
import ContactForm from './components/layout/ContactForm.vue';
import Projects from './components/Projects.vue';



// Define variables //
const showMenu = ref(false);
const isScrolled = ref(false);
const isActive = ref(false);


// Add event listener to detect scroll //
window.addEventListener('scroll', () => {
  isScrolled.value = window.scrollY > 10;
});

// Handle menu click //
function handleMenuClick() {
  showMenu.value = !showMenu.value;
  isActive.value = !isActive.value
}


// Call mounted hook //
onMounted(() => {
  // Wrap every letter in a span
  var textWrapper = document.querySelector('.ml14 .letters');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

  anime.timeline({ loop: false })
    .add({
      targets: '.ml14 .line',
      scaleX: [0, 1],
      opacity: [0.5, 1],
      easing: "easeInOutExpo",
      duration: 900,
      delay: 4000,
    }).add({
      targets: '.ml14 .letter',
      opacity: [0, 1],
      translateX: [40, 0],
      translateZ: 0,
      scaleX: [0.3, 1],
      easing: "easeOutExpo",
      duration: 800,
      offset: '-=600',
      delay: (el, i) => 150 + 25 * i
    })
});
</script>
<template>
  <!-- Header component -->

  <Loading />


  <div id="menu" :class="{ active: showMenu }">
    <nav>
      <a @click="handleMenuClick" href="#home">Home</a>
      <a @click="handleMenuClick" href="#about">About</a>
      <a @click="handleMenuClick" href="#projects">Projects</a>
      <a @click="handleMenuClick" href="#contact">Contact</a>
    </nav>
  </div>


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
          <div id="menu-icon" :class="{ active: isActive }" @click="handleMenuClick">
            <span class="menu-icon__line menu-icon__line-left"></span>
            <span class="menu-icon__line menu-icon__line-center"></span>
            <span class="menu-icon__line menu-icon__line-right"></span>
          </div>
        </div>
      </div>
    </div>
  </header>


  <!-- Home section -->
  <section id="home">
    <div class="container">
      <div class="container__introduction">
        <div class="container__introduction__wrapper">
          <img class="container__img" src="/img/MadsPicture.jpg" alt="">
          <h1 class="ml14">
            <span class="text-wrapper">
              <span class="letters">Welcome!</span>
              <span class="line"></span>
            </span>
          </h1>
          <p class="container__introduction__wrapper__text--white">

            Welcome to my portfolio! My name is Mads and I am an ambitious web development student with a passion for
            creating effective and engaging websites. My education, as well as my experience in the industry, has given me
            a strong understanding of front-end technologies, and I am always eager to learn more and improve my
            skills.<br>
            <br> Thanks for visiting my site!
          </p>

          <a href="https://welling.nu/CV.pdf">
            <svg xmlns="http://www.w3.org/2000/svg" width="38.769" height="47.647" viewBox="0 0 38.769 47.647">
              <g id="Group_14" data-name="Group 14" transform="translate(-219 -1951.353)">
                <g id="resume-4-svgrepo-com" transform="translate(171.3 1951.353)">
                  <path id="Path_50" data-name="Path 50"
                    d="M78.475,0H55.692A8,8,0,0,0,47.7,7.994V39.655a8,8,0,0,0,7.992,7.992H76.06l.867-.866L85.6,38.105l.866-.866V7.994A8,8,0,0,0,78.475,0Zm5.034,36.013H79.029a4.2,4.2,0,0,0-4.195,4.195v4.48H55.692a5.033,5.033,0,0,1-5.033-5.033V7.994A5.034,5.034,0,0,1,55.692,2.96H78.475a5.034,5.034,0,0,1,5.034,5.034V36.013Z"
                    transform="translate(0)" fill="#f60" />
                </g>
                <g id="letter-cc-svgrepo-com" transform="translate(229.037 1967.445)">
                  <path id="Path_52" data-name="Path 52"
                    d="M15,22.908H9a1.993,1.993,0,0,1-2-1.987V10.987A1.993,1.993,0,0,1,9,9h6v1.987H9v9.935h6Z"
                    transform="translate(-6.921 -8.088)" fill="#f60" />
                  <g id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;"
                    transform="translate(0 -0.177)">
                    <rect id="Rectangle_24" data-name="Rectangle 24" width="8" height="15.908" fill="none" />
                  </g>
                </g>
                <g id="letter-vv-svgrepo-com" transform="translate(238.732 1967.824)">
                  <path id="Path_54" data-name="Path 54" d="M13,9,11,22,9,9H7L9.52,23h2.96L15,9Z"
                    transform="translate(-6.664 -8.412)" fill="#f60" />
                  <rect id="Rectangle_25" data-name="Rectangle 25" width="9" height="15" transform="translate(0 0.176)"
                    fill="none" />
                </g>
              </g>
            </svg>


          </a>


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
  <section id="about">
    <Experience />
  </section>


  <!-- Projects -->
  <section id="projects">
    <Projects />
  </section>



  <!-- Contact section -->
  <section class="container" id="contact">
    <div class="container__bg">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1428.019" height="919.513"
        viewBox="0 0 1428.019 919.513">
        <defs>
          <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
            <stop offset="0" stop-color="#f60" />
            <stop offset="1" stop-color="#d58d5e" />
          </linearGradient>
        </defs>
        <g id="Group_9" data-name="Group 9" transform="translate(-211.981 -73.052)">
          <path id="Path_11" data-name="Path 11" d="M15.9,13.978,1.054-1.565l.228,189.7L15.9,171.375Z"
            transform="translate(1624.099 160.434)" fill="url(#linear-gradient)" />
          <path id="Path_25" data-name="Path 25" d="M15.9,13.978,1.054-1.565l.228,189.7L15.9,171.375Z"
            transform="translate(944.1 467.478)" fill="url(#linear-gradient)" />
          <path id="Path_12" data-name="Path 12" d="M1.054,29.862,31.073-1.565,30.611,382,1.054,348.12Z"
            transform="translate(210.927 307.38)" fill="url(#linear-gradient)" />
          <path id="Path_21" data-name="Path 21" d="M1.054,29.862,31.073-1.565,30.611,382,1.054,348.12Z"
            transform="translate(777.073 991) rotate(180)" fill="url(#linear-gradient)" />
          <path id="Path_27" data-name="Path 27" d="M1.054,29.862,31.073-1.565,30.611,382,1.054,348.12Z"
            transform="translate(1162.208 991) rotate(180)" fill="url(#linear-gradient)" />
          <path id="Path_23" data-name="Path 23" d="M1.054,29.862,31.073-1.565,30.611,382,1.054,348.12Z"
            transform="translate(1188.073 524) rotate(180)" fill="url(#linear-gradient)" />
          <path id="Path_26" data-name="Path 26" d="M1.054,21.669,23.247-1.565,22.905,282,1.054,256.953Z"
            transform="translate(615.945 610.565)" fill="url(#linear-gradient)" />
          <path id="Path_14" data-name="Path 14" d="M0,17.386,16.607,0l-.256,212.2L0,193.453Z"
            transform="translate(327.258 694.684)" fill="url(#linear-gradient)" />
          <path id="Path_19" data-name="Path 19" d="M0,17.386,16.607,0l-.256,212.2L0,193.453Z"
            transform="translate(439 253.717)" fill="url(#linear-gradient)" />
          <path id="Path_22" data-name="Path 22" d="M0,17.386,16.607,0l-.256,212.2L0,193.453Z"
            transform="translate(792.627 411.913) rotate(180)" fill="url(#linear-gradient)" />
          <path id="Path_18" data-name="Path 18" d="M0,45.147,43.126,0l-.664,551.026L0,502.354Z"
            transform="translate(515 73.052)" fill="url(#linear-gradient)" />
          <path id="Path_24" data-name="Path 24" d="M0,45.147,43.126,0l-.664,551.026L0,502.354Z"
            transform="translate(1405.125 910.841) rotate(180)" fill="url(#linear-gradient)" />
        </g>
      </svg>
    </div>
    <ContactForm />
  </section>
</template> 