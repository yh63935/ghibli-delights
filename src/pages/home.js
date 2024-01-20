import {createEl} from "../components.js";

function createHome() {
    const content = document.querySelector('main');

    createEl('h1', 'Ghibli Delights Cafe', content);
    createEl('h2', 'Where your tastebuds are transported into the heartwarming scenes of Ghibli films', content);
    createEl('p', 'Come experience the enchanting flavors of Studio Ghibli at Ghibli Delights Café. From the mouth-watering \"Ponyo Ramen\" to the sweet \"Kiki\'s Delivery Service Pancakes,\" each dish is crafted with precision and love, capturing the essence of the studio\'s enchanting storytelling.', content);

}

export default createHome;

