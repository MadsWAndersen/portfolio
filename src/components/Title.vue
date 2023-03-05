<template>
    <h1 class="title">{{ text }}</h1>
</template>
  
  <script setup>
  props: {
      text: {
        type: String,
        required: true
      }
    }
</script>
  
  <style>
  .title {
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    margin: 1rem 0;
  }
  </style>