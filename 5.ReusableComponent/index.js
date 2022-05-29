import { LitElement, html } from 'lit';

export class MyElement extends LitElement {
	static get properties() {
		return {
			step: { type: Number }
		};
	}

	constructor() {
		super();
		this.step = 0;
	}

	onClick() {
		const event = new CustomEvent('update-counter', {
			bubbles: true,
			detail: {
				step: this.step + 1
			}
		});
		console.log(event);
		this.dispatchEvent(event);
	}

	render() {
		const label =
			this.step < 0
				? `- ${-1 * this.step}` // "- 1"
				: `+ ${this.step}`; // "+ 1"
		return html`
      <button @click=${this.onClick}>
        Click to Increment the count ${label}
      </button>
   `;
	}
}

customElements.define('counter-button', MyElement);
