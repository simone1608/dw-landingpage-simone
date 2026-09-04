// slå dig løs her... 

//Hero section
const heroElement = document.querySelector(".hero")

const imageElement = document.createElement("img");
imageElement.src = hero.image;
imageElement.classList.add("hero-image");

const headlineElement = document.createElement("h1");
headlineElement.textContent = hero.headline;
headlineElement.classList.add("hero-headline");

const copyElement = document.createElement("p");
copyElement.textContent = hero.copy;
copyElement.classList.add("hero-copy");

const iconElement = document.createElement("img");
iconElement.src = hero.icon;
iconElement.classList.add("hero-icon");

heroElement.append(
    imageElement,
    headlineElement,
    copyElement,
    iconElement
);


//Service section
const serviceElement = document.querySelector(".services");

services.forEach(function (service) {
    const divElement = document.createElement("div");
    divElement.classList.add("service");

    const illustrationElement = document.createElement("img");
    illustrationElement.src = service.illustration;
    illustrationElement.classList.add("service-illustration")

    const headlineElement = document.createElement("h2");
    headlineElement.textContent = service.headline;
    headlineElement.classList.add("service-headline");

    const textElement = document.createElement("p");
    textElement.textContent = service.text;
    textElement.classList.add("service-text");

    const linkElement = document.createElement("a");
    linkElement.textContent = service.linktext;
    linkElement.classList.add("service-link")

    serviceElement.append(
        illustrationElement,
        headlineElement,
        textElement,
        linkElement,
        divElement);
});