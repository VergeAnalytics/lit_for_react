import { LitElement, html } from 'lit';

export class MyElement extends LitElement {
	get inputEl() {
		return this.renderRoot.querySelector('input');
	}
	onButtonClick() {
		this.inputEl.focus();
		console.log('focused');
	}

	render() {
		return html`
      <input type="text">
      <br />
      <button @click=${this.onButtonClick}>
        Click to focus on the input above!
      </button>
   `;
	}
}

customElements.define('my-element', MyElement);
