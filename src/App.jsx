import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { Grid } from "@mui/material";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>연락처 앱</h1>
      <Grid container spacing={2}>
        <Grid size={6}>
          <ContactForm/>
        </Grid>
        <Grid size={6}>
          <ContactList/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
