import React, { Fragment } from "react";

import { ListOfCategories } from "../components/ListOfCategories";
import { ListOfPhotoCards } from "../components/ListOfPhotoCards";

export const Home = () => {
  return (
    <div>
      <Fragment>
        <ListOfCategories />
        <ListOfPhotoCards />
      </Fragment>
    </div>
  );
};
