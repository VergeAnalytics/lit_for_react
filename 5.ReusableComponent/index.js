import { LitElement, html } from 'lit';

export class MyElement extends LitElement {
	static get properties() {
		return {
			name: { type: Number }
		};
	}

	onClick() {
		console.log('focused');
	}

	render() {
		return html`
      <button @click=${this.onClick}>
        Click to Increment the count
      </button>
   `;
	}
}

customElements.define('counter-button', MyElement);
