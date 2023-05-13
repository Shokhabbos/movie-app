import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Movie, SingleMovie, SingleTv, Tv } from "./pages";
import Header from "./containers/Header";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie" element={<Movie />} />
            <Route path="/tv" element={<Tv />} />
            <Route path="/movie/:id" element={<SingleMovie />} />
            <Route path="/tv/:id" element={<SingleTv />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
