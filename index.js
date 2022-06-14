import { render } from "./uhtml.js";
import { addEvents } from "./addEvents.js";
import { view } from "./view.js";

// running with live-server


const STATE = {
  name: "rob",
  count: 0
}

const ACTIONS = {
  INIT(args, state) {
    addEvents(state);

    dispatch("RENDER");
  },
  RENDER: (args, state) => {
    const root = document.querySelector(".root");
    render(root, view(state));
  },
  INCREASE({ delta }, state) {
    state.count += delta;
    dispatch("RENDER");
  }
}

export function dispatch(action, args = {}) {
  const trigger = ACTIONS[action];
  if (trigger) return trigger(args, STATE);
  else {
    console.log("Action not recongnized:", action);
    return null;
  }
}


dispatch("INIT");