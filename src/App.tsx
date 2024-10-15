import Navbar from "./components/Layout/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Phonero_Oppgavebeskrivelse from "./Pages/Phonero_Oppgavebeskrivelse";
import Phonero_Status_1 from "./Pages/Phonero_Status_1";
import Phonero_Status_2 from "./Pages/Phonero_Status_2";

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
          <Route path="/Phonero/Status/1" element={<Phonero_Status_1 />} />
          <Route path="/Phonero/Status/2" element={<Phonero_Status_2 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
