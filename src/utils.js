import {createNavBar} from './components.js';

// Set appropriate class on an element for the active page and remove non-current page classes
function setActivePageClass(currentPage, element) {
    const pages = ['home', 'menu', 'contact'];
    pages.forEach((page)=> {
        element.classList.toggle(page, page === currentPage);
    })
}
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

export {resetPage, setActivePageClass};