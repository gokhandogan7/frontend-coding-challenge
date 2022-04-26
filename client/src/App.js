import "./App.css";
import { AbsenceTable } from "./components/AbsenceTable";
import { HomePage } from "./components/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/absence" element={<AbsenceTable />}/>  
        </Routes>
      </Router>
    </div>
  );
}

export default App;
