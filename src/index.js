import createHome from './onLoad.js';
import renderContact from './pages/contact.js';
import renderMenu from './pages/menu.js'

<<<<<<< Updated upstream
createHome();
renderContact();
renderMenu();

=======

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

function clearContent() {
    const main = document.querySelector('main');
    main.innerHTML = "";
}

const header = document.querySelector('header');
header.addEventListener("click", (e) => {

    const target = e.target.closest('nav li');
    console.log(target);

    if (target) {
        if(target.classList.contains('home')) {
            clearContent();
            createNavBar();
            createHome();
        } else if (target.classList.contains('menu')) {
            clearContent();
            createNavBar();
            renderMenu();
        } else {
            clearContent();
            createNavBar();
            renderContact();
        }
    }
})

>>>>>>> Stashed changes
console.log("Webpack succeeded")