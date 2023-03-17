<template>
    <form id="contactform" name="simple-contact-form" accept-charset="utf-8" action="https://formspree.io/f/{form_id}" method="post">
    <fieldset id="contactform__inputs">
      <label for="full-name">Full Name</label>
      <input type="text" name="name" id="full-name" placeholder="First and Last" required="">
      <label for="email-address">Email Address</label>
      <input type="email" name="_replyto" id="email-address" placeholder="email@domain.tld" required="">
      <label for="message">Message</label>
      <textarea rows="5" name="message" id="message" placeholder="Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla nullam quis risus." required=""></textarea>
      <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission">
      <input type="submit" value="Submit">
    </fieldset>
 
  </form>
</template>

<script setup>

</script>

<style lang="scss" scoped>
    #contactform {
        max-width: 900px;
        margin: auto;
        width: 100%;

        fieldset {
            padding: 50px;
            border: 1px solid red;
            display: flex;
            flex-direction: column;
        }
    }
</style>