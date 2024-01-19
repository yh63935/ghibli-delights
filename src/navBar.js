import {createEl} from "./components.js";


function createNavBar() {
    const body = document.querySelector('body');
    const header = document.createElement('header');
    const navBar = document.createElement('nav');
    const navList = document.createElement('ul');
    const home = createEl('li', 'Home', 'home');
    const menu = createEl('li', 'Menu', 'menu');
    const contact = createEl('li', 'Contact', 'contact');
    body.append(header);
    header.append(navBar);
    navBar.append(navList);
    navList.append(home);
    navList.append(menu);
    navList.append(contact);
}

export default createNavBar;