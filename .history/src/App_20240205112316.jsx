import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <main>
        <Router>
          <Routes>
            <Route path="/" element={"Home"} />
            <Route path="/about" element={"About"} />
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
