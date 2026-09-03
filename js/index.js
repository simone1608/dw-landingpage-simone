// slå dig løs her... 
const heroElement = document.querySelector(".hero")

heros.forEach(function (hero) {
    const imageElement = document.createElement("img");
    imageElement

    const headlineElement = document.createElement("h1");
    headlineElement.textContent = hero.headline;

    heroElement.append(imageElement, headlineElement);
})

//eksempel på at udskrive alle overskrifter i services i konsollen:
services.forEach(service => console.log(service.headline))
