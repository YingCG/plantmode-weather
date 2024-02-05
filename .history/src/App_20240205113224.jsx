import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <main>
        <Navbar />
        <Router>
          <Routes>
            <Route path="/" element={"Home"} />
            <Route path="/about" element={"About"} />
            <Route path="/projects" element={"Project"} />
            <Route path="/contact" element={"Contact"} />
          </Routes>
        </Router>
      </main>
    </>
  );
}

export default App;
