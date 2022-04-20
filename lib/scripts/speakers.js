import speakers from './speakers_data.js';

const speakersWrapper = document.querySelector('.speakers-wrapper');
const showMore = document.querySelector('.more-button');
function addSpeakers() {
  for (let i = 0; i < speakers.length; i += 1) {
    const temp = document.createElement('temp');
    const speaker = speakers[i];
    temp.innerHTML = `<article class="speaker ${i > 1 ? 'expanded' : ''}">
    <img src="${speaker.image}" alt="speaker-image" />
    <div class="speaker-details">
      <p class="speaker-name">${speaker.name}</p>
      <p class="speaker-position">
      ${speaker.position}
      </p>
      <p class="speaker-bio">
      ${speaker.bio ?? ''}
            </p>
    </div>
  </article>`;
    speakersWrapper.appendChild(temp.firstChild);
  }
}
window.onload = addSpeakers();

let isExpanded = false;
const expandedSpeakers = document.querySelectorAll('.expanded');
showMore.addEventListener('click', () => {
  if (isExpanded) {
    expandedSpeakers.forEach((sp) => {
      sp.style.display = 'none';
    });
    showMore.children.item(0).innerHTML = 'MORE';
    showMore.children.item(1).src = 'images/arrow-down.svg';
    isExpanded = false;
  } else {
    expandedSpeakers.forEach((sp) => {
      sp.style.display = 'flex';
    });

    showMore.children.item(0).innerHTML = 'LESS';
    showMore.children.item(1).src = 'images/arrow-up.svg';
    isExpanded = true;
  }
});
