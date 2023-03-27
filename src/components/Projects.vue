<template>
  <h2>Project</h2>
  <div class="projects">

    <div v-for="(project, index) in projects" :key="index" class="project" @click="showModal(project)">
      <img :src="project.image" alt="Project Image" class="project-image">
      <h3 class="project-title">{{ project.title }}</h3>
      <p class="project-description">{{ project.description }}</p>
    </div>
    <div v-if="showProjectModal" class="project-modal" @click="hideModal">
      <img :src="selectedProject.imageGif" alt="Project Image" class="modal-project-image">
      <div class="modal-info">
        <h3 class="modal-project-title">{{ selectedProject.title }}</h3>
        <p class="modal-project-description" v-html="selectedProject.longdesc.replace(/\n/g, '<br>')"></p>
        <a :href="selectedProject.link" target="_blank">{{ selectedProject.linkText }}</a>
        <button @click="hideModal">Close</button>
      </div>
    </div>
  </div>
</template>
  
<script setup>
import { ref } from 'vue';

const showProjectModal = ref(false);
const selectedProject = ref(null);

function showModal(project) {
  selectedProject.value = project;
  showProjectModal.value = true;
}

function hideModal() {
  showProjectModal.value = false;
}

const projects = ref([
  {
    title: 'UCLs Student Counseling',
    description: 'New way of reporting data for UCL Study Counsel',
    longdesc: 'My group and I had the opportunity to create a product for UCL that eliminated the need for study counseling to use Google Forms. The product we developed involved building a database, creating a web API, and coding the frontend using Vue.\n\n' +
      'Throughout the development process, we gained valuable experience working with the Model-View-Controller (MVC) principles. These principles helped us to keep the different components of our product organized and easy to manage.\n\n' +
      'By the end of the project, we were proud to have delivered solution that met UCLs needs and had a potential to streamline their study counseling process.\n\n' +
      'If you wish to see the product you can do it <a href="https://we-lander.dk/Studievejledning/#/login">here</a>\n\n' +
      'The username is Mads and the password is 12345',
    image: '/img/UCL.png',
    imageGif: '/img/MC.gif'
  },
  {
    title: 'Car service deal form',
    description: 'Multistep form with fetching',
    longdesc: 'During work, I was assigned the task of developing the frontend for a multi-step form that serves as a car service deal calculator. In the process, I had to create fetching calls to the API and also handle the styling and JavaScript functionality.\n\n' +
      'The remaining parts of the page were developed using WordPress as the content management system and Divi as the page builder.\n\n' +
      'You can view the final product <a href="https://serviceaftale.driveclever.dk/">here</a>\n\n',

    image: '/img/DC.png',
    imageGif: '/img/DC.gif'
  },

  {
    title: 'Roll-o-Matic',
    description: 'Created website for Roll-o-Matic',
    longdesc: 'During work i had the responsibility of creating the website for Roll-o-Matic. The website is created with WordPress as CMS and Divi as pagebuilder. Do not fear this however, as there are a lot of custom implementations as well\n\n' +
      'During this project i learned valuable information about WooCommerce as well as manipulating core files with JavaScript and JQuery to get it my way. This was a super fun product to work on.\n\n' +
      'Furthermore i customized the products using Advanced Custom Fields while of course aided by PHP. All styling was mananged using SCSS as a preprocesser\n\n' +
      'You can view the final product <a href="https://roll-o-matic.com/">here</a>\n\n',
    image: '/img/ROM.png',
    imageGif: '/img/ROM.gif'
  }
]);


</script>
  
<style lang="scss" scoped>
@import "/src/assets/main.scss";

a {
  color: #fff !important;
  font-weight: bold;
}

.projects {
  display: flex;
  margin: 0 20px;
  gap: 20px;
  flex-wrap: wrap;
  position: relative;
  justify-content: center;


  .line-deco {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  .project {
    cursor: pointer;
    width: 30%; // Full width for mobile devices

    @media (max-width: $breakpoint-sm) {
      width: 100%;
    }

    .project-image {
      min-height: 250px;
      width: 100%;
      height: 300px; // Adjusts the height of the image automatically
      object-fit: cover;
      overflow: hidden;

      &:hover {}

    }

    .project-title {
      margin-top: 0.5rem;
    }
  }
}


button {
  background-color: orange;
  border: 1px solid $colorOrange;
  cursor: pointer;
  color: white;
  background-color: transparent;
  padding: 10px 30px;

  &:hover {
    background-color: $colorOrange;
  }
}

.project-modal {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.94);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  padding: 5%;

  @media (max-width: $breakpoint-sm) {
    flex-direction: column;
    overflow: scroll;
  }

  .modal-info {
    flex-basis: 50%;
    padding: 20px;

    button {
      margin: auto;
      display: flex;
    }
  }

  .modal-project-image {
    width: 50%;
    flex-basis: 40%;
  }

  .modal-project-title {
    margin-top: 0.5rem;
    color: #fff;
  }

  .modal-project-description {
    color: #fff;
  }
}

// Media query for mobile devices
@media (max-width: 767px) {
  .projects {
    margin: $dmarginM;
    gap: 10px;
  }

  .project {
    width: 100%;
    margin-bottom: 20px;

    .project-image {
      height: 200px;
    }
  }

  .project-modal {
    padding: 2%;

    .modal-info {
      flex-basis: 100%;
    }

    .modal-project-image {
      width: 100%;
      flex-basis: 100%;
    }
  }
}
</style>



