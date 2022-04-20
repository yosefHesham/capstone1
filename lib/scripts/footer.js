let footer = document.querySelector("footer");

function renderFooter() {
  let footerTemp = document.createElement("footerTemp");
  footerTemp.innerHTML = `
  <article class="partner">
    <h3 class="section-title">Partners</h3>
    <hr class="section-line" />
    <div class="logos">
      <img  class="partner-logo" src="./images/partners/mozilla.png" , alt="mozilla-icon" />
      <img  class="partner-logo"  src="./images/partners/Google.png" , alt="google-icon" />
      <img  class="partner-logo"  src="./images/partners/navar.png" , alt="naver-icon" />
      <img  class="partner-logo"  src="./images/partners/daumkakao.svg" , alt="daum-icon" />
      <img  class="partner-logo"  src="./images/partners/airbnb.png" , alt="airbnb-icon" />
    </div>
  </article>
  <article class="copy-rights">
    <img src="./images/cc.svg" alt=" " class="footer-logo" />
    <p class="copyrights">
      2022 ACPC ICPC Summit. Egypt. <br />
      Some Rights Reserved.
    </p>
  </article>`;
  footer.innerHTML = footerTemp.innerHTML;
}

window.onload = renderFooter();