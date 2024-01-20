import {createEl} from "./components.js";

function createNavBar() {
    const body = document.querySelector('body');
    const navBar = document.createElement('nav');
    const navList = document.createElement('ul');
<<<<<<< Updated upstream
    const home = createEl("li", "Home");
    const menu = createEl("li", "Menu");
    const contact = createEl("li", "Contact");
    body.append(header);
    header.append(navBar);
=======
    const home = createEl('li', 'Home', 'home');
    const menu = createEl('li', 'Menu', 'menu');
    const contact = createEl('li', 'Contact', 'contact');
>>>>>>> Stashed changes
    navBar.append(navList);
    navList.append(home);
    navList.append(menu);
    navList.append(contact);
    return navBar;
}

export default createNavBar;