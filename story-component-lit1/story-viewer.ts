import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('story-viewer')
export class StoryViewer extends LitElement {
  render() {
    return html`<slot></slot>`;
  }
}