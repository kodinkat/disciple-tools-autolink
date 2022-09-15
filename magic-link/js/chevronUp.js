import { css, html, LitElement } from 'lit';

export class DtChevronUp extends LitElement {
  static get styles() {
    return css`
      :root {
        font-size: inherit;
      }
      svg {
        width: 1em;
        height: auto;
      }
      svg use {
        fill: currentcolor;
      }
    `;
  }
  render() {
    return html`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 82.7l22.6 22.6 192 192L493.3 320 448 365.3l-22.6-22.6L256 173.3 86.6 342.6 64 365.3 18.7 320l22.6-22.6 192-192L256 82.7z"/></svg>`;
  }
}

window.customElements.define('dt-chevron-up', DtChevronUp);
