<template>
    <form id="contactform" name="simple-contact-form" accept-charset="utf-8" action="https://formspree.io/f/{form_id}" method="post">
  
      <fieldset id="contactform__inputs">
    <h2>Want to contact me?</h2>

    <div class="form form__1">
      <label :class="{ active: isLabelActive }" for="full-name" @click="toggleLabelActive">Navn</label>
      <input type="text" name="name" id="full-name" placeholder="" required="">
    </div>

    <div class="form form__2">
      <label :class="{ active: isLabelActive }" for="email-address" @click="toggleLabelActive">Email</label>
      <input type="email" name="_replyto" id="email-address" placeholder="" required="">
    </div>

    <div class="form form__2">
      <label :class="{ active: isLabelActive }" for="message" @click="toggleLabelActive">Besked</label>
      <textarea rows="5" name="message" id="message" placeholder="" required=""></textarea>
    </div>

    <div class="form form__send">
      <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission">
      <input type="submit" value="Send">
    </div>
  </fieldset>
 
  </form>
</template>

<script setup>
import { ref } from 'vue';

</script>

<style lang="scss" scoped>
@import "/src/assets/main.scss";


    #contactform {
        max-width: 900px;
        margin: auto;
        width: 100%;

        fieldset {
            padding: 50px;
            border: none;
            border-radius: 10px;
            display: flex;
            flex-direction: column;
            background: linear-gradient(90deg, rgba(255, 102, 0, 1) 0%, rgba(213, 141, 94, 1) 100%);
            h2 {
              margin: 0 0 20px 0;
              font-weight: bold;
              
            }


            .form {
              input, textarea {
                width: 100%;
                border: none;
                background: transparent;
                border-bottom: 1px solid white;
               &:focus {
                outline: none;
               }
            
              }

              &__1, &__2, &__3 {
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