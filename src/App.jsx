import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home, Rain, Plants, Contact } from "./pages";

function App() {
  return (
    <>
      <main className="container mx-auto w-full h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weather" element={<Rain />} />
          <Route path="/plants" element={<Plants />} />
          <Route path="/about" element={<Contact />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
