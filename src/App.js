import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "Pages/Home/Index";
import Partners from "Pages/Partners/Index";
import Profile from "Pages/Profile/Index";
import SearchResult from "Pages/SearchResult";
import "./App.css";

function App() {
  const breakpoints = {
    sm: "320px",
    md: "500px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1440px",
  };

  const theme = extendTheme({ breakpoints });

  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/partners" element={<Partners />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/searhResults" element={<SearchResult />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
