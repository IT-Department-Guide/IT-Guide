import { guides, guideMap } from "./pages/index.js";

const guideListEl = document.getElementById("guideList");
const guideContentEl = document.getElementById("guideContent");

const buildHref = (slug) => `#guide/${slug}`;

const renderGuideList = (activeSlug) => {
  guideListEl.innerHTML = guides
    .map((guide) => {
      const isActive = guide.slug === activeSlug;
      return `
        <a class="guide-link" href="${buildHref(guide.slug)}" aria-current="${
          isActive ? "page" : "false"
        }">
          <strong>${guide.title}</strong>
          <div>${guide.summary}</div>
        </a>
      `;
    })
    .join("");
};

const renderGuide = (guide) => {
  guideContentEl.classList.add("is-loading");
  const stepsMarkup = guide.steps
    .map((step, index) => {
      const caption = step.note ? `<p>${step.note}</p>` : "";
      const hasMedia = Boolean(step.image);
      const isDownload = hasMedia && step.image.toLowerCase().endsWith(".exe");
      const imageMarkup = hasMedia && !isDownload
        ? `
          <div class="step-media">
            <figure>
              <img src="${encodeURI(step.image)}" alt="${step.title} image" loading="lazy"${
                step.imageWidth ? ` style="max-width: ${step.imageWidth}px"` : ""
              } />
            </figure>
            ${step.sideNote ? `<div class="step-side-note">${step.sideNote}</div>` : ""}
          </div>
        `
        : "";
      const downloadMarkup = isDownload
        ? `<p><a href="${encodeURI(step.image)}" download>Download FortiClient installer</a></p>`
        : "";
      return `
        <article class="step${step.callout ? " callout" : ""}" style="animation-delay: ${index * 0.03}s">
          <h3>${step.title}</h3>
          ${caption}
          ${imageMarkup}
          ${downloadMarkup}
        </article>
      `;
    })
    .join("");

  guideContentEl.innerHTML = `
    <div class="guide-header">
      <h2>${guide.title}</h2>
      <span>${guide.steps.length} steps</span>
    </div>
    <p>${guide.summary}</p>
    ${guide.credentials ? `<p><strong>Credentials:</strong> ${guide.credentials}</p>` : ""}
    ${
      guide.links && guide.links.length
        ? `<div class="guide-links"><strong>Links:</strong> ${guide.links
            .map((link) => `<a href="${link.url}" target="_blank" rel="noopener">${link.label}</a>`)
            .join(" | ")}</div>`
        : ""
    }
    <div class="actions">
      <button type="button" id="printGuide">Print Guide</button>
    </div>
    <div class="guide-body">
      ${stepsMarkup}
    </div>
    ${guide.footerText ? `<p>${guide.footerText}</p>` : ""}
  `;

  const printButton = document.getElementById("printGuide");
  if (printButton) {
    printButton.addEventListener("click", () => window.print());
  }

  requestAnimationFrame(() => {
    guideContentEl.classList.remove("is-loading");
  });
};

const getRouteSlug = () => {
  const hash = window.location.hash || "";
  const match = hash.match(/^#guide\/(.+)$/);
  return match ? match[1] : guides[0].slug;
};

const render = () => {
  const slug = getRouteSlug();
  const guide = guideMap[slug] || guides[0];
  renderGuideList(guide.slug);
  renderGuide(guide);
};

window.addEventListener("hashchange", render);
render();
