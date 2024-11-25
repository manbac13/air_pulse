import { createTheme, ThemeProvider } from "@mui/material";
import "./App.css";
import Landing from "./Pages/Landing";

const theme = createTheme({
  typography: {
    fontFamily: '"Montserrat", sans-serif',
  },
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
          fontSize: "14px",
          fontWeight: "600",
          minWidth: "50px",
          padding: "0px 12px",
        },
      },
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Landing />
      </ThemeProvider>
    </>
  );
}

export default App;
