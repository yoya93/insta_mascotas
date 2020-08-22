import React, { useEffect, useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { Auth } from "aws-amplify";
import { Alert } from "@material-ui/lab";
import { Grid, Button, Typography, TextField, Link } from "@material-ui/core";
import validate from "validate.js";

const ColorButton = withStyles(() => ({
  root: {
    color: "#ffffff",
    backgroundColor: "#ff9900",
    fontSize: "0.75rem",
    "&:hover": {
      backgroundColor: "#9c5e02",
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  buttonChangePassword: {
    marginTop: "6px",
  },
  buttonback: {
    color: "#ff9900",
  },

  root: {
    backgroundColor: "#FFFFFF",
    //height: "100%",
  },
  grid: {
    height: "100%",
  },

  contentContainer: {},
  content: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },

  contentBody: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    paddingLeft: 25,
    paddingRight: 25,
    paddingBottom: 25,
    paddingTop: 25,
    flexBasis: 500,
    border: "1px solid",
    borderRadius: "5px",
  },
  title: {
    // marginTop: spacing(3)
  },

  textField: {
    marginTop: "8px",
    "& label.Mui-focused": {
      color: "#ff9900",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#ff9900",
    },
    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": {
        borderColor: "yellow",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#ff9900",
      },
    },
  },
  policy: {
    marginTop: "4px",
    display: "flex",
    alignItems: "center",
  },
  policyCheckbox: {
    marginLeft: "-14px",
  },
  resendCode: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
}));

const schema = {
  currentPassword: {
    presence: {
      allowEmpty: false,
      message: "is required",
    },
    length: {
      minimum: 8,
      maximum: 128,
      message: "must be at least 8 characters",
    },
  },
  newPassword: {
    presence: {
      allowEmpty: false,
      message: "is required",
    },
    length: {
      minimum: 8,
      maximum: 128,
      message: "must be at least 8 characters",
    },
  },
  confirmPassword: {
    presence: { allowEmpty: false, message: "is required" },
    equality: "newPassword",
  },
};

export default function SimpleModal() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [message, setMessage] = useState(null);

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {},
  });

  useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState((formState) => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {},
    }));
  }, [formState.values]);

  const handleChange = (event) => {
    event.persist();

    setFormState((formState) => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]: event.target.value,
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true,
      },
    }));
  };

  async function handleChangeClick(event) {
    event.preventDefault();

    const { currentPassword, newPassword } = formState.values;

    try {
      const currentUser = await Auth.currentAuthenticatedUser();
      await Auth.changePassword(currentUser, currentPassword, newPassword);
      setMessage(
        "Password has been changed. Please go back or change the password again"
      );
      setFormState({
        isValid: false,
        values: {},
        touched: {},
        errors: {},
      });
      setErrorMessage(null);
    } catch (error) {
      if (error.message === "Incorrect username or password.")
        error.message = "incorrect Current password ";

      setErrorMessage(error.message);
    }
  }

  const hasError = (field) =>
    formState.touched[field] && formState.errors[field] ? true : false;

  const back = (event) => {
    event.preventDefault();
    setFormState({
      isValid: false,
      values: {},
      touched: {},
      errors: {},
    });
    setErrorMessage(null);
    setOpen(false);
  };
  const classes = useStyles();

  // getModalStyle is not a pure function, we roll the style only on the first render

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <Grid className={classes.root}>
      <Grid container className={classes.grid}>
        <Grid item className={classes.content} xs={12} lg={12}>
          <div className={classes.contentBody}>
            <form className={classes.form}>
              <Typography className={classes.title} variant="h5">
                Change Password
              </Typography>
              {errorMessage && (
                <Alert
                  className={classes.errorMessage}
                  variant="outlined"
                  severity="error"
                >
                  {errorMessage}
                </Alert>
              )}
              {message && (
                <Alert
                  className={classes.errorMessage}
                  variant="outlined"
                  severity="success"
                >
                  {message}
                </Alert>
              )}

              <TextField
                className={classes.textField}
                error={hasError("currentPassword")}
                fullWidth
                helperText={
                  hasError("currentPassword")
                    ? formState.errors.currentPassword[0]
                    : null
                }
                label="Current Password"
                name="currentPassword"
                onChange={handleChange}
                type={showCurrentPassword ? "text" : "password"}
                value={formState.values.currentPassword || ""}
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() =>
                          setShowCurrentPassword(!showCurrentPassword)
                        }
                        edge="end"
                      >
                        {!showCurrentPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                className={classes.textField}
                error={hasError("newPassword")}
                fullWidth
                helperText={
                  hasError("newPassword")
                    ? formState.errors.newPassword[0]
                    : null
                }
                label="New Password"
                name="newPassword"
                onChange={handleChange}
                type={showNewPassword ? "text" : "password"}
                value={formState.values.newPassword || ""}
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowNewPassword(!showNewPassword)}
                        edge="end"
                      >
                        {!showNewPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                className={classes.textField}
                error={hasError("confirmPassword")}
                fullWidth
                helperText={
                  hasError("confirmPassword")
                    ? formState.errors.confirmPassword[0]
                    : null
                }
                label="Confirm Password"
                name="confirmPassword"
                onChange={handleChange}
                type={showConfirmPassword ? "text" : "password"}
                value={formState.values.confirmPassword || ""}
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        edge="end"
                      >
                        {!showConfirmPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <ColorButton
                className={classes.buttonChangePassword}
                color="primary"
                disabled={!formState.isValid}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                onClick={handleChangeClick}
              >
                Change password
              </ColorButton>
              <Grid container>
                <Grid item xs>
                  <Link
                    component="button"
                    className={classes.buttonback}
                    variant="h6"
                    onClick={back}
                  >
                    Back
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );

  return (
    <div>
      <ColorButton onClick={handleOpen} variant="contained">
        {" "}
        Change Password
      </ColorButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
