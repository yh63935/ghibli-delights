import {createHeading} from '../components.js';
import {createEl} from "../components.js";
import breakfast from 'Images/breakfast.jpeg';
import pancakes from 'Images/pancakes.jpg';
import ramen from 'Images/ramen.jpg';
import onigiri from 'Images/onigiri.jpg';
import bento from 'Images/bento.jpg';

const menuItems = [{
    dish: "Ponyo's Ramen",
    movie: "Ponyo",
    img: {
        src: ramen,
        alt: "Steaming bowl of ramen with ham and green onions"
    },
    price: "$17.50",
    description: "Love being human right now? Enjoy this shoyu ramen with green onions, ham, and topped with a perfectly soft boiled egg."
}, 
{
    dish: "Kiki's Pancakes", 
    movie: "Kiki's Delivery Service",
    img: {
        src: pancakes,
        alt: "Fluffy pancakes topped with butter with cherry tomatoes and sausages"
    },
    price: "$12.50",
    description: "Down-on-your-luck? Indulge in these fluffy souffle pancakes paired with tomatoes and sausages and we promise you'll feel better soon!"
}, 
{
    dish: "Sophie's Breakfast Spread", 
    movie: "Howl's Moving Castle",
    img: {
        src: breakfast,
        alt: "Boy gulping down eggs and bacon"
    },
    price: "$14.50",
    description: "Pan fried eggs and bacon with a side of toast, fresh fruit, and sausages. Calcifer was not harmed in the making."
}, 
{
    dish: "Satsuki's Bento", 
    movie: "My Neighbor Totoro",
    img: {
        src: bento,
        alt: "Bento with salted plums and fish"
    },
    price: "$15.50",
    description: "Handmade with care, taste the love with this sushi rice bento. Includes pickled Japanese plum, shishamo, edamame and topped with sakura denbu."
}, 
{
    dish: "Haku's Onigiri", 
    movie: "Spirited Away",
    img: {
        src: onigiri,
        alt: "Girl Chihiro stuffing her face with onigiri"
    },
    price: "$4.50",
    description: "Restore your strength with this onigiri and remember that you can overcome difficulties. Choices of salmon, tuna, and onigiri."
}]

function setMenuImage(image, {src,alt}) {
    image.src = src;
    image.alt = alt;
}

function createMenuItem(dish, movie, img, price, desc) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');
    const image = createEl('img', "", menuItem);
    setMenuImage(image, img);

    createEl('h2', dish, menuItem);
    createEl('p', movie, menuItem);
    createEl('p', price, menuItem);
    createEl('p', desc, menuItem);

    return menuItem;
}

function renderMenu() {
    createHeading("Menu");
    const main = document.querySelector("main");
    const menuContainer = createEl('div', "", main, "menu-container");
    menuItems.forEach(item=> {
        menuContainer.append(createMenuItem(item.dish, item.movie, item.img, item.price, item.description));
    })
}

export default renderMenu;
