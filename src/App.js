import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { GlobalStyle } from "./styles/GlobalStyles";
import { ListOfPhotoCards } from "./components/ListOfPhotoCards";
import { Logo } from "./components/Logo";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { Home } from "./pages/Home";
import { ImagCateg } from "./pages/ImagCateg";

const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get("detail");

  return (
    <div>
      <BrowserRouter>
        <GlobalStyle />
        <Logo />
        {detailId ? (
          <ListOfPhotoCards detailId={detailId} />
        ) : (
          <Fragment>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/pet/:id" component={ImagCateg} />
            </Switch>
            <AmplifySignOut />
          </Fragment>
        )}
      </BrowserRouter>
    </div>
  );
};

export default withAuthenticator(App);
