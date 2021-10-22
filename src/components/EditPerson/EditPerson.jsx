import {
  TextField,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { countries } from "../AddPerson/countries";
import { useStyles } from "./styles";

const userId = "https://60851f01d14a870017577688.mockapi.io/person/";

const EditPerson = (props) => {
  const history = useHistory();
  const classes = useStyles();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [occupation, setOccupation] = useState("");
  const [country, setCountry] = useState("");
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    const id = props.match.params.id;

    axios
      .get(`${userId}${id}`)
      .then(({ data }) => {
        setFirstName(data.firstName);
        setLastName(data.lastName);
        setOccupation(data.occupation);
        setCountry(data.country);
        setAvatar(data.avatar);
      })
      .catch((error) => console.log(error));
  }, [props.match.params.id]);

  const onSubmit = (e) => {
    const id = props.match.params.id;
    e.preventDefault();

    axios
      .put(userId + id, {
        firstName,
        lastName,
        avatar,
        occupation,
        country,
      })
      .then(() => history.push("/"))
      .catch((error) => console.log(error));
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
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            sx={{ marginRight: 1 }}
            required
          />

          <TextField
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </Box>
        <TextField
          id="outlined-basic"
          label="Occupation"
          variant="outlined"
          value={occupation}
          onChange={(e) => setOccupation(e.target.value)}
        />

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Country</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={country}
            label="Country"
            onChange={(e) => setCountry(e.target.value)}
          >
            {countries.map(({ name, flag }) => (
              <MenuItem
                key={name}
                value={name}
                onChange={(e) => setCountry(e.target.value)}
              >
                {name}
                {""} <img src={flag} alt="flags" height="12px" />
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          id="outlined-basic"
          label="Avatar"
          variant="outlined"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
        />
        <Button variant="contained" type="submit">
          Add User
        </Button>
      </Box>
    </div>
  );
};

export default EditPerson;
