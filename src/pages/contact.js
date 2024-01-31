
import {createHeading} from '../components.js';
import { createEl } from '../components.js';
import { appendEl } from '../components.js';

// All contact options
const contactOptions = {
    Phone: '408-991-3934',
    Email: 'ghiblidelights@gmail.com',
    Address: '1730 Fox Drive, San Jose, California, 95131'
}

// Create a contact div for each method of contact
function createContactOption(contactMethod, contact) {
    const contactOption = createEl('div', '', 'contact-option');

    const contactMethodEL = createEl('h2', contactMethod);
    const contactEl = createEl('p', contact);
    appendEl(contactOption, contactMethodEL, contactEl)

    return contactOption;
}

// Render contact page with all contact options
function renderContact() {
    createHeading('Contact Us');
    const main = document.querySelector("main");
    const contactContainer = createEl('div', "", "contact-container")
    appendEl(main, contactContainer);
    Object.entries(contactOptions).forEach(([contactMethod, contact]) => {
        const contactOption = createContactOption(contactMethod, contact);
        appendEl(contactContainer, contactOption);
    })
}

export default renderContact;