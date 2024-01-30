
import {createHeading} from '../components.js';
import { createEl } from '../components.js';

// All contact options
const contactOptions = {
    Phone: '408-991-3934',
    Email: 'ghiblidelights@gmail.com',
    Address: '1730 Fox Drive, San Jose, California, 95131'
}

// Create a contact div for each method of contact
function createContactOption(contactMethod, contact) {
    const contactOption = document.createElement('div');
    contactOption.classList.add('contact-option');

    createEl('h2', contactMethod, contactOption);
    createEl('p', contact, contactOption);

    return contactOption;
}

// Render contact page with all contact options
function renderContact() {
    createHeading('Contact Us');
    const main = document.querySelector("main");
    const contactContainer = createEl('div', "", main, "contact-container")
    Object.entries(contactOptions).forEach(([contactMethod, contact]) => {
        contactContainer.append(createContactOption(contactMethod, contact));
    })
}

export default renderContact;