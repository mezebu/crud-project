import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Avatar,
  Button,
  Container,
  IconButton,
  Skeleton,
  TablePagination,
  ThemeProvider,
  Tooltip,
} from "@mui/material";
import { Box } from "@mui/system";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import { theme, useStyles } from "./styles";
import { useHistory } from "react-router-dom";

let url = "https://60851f01d14a870017577688.mockapi.io/person";

const People = () => {
  const history = useHistory();
  const classes = useStyles();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(url);

        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const editUser = (id) => {
    history.push(`/edit/${id}`);
  };

  const deleteHandler = async (id) => {
    axios
      .delete(`${url}/${id}`)
      .then(() => {
        const deleteUser = users.filter((user) => user.id !== id);

        setUsers(deleteUser);
      })
      .catch((error) => console.log(error));
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - users.length) : 0;

  const skeletonArray = Array(5).fill("");

  return (
    <Container>
      <ThemeProvider theme={theme}>
        <Box className={classes.root}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead className={classes.tableHead}>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Avatar</TableCell>
                  <TableCell align="center">First Name</TableCell>
                  <TableCell align="center">Last Name</TableCell>
                  <TableCell align="center">Occupation</TableCell>
                  <TableCell align="center">Country</TableCell>
                  <TableCell align="center">Edit</TableCell>
                  <TableCell align="center">Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map(
                    ({
                      id,
                      firstName,
                      lastName,
                      avatar,
                      country,
                      occupation,
                    }) => (
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                        key={id}
                      >
                        <TableCell component="th" scope="row">
                          {id}
                        </TableCell>
                        <TableCell align="center">
                          <Avatar alt="avatar" src={avatar} />
                        </TableCell>
                        <TableCell align="center">{firstName}</TableCell>
                        <TableCell align="center">{lastName}</TableCell>
                        <TableCell align="center">{occupation}</TableCell>
                        <TableCell align="center">{country}</TableCell>

                        <TableCell align="center">
                          <Tooltip title="Edit Person">
                            <IconButton onClick={() => editUser(id)}>
                              <EditIcon />
                            </IconButton>
                          </Tooltip>
                        </TableCell>
                        <TableCell align="center">
                          <Tooltip title="Delete Person">
                            <IconButton onClick={() => deleteHandler(id)}>
                              <DeleteIcon />
                            </IconButton>
                          </Tooltip>
                        </TableCell>
                      </TableRow>
                    )
                  )}

                {loading &&
                  skeletonArray.map((item, index) => (
                    <TableRow
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                      key={index}
                    >
                      <TableCell align="center">
                        <Skeleton variant="text" width={10} />
                      </TableCell>
                      <TableCell align="center">
                        <Skeleton variant="circular" width={40} height={40} />
                      </TableCell>
                      <TableCell align="center">
                        <Skeleton variant="text" />
                      </TableCell>
                      <TableCell align="center">
                        <Skeleton variant="text" />
                      </TableCell>
                      <TableCell align="center">
                        <Skeleton variant="text" />
                      </TableCell>
                      <TableCell align="center">
                        <Skeleton variant="text" />
                      </TableCell>
                      <TableCell align="center">
                        <Skeleton variant="text" />
                      </TableCell>
                      <TableCell align="center">
                        <Skeleton variant="text" />
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 33 * emptyRows,
                  }}
                >
                  <TableCell colSpan={7} />
                </TableRow>
              )}
            </Table>
          </TableContainer>
          <TablePagination
            sx={{ bgcolor: "primary.main" }}
            rowsPerPageOptions={[3, 5, 7, 10]}
            component="div"
            count={users.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
          <Box sx={{ m: 1 }}>
            <Button
              variant="contained"
              onClick={() => history.push("/addperson")}
            >
              add new person
            </Button>
          </Box>
        </Box>
      </ThemeProvider>
    </Container>
  );
};

export default People;
