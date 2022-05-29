import { LitElement, html } from 'lit';

export class MyArticle extends LitElement {
	render() {
		return html`
        <article>
          <slot></slot>
        </article>
     `;
	}
}

export class MyMultipleArticle extends LitElement {
	render() {
		return html`
        <article>
            <header>
                <slot name="headerChildren"></slot>
            </header>
            <section>
                <slot name="sectionChildren"></slot>
            </section>
        </article>
     `;
	}
}
customElements.define('my-multiple-article', MyMultipleArticle);
