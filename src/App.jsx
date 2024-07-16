import "./App.css";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Outlet } from "react-router-dom";

/*
=> Tasks & more features to add:
- Edit the FAQ page to make it more realistic.
- Edit the person icon at the navBar to navigate you to the progile page.
- Add the description that appears when you hover on the sideBar icons.
- Edit the Charts texts to make them more realistic and more funny.
- Change the pieChart at the dashboard page from a component in a separated file
  to the same old pie component but with some changes using condition props.
- 
*/

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

function App() {
  const [open, setOpen] = useState(false);
  const [mode, setmode] = useState(
    localStorage.getItem("currentMode")
      ? localStorage.getItem("currentMode") === "light"
        ? "dark"
        : "light"
      : "dark"
  );

  function handleThemeMode() {
    setmode((prev) => (prev === "dark" ? "light" : "dark"));
    console.log("change");
    localStorage.setItem("currentMode", mode);
  }

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="app">
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Box sx={{ display: "flex" }}>
            <CssBaseline />

            <NavBar
              handleDrawerOpen={handleDrawerOpen}
              open={open}
              handleThemeMode={handleThemeMode}
            />

            <SideBar handleDrawerClose={handleDrawerClose} open={open} />

            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              <DrawerHeader />
              <Outlet />
            </Box>
          </Box>
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
