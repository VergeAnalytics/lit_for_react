import { LitElement, html } from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('counter-button')
export class CounterButton extends LitElement {
  @property({type: Number}) step: number = 0;

  onClick() {
    const event = new CustomEvent('update-counter', {
      bubbles: true,
      detail: {
        step: this.step,
      }
    });

    this.dispatchEvent(event);
  }

  render() {
    const label = this.step < 0
      ? `- ${-1 * this.step}`  // "- 1"
      : `+ ${this.step}`;      // "+ 1"

    return html`
      <button @click=${this.onClick}>${label}</button>
    `;
  }
}

@customElement("my-counter")
export class MyCounter extends LitElement {
  @property({type: Number}) count = 0;

  addToCounter(e: CustomEvent<{step: number}>) {
    // Get step from detail of event or via @query
    this.count += e.detail.step;
  }

  render() {
    return html`
      <div @update-counter="${this.addToCounter}">
        <h3>&Sigma; ${this.count}</h3>
        <counter-button step="-1"></counter-button>
        <counter-button step="1"></counter-button>
      </div>
    `;
  }
}