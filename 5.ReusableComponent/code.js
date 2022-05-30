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

export class MyCounter extends LitElement {
	static get properties() {
		return {
			count: { type: Number }
		};
	}
	count = 0;

	addToCounter(e) {
		// Get step from detail of event or via @query
		this.count += e.detail.step;
	}

	render() {
		console.log(this.count);
		return html`
      <div @update-counter="${this.addToCounter}">
        <h3>&Sigma; ${this.count}</h3>
        <counter-button step="-1"></counter-button>
        <counter-button step="1"></counter-button>
      </div>
    `;
	}
}
customElements.define('my-counter', MyCounter);
