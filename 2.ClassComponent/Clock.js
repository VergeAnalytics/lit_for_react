import { LitElement, html } from 'lit-element';

class LitClock extends LitElement {
	static get properties() {
		return {
			// declare internla reactive state and prop
			date: { state: true }
		};
	}

	constructor() {
		super();
		this.date = new Date();
		this.timerId = -1;
	}

	connectedCallback() {
		super.connectedCallback();
		this.timerId = setInterval(() => this.tick(), 1000);
	}

	tick() {
		this.date = new Date();
	}

	render() {
		return html`
        <div>
            <h1> Hello World</h1>
            <h2>It is currenly: ${this.date.toLocaleString()}.</h2>
        </div>
        `;
	}

	disconnectedCallback() {
		super.disconnectedCallback();
		clearInterval(this.timerId);
	}
}

customElements.define('lit-clock', LitClock);
