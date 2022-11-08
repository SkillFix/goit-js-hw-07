import { galleryItems } from './gallery-items.js';

const galleryContainerEl = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainerEl.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`;
    })
    .join('');
}

galleryContainerEl.addEventListener('click', openModal);

function openModal(event) {
  event.preventDefault();
  if (event.target.tagName != 'IMG') {
    return;
  }
  const dataSource = event.target.dataset.source;
  const instance = basicLightbox.create(`<img src="${dataSource}">`);
  instance.show();
}

// bad version
// const gallery = document.querySelector('.gallery');
// const items = [];

// galleryItems.forEach(element => {
//   const galleryItem = document.createElement('div');
//   galleryItem.className = 'gallery__item';
//   const galleryLink = document.createElement('a');
//   galleryLink.className = 'gallery__link';
//   galleryLink.href = element.original;
//   const galleryImage = document.createElement('img');
//   galleryImage.className = 'gallery__image';
//   galleryImage.src = element.preview;
//   galleryImage.setAttribute('data-source', element.original);
//   galleryImage.alt = element.description;

//   galleryItem.append(galleryLink);
//   galleryLink.append(galleryImage);
//   items.push(galleryItem);
// });

// gallery.append(...items);

// gallery.addEventListener('click', e => {
//   e.preventDefault();
//   if (e.target.nodeName !== 'IMG') {
//     return;
//   }

//   const selectedImage = e.target.getAttribute('data-source');

//   const instance = basicLightbox.create(`
//     <img src="${selectedImage}" width="800" height="600">`);

//   instance.show();

//   gallery.addEventListener('keydown', e => {
//     if (e.key === 'Escape') {
//       instance.close();
//     }
//   });
// });
