import React, { Fragment, useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Amplify, { Auth } from "aws-amplify";
import { GlobalStyle } from "./styles/GlobalStyles";
import { ListOfPhotoCards } from "./components/ListOfPhotoCards";
import { Logo } from "./components/Logo";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { Home } from "./pages/Home";
import { ImagCateg } from "./pages/ImagCateg";
import { detailPhoto } from "./pages/detailPhoto";
import { Navbar } from "./components/Navbar/Navbar";
import { Fav } from "./pages/Fav";
import { User } from "./pages/User";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        let res = await Auth.currentUserInfo();
        setUser(res);
      } catch (e) {
        console.log(e);
      }
    };

    fetchUser();
  }, []);
  return (
    <div>
      <BrowserRouter>
        <GlobalStyle />
        <Logo />
        <Fragment>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/pet/:Category" component={ImagCateg} />
            <Route path="/detail/:id" component={detailPhoto} />
            <Route path="/fav" component={Fav} />
            <Route
              path="/user"
              render={(props) => <User {...props} user={user} />}
            />
          </Switch>

          <Navbar />
        </Fragment>
      </BrowserRouter>
    </div>
  );
};

export default withAuthenticator(App);
