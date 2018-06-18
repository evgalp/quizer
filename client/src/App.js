import React, { Component } from "react";
import Header from "./components/Header";
import Question from "./components/Question";

import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <Question />
        </div>
      </Provider>
    );
  }
}

export default App;
