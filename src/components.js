function createHeading(heading) {
    const h1 = createEl('h1', heading);
    const body = document.querySelector('body');
    body.append(h1);
}

function createEl(el, text) {
    const element = document.createElement(el);
    element.innerText = text;
    return element;
}

export {createHeading, createEl};