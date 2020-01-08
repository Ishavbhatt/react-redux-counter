import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import Counter from "./view/Counter";
import store from "./state/store";

class App extends React.Component {
  render() {
    return <Counter />;
  }
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
