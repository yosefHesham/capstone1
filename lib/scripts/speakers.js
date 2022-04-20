import speakers from "../scripts/speakers_data.js";
let speakersWrapper = document.querySelector(".speakers-wrapper");
function addSpeakers() {
  for (let i = 0; i < speakers.length; i += 1) {
    const temp = document.createElement("temp");
    let speaker = speakers[i];
    temp.innerHTML = `<article class="speaker ${i > 1? "expanded":""}">
    <img src="${speaker.image}" alt="speaker-image" />
    <div class="speaker-details">
      <p class="speaker-name">${speaker.name}</p>
      <p class="speaker-position">
      ${speaker.position}
      </p>
      <p class="speaker-bio">
      ${speaker.bio ?? ""}
            </p>
    </div>
  </article>`;
  speakersWrapper.appendChild(temp.firstChild)
  }
}
addSpeakers()