import createHome from './onLoad.js';
import renderContact from './pages/contact.js';
import renderMenu from './pages/menu.js'

createHome();
renderContact();
renderMenu();

console.log("Webpack succeeded")