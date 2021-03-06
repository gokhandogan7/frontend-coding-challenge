import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AbsenceTable, HomePage } from "../pages";

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
