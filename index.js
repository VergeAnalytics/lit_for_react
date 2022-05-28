import { html, render } from 'lit';

const itemsToBuy = [ html`<li>Bananas</li>`, html`<li>Apples</li>`, html`<li>Oranges</li>`, html`<li>Grapes</li>` ];

const element = html`
  <h1>Things to buy:</h1>
  <ol>${itemsToBuy}</ol>
  `;

render(element, document.getElementById('root'));
