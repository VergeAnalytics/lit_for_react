import { LitElement, html } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';

class MyElement extends LitElement {
	static get properties() {
		return {
			color: { type: String }
		};
	}
	color = '#F53';

	render() {
		const headerStyle = styleMap({
			'border-color': this.color
		});

		return html`
    <div>
    <h1
      style="border-style:solid;
      <!-- Use the styleMap -->
      border-width:2px;${headerStyle}">
      This div has a border color of ${this.color}
    </h1>
    <input
      type="color"
      @input=${(e) => (this.color = e.target.value)}
      value="#000">
  </div>
    `;
	}
}

customElements.define('my-element', MyElement);
