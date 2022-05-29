import { LitElement, html } from 'lit';

export class MyElement extends LitElement {
	onButtonClick() {}

	render() {
		return html`
      <input type="text">
      <br />
      <button>
        Click to focus on the input above!
      </button>
   `;
	}
}

customElements.define('my-element', MyElement);
