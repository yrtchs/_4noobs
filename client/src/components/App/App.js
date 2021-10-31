import { Container, CssBaseline, Grid, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Blog from "../../pages/Blog/Blog";
import theme from "./App.styles";

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container fixed>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Switch>
                <Route path="/" exact>
                  <Blog />
                </Route>
              </Switch>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </Router>
  );
};

export default App;
