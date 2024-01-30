import './css/style.scss';

import createHome from './pages/home.js';
import renderContact from './pages/contact.js';
import renderMenu from './pages/menu.js'
import resetPage from './utils.js';
import { createNavBar } from './components.js';

// Initialize website with navbar and inital page
function initializeWebsite() {
    const header = document.createElement('header');
    const navBar = createNavBar();
    header.append(navBar);
    const main = document.createElement('main');
    const body = document.querySelector('body');
    body.append(header);
    body.append(main);
    createHome();
}

initializeWebsite();

// Render page depending on nav bar item
const header = document.querySelector('header');
header.addEventListener("click", (e) => {
    // Get closest nav bar menu item
    const target = e.target.closest('nav li');

    if (target) {
        resetPage();
        target.classList.contains('home') ? createHome()
        : target.classList.contains('menu') ? renderMenu()
        : renderContact();
    }
})
