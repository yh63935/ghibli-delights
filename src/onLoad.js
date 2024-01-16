function createHome() {
    const content = document.querySelector('.content');

    const h1 = document.createElement('h1');
    h1.innerText = 'Ghibli Delights Cafe';

    const h2 = document.createElement('h2');
    h2.innerText = 'Where your tastebuds are transported into the heartwarming scenes of Ghibli films';

    const description = document.createElement('p')
    description.innerText = 'Come experience the enchanting flavors of Studio Ghibli at Ghibli Delights Café. From the mouth-watering \"Ponyo Ramen\" to the sweet \"Kiki\'s Delivery Service Pancakes,\" each dish is crafted with precision and love, capturing the essence of the studio\'s enchanting storytelling.'

    content.append(h1);
    content.append(h2);
    content.append(h3);

}

export default createHome;

