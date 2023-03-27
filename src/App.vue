
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
            <br> Thanks for visiting my site! Oh and by the way.. My favorite color is orange! :-D
          </p>


          <div class="socials">
            <a target="_blank" href="https://welling.nu/CV.pdf">
              <svg xmlns="http://www.w3.org/2000/svg" width="38.769" height="30.647" viewBox="0 0 38.769 47.647">
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

            <a target="_blank" href="https://www.linkedin.com/in/mads-welling-andersen-a5786b184/">
              <svg xmlns="http://www.w3.org/2000/svg" width="31.745" height="30.484" viewBox="0 0 31.745 30.484">
                <g id="_7935ec95c421cee6d86eb22ecd125aef" data-name="7935ec95c421cee6d86eb22ecd125aef"
                  transform="translate(-0.5 -11.78)">
                  <path id="Path_1" data-name="Path 1"
                    d="M7.706,42.264V21.7H.9V42.264h6.8Zm-3.4-23.375A3.564,3.564,0,1,0,4.35,11.78a3.563,3.563,0,1,0-.089,7.108h.045Zm7.167,23.375s.089-18.638,0-20.568h6.805v2.983h-.045a6.774,6.774,0,0,1,6.177-3.466c4.478,0,7.835,2.94,7.835,9.257V42.264h-6.8v-11c0-2.765-.985-4.651-3.448-4.651a3.726,3.726,0,0,0-3.491,2.5,4.687,4.687,0,0,0-.224,1.667V42.264Z"
                    transform="translate(0 0)" fill="#eb6e2d" fill-rule="evenodd" />
                </g>
              </svg>


            </a>

            <a target="_blank" href="https://github.com/MadsWAndersen">
              <svg xmlns="http://www.w3.org/2000/svg" width="31.857" height="30.264" viewBox="0 0 31.857 30.264">
                <path id="github-svgrepo-com"
                  d="M32.262,7.712a24.523,24.523,0,0,1-.212,3.062,6.631,6.631,0,0,1-.16.866,18.584,18.584,0,0,1,1.967,8.881A11.527,11.527,0,0,1,29.02,29.9a18.52,18.52,0,0,1-11.092,3.365A18.52,18.52,0,0,1,6.836,29.9,11.527,11.527,0,0,1,2,20.521,18.584,18.584,0,0,1,3.967,11.64a6.636,6.636,0,0,1-.16-.866,24.532,24.532,0,0,1-.212-3.062,25.347,25.347,0,0,1,.317-3.257A1.5,1.5,0,0,1,4.642,3.19a2.184,2.184,0,0,1,1.713-.027,26.766,26.766,0,0,1,5.47,2.247,21.2,21.2,0,0,1,6.1-.817,21.2,21.2,0,0,1,6.1.817A26.762,26.762,0,0,1,29.5,3.163a2.184,2.184,0,0,1,1.713.027,1.5,1.5,0,0,1,.731,1.266A25.34,25.34,0,0,1,32.262,7.712ZM30.671,20.521c0-2.687-.618-6.371-3.982-6.371a16.341,16.341,0,0,0-4.384.8,16.327,16.327,0,0,1-4.376.8,16.326,16.326,0,0,1-4.376-.8,16.343,16.343,0,0,0-4.384-.8c-3.355,0-3.982,3.695-3.982,6.371a8.346,8.346,0,0,0,3.561,6.828,15.357,15.357,0,0,0,9.181,2.729,15.358,15.358,0,0,0,9.181-2.729A8.345,8.345,0,0,0,30.671,20.521Zm-15.928.8c0,2.2-1.07,3.982-2.389,3.982s-2.389-1.783-2.389-3.982,1.07-3.982,2.389-3.982S14.743,19.118,14.743,21.318ZM23.5,25.3c1.319,0,2.389-1.783,2.389-3.982s-1.07-3.982-2.389-3.982-2.389,1.783-2.389,3.982S22.184,25.3,23.5,25.3Z"
                  transform="translate(-2 -3)" fill="#eb6e2d" fill-rule="evenodd" />
              </svg>
            </a>

            <a target="_blank" href="https://www.instagram.com/madswandersen/">
              <svg xmlns="http://www.w3.org/2000/svg" width="30.484" height="30.484" viewBox="0 0 30.484 30.484">
                <path id="instagram-svgrepo-com"
                  d="M2,8.1A6.1,6.1,0,0,1,8.1,2h18.29a6.1,6.1,0,0,1,6.1,6.1v18.29a6.1,6.1,0,0,1-6.1,6.1H8.1a6.1,6.1,0,0,1-6.1-6.1ZM8.1,5.048A3.048,3.048,0,0,0,5.048,8.1v18.29A3.048,3.048,0,0,0,8.1,29.435h18.29a3.048,3.048,0,0,0,3.048-3.048V8.1a3.048,3.048,0,0,0-3.048-3.048Zm9.145,7.621a4.573,4.573,0,1,0,4.573,4.573A4.572,4.572,0,0,0,17.242,12.669ZM9.621,17.242a7.621,7.621,0,1,1,7.621,7.621A7.621,7.621,0,0,1,9.621,17.242Zm16-6.1a2.286,2.286,0,1,0-2.286-2.286A2.286,2.286,0,0,0,25.625,11.145Z"
                  transform="translate(-2 -2)" fill="#eb6e2d" fill-rule="evenodd" />
              </svg>

            </a>
          </div>



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