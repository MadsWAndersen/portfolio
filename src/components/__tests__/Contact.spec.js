// Import the necessary libraries and components
import { expect } from 'vitest'
import { mount } from '@vue/test-utils';

import ContactForm from '../../components/layout/ContactForm.vue';

describe("ContactForm.vue", () => {
    it("Doest the contactform exist?", async() => {
        expect (ContactForm).toBeTruthy();
     })     


    it("Inputs are empty", async() => {
        const wrapper = mount(ContactForm)
        const nameInput = wrapper.find('input[name="name"]');
        const emailInput = wrapper.find('input[name="_replyto"]')
        expect(nameInput.element.value).toBe('');
        expect(emailInput.element.value).toBe('');   
    })  

    it("Does it have the form class", async() => {
    const wrapper = mount(ContactForm)
    const byDiv = wrapper.find('div');
    expect(byDiv.classes('form')).toBe(true);
    })  
})


