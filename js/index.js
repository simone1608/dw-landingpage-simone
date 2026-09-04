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

    divElement.append(
        illustrationElement,
        headlineElement,
        textElement,
        linkElement
    );

    serviceElement.append(
        divElement
    );
});


//Facilities section
const facilitiesElement = document.querySelector(".facilities");

const headElement = document.createElement("h2");
headElement.textContent = facilities.headline;
headElement.classList.add("facilities-headline")

facilitiesElement.append(
    headElement);

facilities.options.forEach(function (facilitie) {
    const divElement = document.createElement("div");
    divElement.classList.add("facilitie");

    const iconElement = document.createElement("img");
    iconElement.src = facilitie.icon;
    iconElement.classList.add("facilitie-icon");

    const headlineElement = document.createElement("h3");
    headlineElement.textContent = facilitie.headline;
    headlineElement.classList.add("facilitie-headline")

    const textElement = document.createElement("p");
    textElement.textContent = facilitie.text;
    textElement.classList.add("facilitie-text");

    divElement.append(
        iconElement,
        headlineElement,
        textElement
    );

    facilitiesElement.append(
        divElement
    );
});


//Sites section
const sitesElement = document.querySelector(".sites");

const headlinesElement = document.createElement("h2");
headlinesElement.textContent = sites.headline;
headlinesElement.classList.add("site-headline");

const textsElement = document.createElement("p");
textsElement.textContent = sites.text;
textsElement.classList.add("site-text");

const btnIconElement = document.createElement("button");
btnIconElement.src = sites.btnicon;
btnIconElement.classList.add("site-btnicon");

sitesElement.append(
    headlinesElement,
    textsElement,
    btnIconElement
);

sites.places.forEach(function (sites) {
    const divElement = document.createElement("div");
    divElement.classList.add("sites");

    const imageElement = document.createElement("img");
    imageElement.src = sites.img;
    imageElement.classList.add("sites-img");

    const nameElement = document.createElement("h3");
    nameElement.textContent = sites.name;
    nameElement.classList.add("sites-name");

    const cityElement = document.createElement("p");
    cityElement.textContent = sites.city;
    cityElement.classList.add("sites-city");

    divElement.append(
        imageElement,
        nameElement,
        cityElement
    );

    sitesElement.append(
        divElement
    );
})


//Advantages section
const advantagesElement = document.querySelector(".advantages");

advantages.forEach(function (advantages) {
    const divElement = document.createElement("div");
    divElement.classList.add("advantages");

    const iconElement = document.createElement("img");
    iconElement.src = advantages.icon;
    iconElement.classList.add("advantages-icon");

    const headlineElement = document.createElement("h2");
    headlineElement.textContent = advantages.headline;
    headElement.classList.add("advantages-headline")

    const textElement = document.createElement("p");
    textElement.textContent = advantages.text;
    textElement.classList.add("advantages-text");

    divElement.append(
        iconElement,
        headlineElement,
        textElement
    );

    advantagesElement.append(
        divElement
    );
});


//Footer section
const footerElement = document.querySelector(".footer")

const nameElement = document.createElement("p")
nameElement.textContent = footer.name;
nameElement.classList.add("foot-name");

const headliElement = document.createElement("h3")
headliElement.textContent = footer.headline;
headliElement.classList.add("foot-headline")

footerElement.append(
    nameElement,
    headliElement
);

footer.info.forEach(function (footer) {
    const divElement = document.createElement("div");
    divElement.classList.add("footer-div")

    const headlineElement = document.createElement("h2");
    headlineElement.textContent = footer.headline;
    headlineElement.classList.add("footer-headline");

    info.link.forEach(function (link) {
        const linkElement = document.createElement("a");
        linkElement.textContent = link;
        linkElement.classList.add("footer-link");

        divElement.append(
            linkElement
        );
    });


    divElement.append(
        headlineElement
    );

    footerElement.append(
        divElement
    );


});

const bottomElement = document.createElement("div");
bottomElement.classList.add("footer-bottom");

const copysElement = document.createElement("p");
copysElement.textContent = footer.bottom.copylinks
copysElement.classList.add("footer-copy");

bottomElement.append(
    copysElement
);

footer.bottom.link.forEach(function (link) {
    const linkElement = document.createElement("a");
    linkElement.textContent = link;
    linkElement.classList.add("footer-bottom-link");

    bottomElement.append(
        linkElement
    );
});

footerElement.append(
    bottomElement
);