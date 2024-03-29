import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";

import AppRoutes from "./components/AppRoutes";
function App() {
  return (
    <Router>
      <div className="App">
        <h1>React on rails blog </h1>
        <p>Find this application Layout in client/src/App.jsx</p>
        <NavBar />
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
