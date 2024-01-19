import {createEl} from "./components.js";

function createHome() {
    const content = document.querySelector('body');

    const h1 = createEl('h1', 'Ghibli Delights Cafe');
    const h2 = createEl('h2', 'Where your tastebuds are transported into the heartwarming scenes of Ghibli films');
    const description = createEl('p', 'Come experience the enchanting flavors of Studio Ghibli at Ghibli Delights Café. From the mouth-watering \"Ponyo Ramen\" to the sweet \"Kiki\'s Delivery Service Pancakes,\" each dish is crafted with precision and love, capturing the essence of the studio\'s enchanting storytelling.');
    
    content.append(h1);
    content.append(h2);
    content.append(description);

}

export default createHome;

