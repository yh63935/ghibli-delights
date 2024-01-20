function createHeading(heading) {
    const h1 = createEl('h1', heading);
    const main = document.querySelector('main');
    main.append(h1);
}

function createEl(el, text) {
    const element = document.createElement(el);
    element.innerText = text;
    return element;
}

export {createHeading, createEl};