// slå dig løs her... 
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

//eksempel på at udskrive alle overskrifter i services i konsollen:
services.forEach(service => console.log(service.headline))