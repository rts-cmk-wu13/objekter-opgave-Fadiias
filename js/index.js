// slå dig løs her... 

//eksempel på at udskrive alle overskrifter i services i konsollen:
services.forEach(service => console.log(service.headline))

// Hero Section
let heroSection = document.querySelector(".hero");  
heroSection.innerHTML = `
 <img src="${hero.image}" alt="Hero Image">
<div class="her">
   
    <h1>${hero.headline}</h1>
    <p>${hero.copy}</p>

    <button><img src="${hero.icon}" alt="Hero Icon"  id="hero-icon">Explore</button>
</div>
`;

// Services Section
let servicesSection = document.querySelector(".services");
services.forEach(service => {
    let serviceDiv = document.createElement("div");
    serviceDiv.innerHTML = `
    <img src="${service.illustration}" alt="Service Illustration">
    <h2>${service.headline}</h2>
    <p>${service.text}</p>
    <a href="#">${service.linktext}</a>
`;
servicesSection.appendChild(serviceDiv);
});

// Facilities Section
let facilitiesSection = document.querySelector(".facilities");
facilitiesSection.innerHTML = 
`<h1>${facilities.headline}</h1>`;
facilities.options.forEach(option => {
let optionDiv = document.createElement("div");
optionDiv.innerHTML = `
    <img src="${option.icon}" alt="Facility Icon">
    <h3>${option.headline}</h3>
      <p>${option.text}</p>
        <a href="#">Show me more</a>
    `;
    
    facilitiesSection.appendChild(optionDiv);

});


// Sites Section
let sitesSection = document.querySelector(".sites");
sitesSection.innerHTML =  `
   <div class="sites-content">
    <h1>${sites.headline}</h1>
    <p>${sites.text}</p>
    <button>
       <img src="${sites.btnicon}" alt="Button Icon">Start</button>
    
</div>
`;
       sites.places.forEach(place => {
    let placeDiv = document.createElement("div");
    placeDiv.innerHTML = `
        <img src="${place.img}" alt="${place.name}" class="site-img"> 
        <h3>${place.name}</h3>
        <p>${place.city}</p>
    `;
    sitesSection.appendChild(placeDiv);
});

// Advantages Section
let advantagesSection = document.querySelector(".advantages");
advantages.forEach(advantage => {
    let advantageDiv = document.createElement("div");
    advantageDiv.innerHTML = `
        <img src="${advantage.icon}" alt="Advantage Icon">
        <h3>${advantage.headline}</h3>
        <p>${advantage.text}</p>
    `;
    advantagesSection.appendChild(advantageDiv);
});
