function createHeading(heading) {
    const h1 = createEl('h1', heading);
    const main = document.querySelector('main');
    main.append(h1);
}

function createEl(el, text, className) {
    const element = document.createElement(el);
    element.innerText = text;
    element.classList.add(className)
    return element;
}

export {createHeading, createEl};