import ('./style.scss');
import items from "./items";

const galleryItemsEl = document.getElementById('galleryItems');

for (let i = 0; i < items.length; i++){
    if(items[i].type === 'image'){
galleryItemsEl.insertAdjacentHTML('beforeend', `<div class="gallery__card"><img class="gallery__img" src = " ${items[i].item} "></img> <p class="gallery__title"> ${items[i].title} </p></div>`);
} else if(items[i].type === 'audio'){
    galleryItemsEl.insertAdjacentHTML('beforeend', `<div class="gallery__card"><audio src = " ${items[i].item} " controls class="gallery__audio"></audio><p class="gallery__title"> ${items[i].title} </p></div>`);
}
else if(items[i].type === 'video'){
    galleryItemsEl.insertAdjacentHTML('beforeend', `<div class="gallery__card"><video src = " ${items[i].item} " controls class="gallery__video"></video><p class="gallery__title"> ${items[i].title} </p></div>`);
}
}
