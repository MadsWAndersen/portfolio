<script setup>
import { RouterLink, RouterView } from "vue-router";
import Header from  './components/Header.vue';
import { ref, setTransitionHooks } from 'vue';

const email = ref('');
const error = ref(null);

const onLogin = (e) => {
  e.preventDefault();
  error.value = null;
  if (email.value.length < 3) {
    return error.value = 'Email er ikke lang nok';
    
  }
}


const validation = (e) => {
  const input = document.getElementById('em');
  const eLength = email.value.length;

  if (eLength < 1) {
    console.log("white")
    input.style.background = 'white';
  }

  else if (eLength < 3) {
    console.log("yellow");
    input.style.background = 'yellow';
  }
  
  else if (eLength > 100) {
    console.log("Red")
    input.style.background = 'red';
  } 

 

  else if (eLength < 100 && email.value.length > 3) {
    console.log("grey")
    input.style.background = 'grey';
  }
}



</script>

<template>
  <header>
    <div class="wrapper">
      <Header/>  

      <form v-on:submit="onLogin">
        <p v-if="error !== null">{{ error }}</p>
        <input id="em" type="email" v-model="email" v-on:input="validation()">  
        <p> {{ email.length }}</p>
        <button>Submit</button>
      </form>
      
    </div>
  
  </header>

  <section>
    <RouterView />
  </section>

</template>

