// FUNCTION AFFICHAGE PHOTOGRAPH DANS INDEX ------------

function photographerFactory(data) {
  const { name, portrait, city, country, tagline, price, id } = data;

  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement("article");
    

    const photographerCard = `
                
               <a class="photograph-click" href="photographer.html?id=${id}" tabindex="3">
                  <img alt='photo de ${name}' src="${picture}">  
                    <h2>${name}</h2>
                </a>
                <div class="info-sup-photograph" tabindex="3">
                <h3>${city}, ${country}</h3>
                <p class="tagline">${tagline}</p>
                <p class="price">${price}€/jour</p>
                <div>
              
            `;
    article.innerHTML = photographerCard;

    return article;
  }
  return { name, picture, getUserCardDOM };
}

// FONCTION AFFICHAGE MEDIA DU PHOTOGRAPH ---------------

function mediaFactory(data) {
  const { title, image, likes, video } = data;

  const picture = `assets/media/${idValue}/${image}`;
  const movie = `assets/media/${idValue}/${video}`;


  function getUserProfileDOM() {
    const section = document.createElement("section");
    section.setAttribute("id", "single-media");
    section.setAttribute("tabindex", 9);
    const mediaProfile = `
              <img class="source-media" alt='${title}' src="${picture} ">
            <div class="single-media-info">
                <h4 tabindex="9">${title}</h4>
                <div class="likes-click" tabindex="9" >
                <p class="nb-of-likes"><span class="likes-count">${likes}</span> <i class="fas fa-heart" aria-label="logo coeur du média"></i></p>
                </div>
            </div>
                `;
    const videoProfile = `
            <video  alt='${title}' >
    <source class="source-media"  src="${movie}">
            </video>
            <div class="single-media-info">
                <h4>${title}</h4>
                <div class="likes-click" tabindex="0" >
                <p class="nb-of-likes"><span class="likes-count">${likes}</span> <i class="fas fa-heart" aria-label="logo coeur du média"></i></p>
                </div>
                </div>
             `;
    if (image) {
      section.innerHTML = mediaProfile;
    } else if (video) {
      section.innerHTML = videoProfile;
    }
    return section;
  }

  return { title, picture, getUserProfileDOM };
}

//FONCTION AFFICHAGE DU PROFIL PHOTOGRAPH --------------

function profileFactory(data) {
  const { name, portrait, city, country, tagline } = data;

  const picture = `assets/photographers/${portrait}`;

  function getProfileDOM() {
    const section = document.createElement("section");
    section.setAttribute("class", "photograph-header");
    const profile = `
             <div class="information-profile">
             <h2 tabindex="2">${name}</h2>
              <div tabindex="3" class="info-sup-photographpage">
              <h3>${city}, ${country}</h3>
              <p class="tagline">${tagline}</p>
                </div>
              </div>
              <button class="contact_button" onclick="displayModal()" tabindex="4">Contactez-moi</button>
              <img alt="photo de ${name}" src="${picture}" tabindex="5"></img>
            `;
    section.innerHTML = profile;
    return section;
  }

  return { name, picture, getProfileDOM };
}

// SEARCH ID SUR URL

const queryString = window.location.search;
const idValue = new URLSearchParams(queryString).get("id");
