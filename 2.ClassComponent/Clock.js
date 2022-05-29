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
	}
	render() {
		return html`
        <div>
            
        </div>
        `;
	}
}
customElements.define('lit-clock', LitClock);
