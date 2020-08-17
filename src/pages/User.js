import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { AmplifySignOut } from "@aws-amplify/ui-react";

import { Auth } from "aws-amplify";
//import { useHistory } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "material-ui-phone-number";
import "../css/material.css";

import {
  Card,
  CardContent,
  CardActions,
  Divider,
  Grid,
  Button,
  TextField,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  button: {
    "& .MuiButtonBase-root": {
      color: "#ffffff",
      backgroundColor: "#ff9900",
      fontSize: "0.75rem",
    },
  },
}));

export const User = (props) => {
  const { user } = props;

  // let [values] = {
  //   userName: user.username,
  //   email: user.attributes.email,
  //   phone: user.attributes.phone_number,
  // };

  console.log(Auth.signOut());

  const classes = useStyles();

  // const signOut = async () => {
  //   try {
  //     await Auth.signOut();
  //     history.entries = [];
  //     history.index = -1;
  //     history.patch(`/`);
  //   } catch (error) {
  //     console.log("error signing out: ", error);
  //   }
  // };

  return (
    <Card>
      <form>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={6}>
              <TextField
                fullWidth
                helperText="Please specify the first name"
                label="First name"
                margin="dense"
                name="firstName"
                // onChange={handleChange}
                required
                value={user.username}
                variant="outlined"
                disabled
              />
            </Grid>
            <Grid item md={6} xs={6}>
              <PhoneInput
                defaultCountry="us"
                name="phone"
                required
                value={user.attributes.phone_number}
                //onChange={handleChangePhoneNumber}
                variant="outlined"
                regiones={" europa "}
                disabled={true}
              />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item md={12} xs={12}>
              <TextField
                fullWidth
                label="Email Address"
                margin="dense"
                name="email"
                // onChange={handleChange}
                required
                value={user.attributes.email}
                variant="outlined"
                disabled
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions className={classes.button}>
          <Grid container justify="center">
            <Button variant="contained"> Change Password</Button>
          </Grid>
        </CardActions>
      </form>
      <AmplifySignOut buttonText="Sign Out" />
    </Card>
  );
};
