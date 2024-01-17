function createHeading(heading) {
    const h1 = document.createElement('h1');
    h1.innerText = heading;
    const body = document.querySelector('body');
    body.append(h1);
}

export default createHeading;