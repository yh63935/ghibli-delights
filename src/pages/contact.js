
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
    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contact');

    createEl('h2', contactMethod, contactContainer);
    createEl('p', contact, contactContainer);

    return contactContainer;
}

// Render contact page with all contact options
function renderContact() {
    createHeading('Contact Us');
    const main = document.querySelector("main");
    Object.entries(contactOptions).forEach(([contactMethod, contact]) => {
        main.append(createContactOption(contactMethod, contact));
        console.log(contactMethod, contact)
    })
}

export default renderContact;