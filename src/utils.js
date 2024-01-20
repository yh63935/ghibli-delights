import {createNavBar} from './components.js';

// Clear page content
function clearContent() {
    const main = document.querySelector('main');
    main.innerHTML = "";
}

// Reset page and render nav bar
function resetPage() {
    clearContent();
    createNavBar();
};

export default resetPage;