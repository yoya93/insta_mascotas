import React from "react";

import { Provider } from "react-redux";
import generateStore from "./redux/store";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { AmplifyTheme } from "aws-amplify-react";

import Instacota from "./Instacota";

const authTheme = {
  ...AmplifyTheme,
  sectionHeader: {
    ...AmplifyTheme.sectionHeader,
    color: "red",
  },
  formSection: {
    ...AmplifyTheme.formSection,
    backgroundColor: "green",
  },
  sectionFooter: {
    ...AmplifyTheme.sectionFooter,
    backgroundColor: "purple",
  },
  button: {
    ...AmplifyTheme.button,
    backgroundColor: "blue",
  },
};

const App = () => {
  const store = generateStore();
  return (
    <Provider store={store}>
      <Instacota />
    </Provider>
  );
};

export default withAuthenticator(App, false, [], null, authTheme);
