<template>
    <form id="contactform" name="simple-contact-form" accept-charset="utf-8" action="https://formspree.io/f/{form_id}" method="post">
    <fieldset id="contactform__inputs">
      <label for="full-name">Navn</label>
      <input type="text" name="name" id="full-name" placeholder="Navn" required="">
      <label for="email-address">Email</label>
      <input type="email" name="_replyto" id="email-address" placeholder="Email" required="">
      <label for="message">Besked</label>
      <textarea rows="5" name="message" id="message" placeholder="Besked" required=""></textarea>
      <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission">
      <input type="submit" value="Send">
    </fieldset>
 
  </form>
</template>

<script setup>

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
        }
    }
</style>