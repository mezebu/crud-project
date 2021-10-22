import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material";

const useStyles = makeStyles({
  root: {
    marginTop: 20,
  },
  table: {
    backgroundColor: "rgba( 255, 255, 255, 0.25 )",
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: "blur( 4px )",
    WebkitBackdropFilter: " blur( 4px )",
    border: "1px solid rgba( 255, 255, 255, 0.18 )",
  },
});

const theme = createTheme({
  typography: {
    fontFamily: ["Montserrat", "sans - serif"].join(","),
  },

  palette: {
    background: {
      paper: "rgba( 255, 255, 255, 0.25 )",
    },
  },
});

export { useStyles, theme };
