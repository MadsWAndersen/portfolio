<template>
    <div class="projects">
    
      <div v-for="(project, index) in projects" :key="index" class="project" @click="showModal(project)">
        <img :src="project.image" alt="Project Image" class="project-image">
        <h3 class="project-title">{{ project.title }}</h3>
        <p class="project-description">{{ project.description }}</p>
      </div>
      <div v-if="showProjectModal" class="project-modal" @click="hideModal">
        <img :src="selectedProject.image" alt="Project Image" class="modal-project-image">
        <div class="modal-info">
            <h3 class="modal-project-title">{{ selectedProject.title }}</h3>
        <p class="modal-project-description">{{ selectedProject.description }}</p>
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
      title: 'Progress Form - DriveClever Nummerplade scanner',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: '/src/assets/img/DC.png'
    },
    {
      title: 'Project 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'https://via.placeholder.com/300x200'
    },
    {
      title: 'Project 3',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: 'https://via.placeholder.com/300x200'
    }
  ]);
  
 
  </script>
  
  <style lang="scss" scoped>
  @import "/src/assets/main.scss";
  .projects {
    display: flex;
    margin: 0 20px;
    gap: 20px;
    flex-wrap: wrap;
    position: relative;

    
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
        height: auto; // Adjusts the height of the image automatically
        object-fit: cover;
      }
      
      .project-title {
        margin-top: 0.5rem;
      }
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
      flex-basis: 50%;
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