// Create the title heading for each page
function createHeading(heading) {
    const main = document.querySelector('main');
    const h1 = createEl('h1', heading, main);
}

// Create any element
function createEl(el, text, parent, className) {
    const element = document.createElement(el);
    element.innerText = text;
    element.classList.add(className)
    parent.append(element);
}

    return element;
}

export {createHeading, createEl};