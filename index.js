import "react-hot-loader/patch";
import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import App from "./src/App";

import { Provider } from "react-redux";
import store from "./src/store";

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.querySelector("[react-root='app']")
  );
};

render(App);

if (module.hot) {
  module.hot.accept("./src/App.js", () => {
    const NextRootContainer = require("./src/App.js").default;
    render(<NextRootContainer />);
  });
}
