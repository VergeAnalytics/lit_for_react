import { LitElement, html, css } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';

const ORANGE = css`orange`;

class MyElement extends LitElement {
	static get properties() {
		return {
			color: { type: String }
		};
	}
	color = '#000';

	static styles = [
		css`
			#orange {
				color: ${ORANGE};
			}

			#purple {
				color: rebeccapurple;
			}
		`
	];

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
      <h3 id="orange">This text is in orange</h3>
      <h3 id="purple">This text is in rebeccapurple</h3>
  </div>
    `;
	}
}

customElements.define('my-element', MyElement);
