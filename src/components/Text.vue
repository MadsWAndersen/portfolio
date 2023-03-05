<template>
    <p class="body-text">{{ text }}</p>
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
  .body-text {
    font-size: 1rem;
    margin: 1rem 0;
  }
  </style>