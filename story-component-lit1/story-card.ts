import { LitElement, html, css } from "lit-element";
import {customElement} from "lit/decorators.js"

@customElement('story-card')
export class StoryCard extends LitElement{
    constructor(){
        super()
        this.addEventListener("entered", ()=>{
            
        })        
    }


    static styles = css`
    #media {
        height:100%
    }
    #media ::slotted(*) {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    /* Default styles for content */
    #content {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      padding: 48px;
      font-family: sans-serif;
      color: white;
      font-size: 24px;
    }
    #content > slot::slotted(*) {
        margin:0;
    }
    `
    render(){
        return html`
        <div id="media">
            <slot name="media"></slot>
        </div>
        <div id="content">
            <slot></slot>
        </div>
        `;
    }
}
