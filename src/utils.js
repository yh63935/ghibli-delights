import {createNavBar} from './components.js';

// Clear page content
function clearContent() {
    const content = document.querySelector('#content');
    content.innerHTML = "";
}

// Reset page and render nav bar
function resetPage() {
    clearContent();
    createNavBar();
};

export default resetPage;