import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';
import borderColor from './border-color.js';

@customElement('my-element')
class MyElement extends LitElement {
  render() {
  	return html`
      <div>
		<h1 style="color:orange;">This text is orange</h1>
        <h1 style="color:rebeccapurple;">This text is rebeccapurple</h1>
      </div>
    `;
  }
}