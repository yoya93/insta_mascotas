import React from "react";
import { makeStyles } from "@material-ui/styles";

import PhoneInput from "react-phone-input-2";
import "material-ui-phone-number";
import "../css/material.css";
import { useSelector } from "react-redux";

import LinearProgress from "@material-ui/core/LinearProgress";
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
  const user = useSelector((store) => store.user.object);
  const loading = useSelector((store) => store.user.loading);
  const classes = useStyles();

  return !loading ? (
    <LinearProgress />
  ) : (
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
    </Card>
  );
};
