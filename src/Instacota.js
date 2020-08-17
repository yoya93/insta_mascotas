import React, { Fragment, useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Logo } from "./components/Logo";

import { Home } from "./pages/Home";
import { ImagCateg } from "./pages/ImagCateg";
import { detailPhoto } from "./pages/detailPhoto";
import { Navbar } from "./components/Navbar/Navbar";
import { Fav } from "./pages/Fav";
import { User } from "./pages/User";
import generateStore from "./redux/store";

import { useDispatch } from "react-redux";
import { getCategoriesAccion } from "./redux/CategoriesDucks";
import { getPhotoAccion } from "./redux/PhotoDucks";

const Instacota = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    Get_Categories();
    Get_Photo();
  }, []);

  const Get_Categories = () => {
    dispatch(getCategoriesAccion());
  };
  const Get_Photo = () => {
    dispatch(getPhotoAccion());
  };
  const dispatch = useDispatch();

  // useEffect(() => dispatch(getCategoriesAccion()), []);
  // useEffect(() => dispatch(getPhotoAccion()), []);

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
            <Route path="/user" component={User} />
          </Switch>

          <Navbar />
        </Fragment>
      </BrowserRouter>
    </div>
  );
};

export default Instacota;
