import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { AddPerson, People, EditPerson } from "./components";
import { Container, ThemeProvider } from "@mui/material";
import { theme } from "./styles";

function App() {
  return (
    <Router>
      <Container>
        <ThemeProvider theme={theme}>
          <div className="App">
            <Switch>
              <Route path="/" exact component={People} />
              <Route path="/addperson" exact component={AddPerson} />
              <Route path="/edit/:id" exact component={EditPerson} />
            </Switch>
          </div>
        </ThemeProvider>
      </Container>
    </Router>
  );
}

export default App;
