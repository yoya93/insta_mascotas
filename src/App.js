import React, { Fragment } from "react";
import { ListOfCategories } from "./components/ListOfCategories";

import { GlobalStyle } from "./styles/GlobalStyles";
import { ListOfPhotoCards } from "./components/ListOfPhotoCards";
import { Logo } from "./components/Logo";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get("detail");

  return (
    <div>
      <GlobalStyle />
      <Logo />
      {detailId ? (
        <ListOfPhotoCards detailId={detailId} />
      ) : (
        <Fragment>
          <ListOfCategories />
          <ListOfPhotoCards />
          <AmplifySignOut />
        </Fragment>
      )}
    </div>
  );
};

export default withAuthenticator(App);
