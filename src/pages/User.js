import React, { useState, useEffect } from "react";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import Amplify, { Auth } from "aws-amplify";

import {
  Card,
  CardContent,
  CardActions,
  Divider,
  Grid,
  Button,
  TextField,
} from "@material-ui/core";

export const User = (props) => {
  const { user } = props;

  const [values, setValues] = useState({
    userName: user.username,
    email: user.attributes.email,
    phone: user.attributes.phone_number,
  });

  return (
    <Card>
      <form>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                helperText="Please specify the first name"
                label="First name"
                margin="dense"
                name="firstName"
                // onChange={handleChange}
                required
                value={values.userName}
                variant="outlined"
              />
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Email Address"
                margin="dense"
                name="email"
                // onChange={handleChange}
                required
                value={values.email}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              {/* <PhoneInput
                defaultCountry="us"
                name="phone"
                required
                // value={values.phone}
                // onChange={handleChangePhoneNumber}
                // variant="outlined"
                regiones={" europa "}
              /> */}
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions>
          <Button color="primary" variant="contained">
            Save details
          </Button>

          <Button color="primary" variant="contained">
            {" "}
            Change Password
          </Button>
        </CardActions>
      </form>
      <AmplifySignOut />
    </Card>
    // <div>
    //   <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    //   <AmplifySignOut />
    // </div>
  );
};
