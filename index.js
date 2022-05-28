import { html, render } from 'lit';

const disabled = false;
const label = 'my label';
const myclass = 'my-class';
const value = 'my value';
const element = html`
  <label>${label}</label>
  <input
  ?disabled=${disabled}
  class="static-class ${myclass}"
  .value=${value}
  />`;

render(element, document.getElementById('root'));
