<template>
  <form id="contactform" name="simple-contact-form" accept-charset="utf-8" action="https://formspree.io/f/xknazqyo"
    method="post">

    <fieldset id="contactform__inputs">
      <h2>Want to contact me?</h2>

      <div class="form form__1" :class="{ active: nameActive }" @click="toggleNameActive">
        <label for="full-name">Name</label>
        <input type="text" name="name" id="full-name" placeholder="" required v-model="nameValue" @blur="onInputBlurN">
      </div>

      <div class="form form__2" :class="{ active: emailActive }" @click="toggleEmailActive">
        <label for="email-address">Email</label>
        <input type="email" name="_replyto" id="email-address" placeholder="" required="" v-model="emailValue"
          @blur="onInputBlurE">
      </div>

      <div class="form form__3" :class="{ active: msgActive }" @click="toggleMsgActive">
        <label for="message">Message</label>
        <textarea rows="5" name="message" id="message" placeholder="" required="" v-model="msgValue"
          @blur="onInputBlurM"></textarea>
      </div>

      <div class="form form__send">
        <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission">
        <input type="submit" value="Send">
      </div>
    </fieldset>

  </form>
</template>

<script setup>

import { ref } from 'vue'

const nameActive = ref(false)
const emailActive = ref(false)
const msgActive = ref(false)

const nameValue = ref('')
const emailValue = ref('')
const msgValue = ref('')

function toggleNameActive() {
  nameActive.value = true
}

function toggleEmailActive() {
  emailActive.value = true
}

function toggleMsgActive() {
  msgActive.value = true
}

function onInputBlurN() {
  if (nameValue.value === '') {
    nameActive.value = false
  }
}

function onInputBlurE() {
  if (emailValue.value === '') {
    emailActive.value = false
  }
}

function onInputBlurM() {
  if (msgValue.value === '') {
    msgActive.value = false
  }
}



</script>

<style lang="scss" scoped>
@import "/src/assets/main.scss";


#contactform {
  max-width: 900px;
  margin: auto;
  color: #fff;
  width: 100%;
  z-index: 0;

  fieldset {
    padding: 50px;
    border: none;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    background: linear-gradient(90deg, rgba(255, 102, 0, 1) 0%, rgba(213, 141, 94, 1) 100%);
    @media (max-width: $breakpoint-sm) {
      padding: 20px;
    }

    h2 {
      margin: 0 0 20px 0;
      font-weight: bold;

    }


    .form {
      margin-bottom: 30px;

      label {
        transition: 0.5s ease;
        top: -5px;
        cursor: pointer;
      }

      input,
      textarea {
        color: #fff;
        padding: 0;
        width: 100%;
        border: none;
        background: transparent;
        border-bottom: 1px solid white;

        &:focus {
          outline: none;
        }

      }

      &.active {
        transition: 0.5s ease;

        label {
          top: -15px;
          font-size: 10px;
          transition: 0.5 ease;
        }
      }

      &__1,
      &__2,
      &__3 {
        position: relative;

        label {
          position: absolute;
        }

      }

      &__send {
        width: 100px;
        margin-top: 20px;
        position: relative;

        &:hover {
          &:after {
            width: 100%;
            transition: 0.2s ease-in;
          }
        }

        &:after {
          transition: 0.2s ease-out;
          content: "";
          height: 100%;
          width: 0%;
          background: white;
          position: absolute;
          left: 0;
        }

        input[type=submit] {
          z-index: 1;
          width: 100%;
          border: 1px solid white;
          background-color: transparent;
          padding: 10px;
          cursor: pointer;

          color: #fff;
          font-family: "Mark Pro Bold";
          position: relative;

          &:hover {
            color: $colorOrange;

          }
        }
      }
    }
  }
}
</style>