import Navbar from "./components/Layout/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Phonero_Oppgavebeskrivelse from "./Pages/Phonero_Oppgavebeskrivelse";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/Phonero/Oppgavebeskrivelse"
            element={<Phonero_Oppgavebeskrivelse />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
