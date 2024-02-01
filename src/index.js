import './css/style.scss';
import background from 'Images/background.jpg';
import createHome from './pages/home.js';
import renderContact from './pages/contact.js';
import renderMenu from './pages/menu.js'
import { resetPage } from './utils.js';
import { createNavBar } from './components.js';
import { appendEl } from './components.js';

initializeWebsite();

// Initialize website with navbar and inital page
function initializeWebsite() {
    const header = document.createElement('header');
    const navBar = createNavBar();
    appendEl(header, navBar);
    
    const main = document.createElement('main');
    const content = document.createElement('div');
    content.setAttribute('id', 'content');
    const body = document.querySelector('body');
    appendEl(main, content);
    appendEl(body, header, main);
    createHome();
}

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
