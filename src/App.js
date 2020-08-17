import React from "react";

import { Provider } from "react-redux";
import generateStore from "./redux/store";
import { withAuthenticator } from "@aws-amplify/ui-react";

import Instacota from "./Instacota";

const App = () => {
  const store = generateStore();
  return (
    <Provider store={store}>
      <Instacota />
    </Provider>
  );
};

export default withAuthenticator(App);
