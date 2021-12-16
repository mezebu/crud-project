import React, { useState } from "react";
import axios from "axios";
// prettier-ignore
import { Button, FormControl, InputLabel, MenuItem, Select, TextField, } from "@mui/material";
import { Box } from "@mui/system";
import { useHistory } from "react-router-dom";

import { useStyles } from "./styles";
import {
  isFirstNameValid,
  isLastNameValid,
  isOccupationValid,
} from "../../utils/isValidUser";
import { countries } from "./countries";

let url = "https://60851f01d14a870017577688.mockapi.io/person";

const AddPerson = () => {
  const history = useHistory();
  const classes = useStyles();
  const [firstName, setFirstName] = useState("");
  const [firstNameValid, setFirstNameValid] = useState(false);
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastName, setLastName] = useState("");
  const [lastNameValid, setLastNameValid] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [country, setCountry] = useState("");
  const [countryValid, setCountryValid] = useState(false);
  const [occupation, setOccupation] = useState("");
  const [occupationValid, setOccupationValid] = useState(false);
  const [occupationError, setOccupationError] = useState(false);
  const [avatar, setAvatar] = useState("");

  const isFormValid =
    firstNameValid && lastNameValid && occupationValid && countryValid;

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post(url, {
        firstName,
        lastName,
        country,
        occupation,
        avatar,
      })
      .then((res) => {
        history.push("/");
        console.log(res);
      })
      .catch((error) => console.log(error));
  };

  const handleFirstName = (e) => {
    const value = e.target.value;
    setFirstName(value);
    setFirstNameValid(isFirstNameValid(value));
  };

  const handleLastName = (e) => {
    const value = e.target.value;
    setLastName(value);
    setLastNameValid(isLastNameValid(value));
  };

  const handleCountry = (e) => {
    const value = e.target.value;
    setCountry(value);
    setCountryValid(isOccupationValid());
  };

  const handleOccupation = (e) => {
    const value = e.target.value;
    setOccupation(value);
    setOccupationValid(isOccupationValid(value));
  };

  return (
    <div className={classes.root}>
      <Box
        className={classes.box}
        component="form"
        onSubmit={onSubmit}
        sx={{
          "& > :not(style)": { m: 0.5, width: "30ch" },
        }}
      >
        <Box sx={{ display: "flex" }}>
          <TextField
            error={!firstNameValid && firstNameError}
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            value={firstName}
            onChange={handleFirstName}
            onBlur={() => !firstNameError && setFirstNameError(true)}
            helperText={!firstNameValid && firstNameError && "Incorrect Entry"}
            sx={{ marginRight: 1 }}
          />

          <TextField
            error={!lastNameValid && lastNameError}
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            value={lastName}
            onChange={handleLastName}
            onBlur={() => !lastNameError && setLastNameError(true)}
            helperText={!lastNameValid && lastNameError && "Incorrect Entry"}
          />
        </Box>
        <TextField
          error={!occupationValid && occupationError}
          id="outlined-basic"
          label="Occupation"
          variant="outlined"
          value={occupation}
          onChange={handleOccupation}
          onBlur={() => !occupationError && setOccupationError(true)}
          helperText={!occupationValid && occupationError && "Incorrect Entry"}
        />

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Country</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={country}
            label="Country"
            onChange={handleCountry}
          >
            {countries.map(({ name, flag }) => (
              <MenuItem key={name} value={name} onChange={handleCountry}>
                {name}
                {""} <img src={flag} alt="flags" height="12px" />
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          error={!occupationValid && occupationError}
          id="outlined-basic"
          label="Avatar"
          variant="outlined"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
        />
        <Button variant="contained" type="submit" disabled={!isFormValid}>
          Add Person
        </Button>
      </Box>
    </div>
  );
};

export default AddPerson;
