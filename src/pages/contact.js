
// All contact options
const contactOptions = {
    Phone: '408-991-3934',
    Email: 'ghiblidelights@gmail.com',
    Address: '1730 Fox Drive, San Jose, California, 95131'
}

// Create a contact div for each method of contact
// Debate whether to turn into a class
function createContactOption(contactMethod, contact) {
    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contact');

    const h2 = document.createElement('h2');
    h2.innerText = contactMethod;
    contactContainer.append(h2)

    const description = document.createElement('p');
    description.innerText = contact;
    contactContainer.append(description);

    return contactContainer;
}
// Render contact page
function renderContact() {
    // this might be better as another function
    const h1 = document.createElement('h1');
    h1.innerText = 'Contact Us';
    const body = document.querySelector('body');
    body.append(h1);
    Object.entries(contactOptions).forEach(([contactMethod, contact]) => {
        body.append(createContactOption(contactMethod, contact));
        console.log(contactMethod, contact)
    })
}

export default renderContact;