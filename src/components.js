// Create the title heading for each page
function createHeading(heading) {
    const main = document.querySelector('main');
    const h1 = createEl('h1', heading, main);
}

// Create any element
function createEl(el, text, parent, className) {
    const element = document.createElement(el);
    element.innerText = text;
    element.classList.add(className)
    parent.append(element);
}

// Create the website nav bar
function createNavBar() {
    const body = document.querySelector('body');
    const navBar = document.createElement('nav');
    const navList = document.createElement('ul');
  
    createEl('li', 'Home', navList, 'home');
    createEl('li', 'Menu', navList, 'menu');
    createEl('li', 'Contact', navList, 'contact');

    navBar.append(navList);
    return navBar;
}

export {createHeading, createEl, createNavBar};