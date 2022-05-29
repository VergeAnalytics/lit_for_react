import { LitElement, html } from 'lit';

class MyEl extends LitElement {
	static properties() {
		name: {
		}
	}
	render() {
		return html`<h3>Hello ${this.name}</h3>`;
	}
}

customElements.define('my-el', MyEl);
