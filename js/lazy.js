// Imports
import { images } from './data/images.js';

// Refs
const imageGallery = document.querySelector('.js-image-gallery');
const progressBar = document.querySelector('.js-progress');

// Listeners
window.addEventListener('scroll', _.throttle(getProgressValue, 300));

// Run Functions
renderMarkup(images);

// Functions
function renderMarkup(items) {
  const markup = items
    .map(
      (item, index) => /* html */ `
      <div class="card bg-light text-warning">
        <img
          class="img-fluid img-thumbnail card-img lazyload"
          src="../images/lqip-image.jpeg"
          data-src="../images/${item}"
          alt="cat"
          width="900"
          height="800"

        />
        <div class="card-img-overlay">
          <h5 class="card-title">Image - ${index + 1}</h5>
        </div>
      </div>`,
    )
    .join('');

  imageGallery.insertAdjacentHTML('beforeend', markup);
}

function getProgressValue() {
  const siteHeight = document.documentElement.scrollHeight; // висота сайту
  const scrollValue = window.scrollY; // значення яке проскролили
  const windowHeight = window.innerHeight; // значення вистоти вьюпорта

  let progress = Math.floor((scrollValue / (siteHeight - windowHeight)) * 100);

  progressBar.style.width = `${progress}%`;
}
