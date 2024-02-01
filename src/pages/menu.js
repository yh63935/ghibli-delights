import { createHeading } from '../components.js';
import { createEl } from "../components.js";
import { appendEl } from '../components.js';
import { setActivePageClass } from '../utils.js';
import breakfast from 'Images/breakfast.jpeg';
import pancakes from 'Images/pancakes.jpg';
import ramen from 'Images/ramen.jpg';
import onigiri from 'Images/onigiri.jpg';
import bento from 'Images/bento.jpg';

const menuItems = [{
    dish: "Ponyo's Ramen",
    img: {
        src: ramen,
        alt: "Steaming bowl of ramen with ham and green onions"
    },
    price: "$17.50",
    description: "Love being human right now? Enjoy this shoyu ramen with green onions, ham, and topped with a perfectly soft boiled egg."
}, 
{
    dish: "Kiki's Pancakes", 
    img: {
        src: pancakes,
        alt: "Fluffy pancakes topped with butter with cherry tomatoes and sausages"
    },
    price: "$12.50",
    description: "Down-on-your-luck? Indulge in these fluffy souffle pancakes paired with tomatoes and sausages and we promise you'll feel better soon!"
}, 
{
    dish: "Sophie's Breakfast Spread", 
    img: {
        src: breakfast,
        alt: "Boy gulping down eggs and bacon"
    },
    price: "$14.50",
    description: "Pan fried eggs and bacon with a side of toast, fresh fruit, and sausages. Calcifer was not harmed in the making."
}, 
{
    dish: "Satsuki's Bento", 
    img: {
        src: bento,
        alt: "Bento with salted plums and fish"
    },
    price: "$15.50",
    description: "Handmade with care, taste the love with this sushi rice bento. Includes pickled Japanese plum, shishamo, edamame and topped with sakura denbu."
}, 
{
    dish: "Haku's Onigiri", 
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

function createMenuItem(dish, img, price, desc) {
    const menuItem = createEl('div', '', 'menu-item');
    const image = document.createElement('img');
    appendEl(menuItem, image);
    setMenuImage(image, img);

    const dishEl = createEl('h2', dish);
    const priceEl = createEl('p', price);
    const descEl = createEl('p', desc);

    appendEl(menuItem, dishEl, priceEl, descEl);

    return menuItem;
}

function renderMenu() {
    createHeading("Menu");
    const content = document.querySelector("#content");
    const menuContainer = createEl('div', "", "menu-container");
    setActivePageClass('menu', content);
    appendEl(content, menuContainer);
    menuItems.forEach(item=> {
        const menuItem = createMenuItem(item.dish, item.img, item.price, item.description);
        appendEl(menuContainer, menuItem);
    })
}

export default renderMenu;
