import { html, render } from "./uhtml.js";
import { dispatch } from "./index.js";

export const view = (state) => html`
  <div @click=${() => dispatch("INCREASE", { delta: 2})}>
    hello ${state.name}
  </div>
  <div class="count">count: ${state.count}</div>
`