import { LitElement, html, render } from 'lit';

class WelcomeBanner extends LitElement {
	static get properties() {
		return {
			name: { type: String }
		};
	}
	constructor() {
		super();
		this.name = '';
	}
	render() {
		return html`<h1>Hello from ${this.name}</h1>`;
	}
}

customElements.define('welcome-banner', WelcomeBanner);

function AddWelcome(props) {
	return html`<h1>Hello, ${props.name}</h1>`;
}

render(AddWelcome({ name: 'Puneet' }), document.body.querySelector('#root'));
