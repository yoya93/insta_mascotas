import React, { Fragment } from "react";

import { ListOfCategories } from "../components/ListOfCategories";
import { ListOfPhotoCards } from "../components/ListOfPhotoCards";
import { Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    marginBottom: "22px",
  },
});

export const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <Fragment>
        <ListOfCategories />
        <Divider className={classes.root} />
        <ListOfPhotoCards />
      </Fragment>
    </div>
  );
};
