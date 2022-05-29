import { LitElement, html } from 'lit';
import { ClockController } from './clock.js';

class MyElement extends LitElement {
	clock = new ClockController(this);
	render() {
		return html`
      <div>
        <h1>Hello, world!</h1>
        <h2>It is ${'time to get Lit'}.</h2>
        <h2>The Clock time is ${this.clock.date.toLocaleTimeString()}.</h2>
      </div>
    `;
	}
}

customElements.define('my-element', MyElement);
