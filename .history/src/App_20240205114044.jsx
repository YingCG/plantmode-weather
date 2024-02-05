import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
        <h1 className="text-3xl font-bold underline text-red-500">
          Hello world!
        </h1>
      </main>
    </>
  );
}

export default App;
