import * as React from "react";
import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./App.css";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Homepage from "./Pages/Homepage";
import Projects from "./Pages/Projects";
import {ThemeProvider, CssBaseline} from "@mui/material";
import {createTheme} from "@mui/material/styles";
import {HashRouter as Router, Routes, Route} from "react-router-dom";
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={darkTheme}>
      <React.Fragment>
        <CssBaseline />
        <Router>
          <Routes>
          <Route
              path="/"
              element={
                <>
                  <Homepage />
                  
                </>
              }
            ></Route>
            <Route
              path="/Home"
              element={
                
                <>
                  <Homepage />
                  
                </>
              }
            ></Route>
            <Route
              path="/about"
              element={
                <>
                  <About />
                </>
              }
            ></Route>
            <Route
              path="/projects"
              element={
                <>
                  <Projects />
                </>
              }
            ></Route>
            <Route
              path="/contact"
              element={
                <>
                  <Contact />
                </>
              }
            ></Route>
          </Routes>
        </Router>
      </React.Fragment>
    </ThemeProvider>
  </StrictMode>
);
