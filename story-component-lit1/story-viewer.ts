import { LitElement, html, css, PropertyValues } from 'lit-element';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import "hammerjs";

@customElement('story-viewer')
export class StoryViewer extends LitElement {
  @property() _index: number = 0;
  get index(){
    return this._index;
  }
  set index(value:number){
    this.children[this._index].dispatchEvent(new CustomEvent('exited'))
    this.children[value].dispatchEvent(new CustomEvent('entered'))
    this._index = value
  }

  @state() _panData:{isFinal?: boolean, deltaX?: number} = {};
  

  constructor(){
    super()
    new Hammer(this).on("pan", (e:HammerInput)=>this._panData = e)
    this.index = 0;
  }
  firstUpdated(){
    this.children[this._index].dispatchEvent(new CustomEvent('entered'))
  }

  update(changedProperties:PropertyValues){
    // Panning the input changes using hammerjs
    let {deltaX=0, isFinal =false} = this._panData;
    if(!changedProperties.has("_index") && isFinal){
      deltaX > 0? this.previous(): this.next()
    }
    const width = this.clientWidth
    const minScale = 0.0;

    deltaX = (isFinal ? 0 : deltaX);

    
    Array.from(this.children).forEach((el:Element, i)=>{
      const x = (i - this.index) * width + deltaX;

      // Piecewise scale(deltaX), looks like: __/\__
      const u = deltaX / width + (i - this.index);
      const v = -Math.abs(u * (1 - minScale)) + 1;
      const scale = Math.max(v, minScale);

      (el as HTMLElement).style.transform = `translate3d(${x}px,0,0) scale(${scale})`;
    })
    super.update(changedProperties)
  }
  

  /* Next Story Card */
  next(){
    this.index = Math.max(0, Math.min(this.children.length -1, this.index +1))
  }

  /* Prev Story Card */
  previous() {
    this.index = Math.max(0, Math.min(this.children.length -1, this.index - 1))
  }

  static styles = css`
  :host{
    display:block;
    position:relative;
    /* Default size */
    width:300px;
    height:800px;
  }
  ::slotted(*){
    position: absolute;
    width:100%;
    height:calc(100%-20px);
    transition: transform 0.35s ease-out;
  }
  story-viewer{
    width: 400px;
    max-width: 100%;
    height: 80%;
  }
  svg{
    position: absolute;
    top: calc(50% - 25px);
    height: 50px;
    cursor: pointer;
  }
  #next{
    right:0;
  }
  #progress{
    position: relative;
    top: calc(100% - 20px);
    height: 20px;
    width: 50%;
    margin: 0 auto;
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
    grid-gap: 10px;
    align-content: center;
  }
  #progress > div {
    background: grey;
    height: 4px;
    transition: background 0.3s linear;
    cursor: pointer;
  }
  #progress > div.watched {
    background: white;
  }
  `;

  render() {
    return html`
    <slot></slot>

    <svg id="prev" viewBox="0 0 10 10" @click=${() => this.previous()}>
      <path d="M 6 2 L 4 5 L 6 8" stroke="#fff" fill="none" />
    </svg>
    <svg id="next" viewBox="0 0 10 10" @click=${() => this.next()}>
      <path d="M 4 2 L 6 5 L 4 8" stroke="#fff" fill="none" />
    </svg>

    <div id="progress">
    ${Array.from(this.children).map((_, i)=>html`
      <div
      class=${classMap({watched:i <= this.index})}
      @click=${()=>this.index = i}
      ><div>`
      )}
    </div>
    `;
  }
}