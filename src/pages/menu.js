import {createHeading} from '../components.js';

const menuItems = [{
    dish: "Ponyo's Ramen",
    movie: "Ponyo",
    price: 17.50,
    description: "Love being human right now? Enjoy this shoyu ramen with green onions, ham, and topped with a perfectly soft boiled egg."
}, 
{
    dish: "Kiki's Pancakes", 
    movie: "Kiki's Delivery Service",
    price: 12.50,
    description: "Down-on-your-luck? Indulge in these fluffy souffle pancakes paired with tomatoes and sausages and we promise you'll feel better soon!"
}, 
{
    dish: "Sophie's Breakfast Spread", 
    movie: "Howl's Moving Castle",
    price: 14.50,
    description: "Pan fried eggs and bacon with a side of toast, fresh fruit, and sausages. Calcifer was not harmed in the making."
}, 
{
    dish: "Satsuki's Bento", 
    movie: "My Neighbor Totoro",
    price: 15.50,
    description: "Handmade with care, taste the love with this sushi rice bento. Includes pickled Japanese plum, shishamo, edamame and topped with sakura denbu."
}, 
{
    dish: "Haku's Onigiri", 
    movie: "Spirited Away",
    price: 4.50,
    description: "Restore your strength with this onigiri and remember that you can overcome difficulties. Choices of salmon, tuna, and onigiri."
}]

// Would it be better to create a class for creating item containers? then extended classes for menu items/contacts?
function createMenuItem(dish, movie, price, desc) {
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-item');

    const h2 = document.createElement('h2');
    h2.innerText = dish;
    menuContainer.append(h2)

    const movieTitle = document.createElement('p');
    movieTitle.innerText = movie;
    menuContainer.append(movieTitle);

    const pricing = document.createElement('p');
    pricing.innerText = price;
    menuContainer.append(price);

    const description = document.createElement('p');
    description.innerText = desc;
    menuContainer.append(description);

    return menuContainer;
}

function renderMenu() {
    createHeading("Menu");
    const body = document.querySelector("body");
    menuItems.forEach(item=> {
        body.append(createMenuItem(item.dish, item.movie, item.price, item.description));
    })
}

export default renderMenu;
