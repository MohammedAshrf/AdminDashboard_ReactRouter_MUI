/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-useless-escape */
import {
  Alert,
  Box,
  Button,
  MenuItem,
  Snackbar,
  Stack,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Header from "../team/Header";

const regEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const currencies = [
  {
    value: "Admin",
    label: "Admin",
  },
  {
    value: "Manager",
    label: "Manager",
  },
  {
    value: "User",
    label: "User",
  },
];

export default function Profile() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();
  const onSubmit = () => {
    console.log("done");
    handleClick();
  };

  return (
    <div>
      {" "}
      <Header title={"CREATE USER"} desc={"Create a New User Profile"} />
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "25px",
        }}
        noValidate
        autoComplete="off"
      >
        <Stack direction={"row"} sx={{ gap: "12px" }}>
          <TextField
            error={Boolean(errors.firstName)}
            helperText={
              errors.firstName ? "This field is required & min 3 Chars" : null
            }
            {...register("firstName", { required: true, minLength: 3 })}
            sx={{ flex: "1" }}
            label="First Name"
            variant="filled"
          />
          <TextField
            error={Boolean(errors.lastName)}
            helperText={
              errors.lastName ? "This field is required & min 3 Chars" : null
            }
            {...register("lastName", { required: true, minLength: 3 })}
            sx={{ flex: "1" }}
            label="Last Name"
            variant="filled"
          />
        </Stack>

        <TextField
          error={Boolean(errors.email)}
          helperText={
            errors.email ? "Please provide a valid email address" : null
          }
          {...register("email", { required: true, pattern: regEmail })}
          label="Email"
          variant="filled"
        />
        <TextField
          error={Boolean(errors.contactNumber)}
          helperText={
            errors.contactNumber ? "please provide a valid number" : null
          }
          {...register("contactNumber", {
            required: true,
            minLength: 11,
            pattern: phoneRegExp,
          })}
          label="Contact Number"
        />
        <TextField label="Address 1" />
        <TextField label="Address 2" />

        <Stack direction={"row"} sx={{ gap: "12px" }}>
          <TextField
            sx={{ flex: "2" }}
            variant="filled"
            id="outlined-select-currency"
            select
            label="Select"
            defaultValue="EUR"
            helperText="Please select your role in the company"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <Button
            type="submit"
            variant="contained"
            sx={{ flex: "1", height: "60px" }}
          >
            Create new user
          </Button>
        </Stack>

        <div>
          {/* <Button onClick={handleClick}>Open Snackbar</Button> */}
          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            open={open}
            autoHideDuration={4000}
            onClose={handleClose}
          >
            <Alert
              onClose={handleClose}
              severity="success"
              variant="filled"
              sx={{ width: "100%" }}
            >
              Account created successfuly!
            </Alert>
          </Snackbar>
        </div>
      </Box>
    </div>
  );
}
