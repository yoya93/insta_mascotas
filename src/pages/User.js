import React, { useState, Fragment } from "react";
import SimpleModal from "./Modal";
import PhoneInput from "react-phone-input-2";
import "material-ui-phone-number";
import "../css/material.css";
import { useSelector } from "react-redux";
import { Alert, AlertTitle } from "@material-ui/lab";

import LinearProgress from "@material-ui/core/LinearProgress";
import {
  Card,
  CardContent,
  CardActions,
  Divider,
  Grid,
  TextField,
} from "@material-ui/core";

export const User = (props) => {
  const user = useSelector((store) => store.user.object);
  const loading = useSelector((store) => store.user.loading);

  const [changuePasword, setchanguePasword] = useState(false);

  const handleStateChangePassword = (bool) => {
    setchanguePasword(bool);
    if (bool) {
      setTimeout(() => {
        setchanguePasword(false);
      }, 4000);
    }
  };

  console.log(changuePasword);

  return !loading ? (
    <LinearProgress />
  ) : (
    <Fragment>
      {changuePasword && (
        <div>
          <Alert severity="success">
            <AlertTitle>Password Changed</AlertTitle>
            Your password was changed — <strong>successfully!</strong>
          </Alert>
        </div>
      )}

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
          <CardActions>
            <Grid container justify="center">
              <SimpleModal onChangePassword={handleStateChangePassword} />
            </Grid>
          </CardActions>
        </form>
      </Card>
    </Fragment>
  );
};
