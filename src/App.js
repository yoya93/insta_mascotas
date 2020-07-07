import React from "react";
import { ListOfCategories } from "./components/ListOfCategories";

import { GlobalStyle } from "./styles/GlobalStyles";
import { ListOfPhotoCards } from "./components/ListOfPhotoCards";
import { Logo } from "./components/Logo";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Logo />
      <ListOfCategories />
      <ListOfPhotoCards />
      <AmplifySignOut />
    </div>
  );
};

export default withAuthenticator(App);
