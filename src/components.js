// Create the title heading for each page
function createHeading(heading) {
    const main = document.querySelector('main');
    const h1 = createEl('h1', heading);
    appendEl(main, h1)
}

// Create any element
function createEl(el, text, className) {
    const element = document.createElement(el);
    element.innerText = text;
    element.classList.add(className)
    return element;
}

// Append element(s) to a parent
function appendEl(parent, ...elements) {
    elements.forEach(el=> {
        parent.append(el)
    });
}

// Create the website nav bar
function createNavBar() {
    const body = document.querySelector('body');
    const navBar = document.createElement('nav');
    const navList = document.createElement('ul');
  
    const home = createEl('li', 'Home', 'home');
    const menu = createEl('li', 'Menu', 'menu');
    const contact = createEl('li', 'Contact', 'contact');

    appendEl(navList, home, menu, contact);
    appendEl(navBar, navList);

    return navBar;
}

export {createHeading, createEl, appendEl, createNavBar};