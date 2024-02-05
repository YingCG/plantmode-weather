import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <main>
        <Navbar />
        <Routes>
          <Route path="/" element={"Home"} />
          <Route path="/about" element={"About"} />
          <Route path="/projects" element={"Project"} />
          <Route path="/contact" element={"Contact"} />
        </Routes>
        <h1 className="text-3xl font-bold underline text-red-500">
          Hello world!
        </h1>
      </main>
    </>
  );
}

export default App;
