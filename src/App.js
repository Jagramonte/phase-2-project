import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import Home from "./pages/Home";
import PreplannedDestinations from "./pages/preplanned";
import Customize from "./pages/Customize";
import Budget from "./pages/Budget";
import Review from "./pages/Review";
import "semantic-ui-css/semantic.min.css";
import { useEffect, useState } from "react";



function App() {
  const [dests, setDests] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    fetch("http://localhost:3010/destinations")
      .then((res) => res.json())
      .then((data) => setDests(data))
      .catch((err) => console.error("service call fail for destination", err));
  }, []);
  return (
    <div>
      <nav className="top-area">
        <Header setSearchTerm={setSearchTerm} />
        <ul className="navigate">
          <li>
            <NavLink to="/preplanned">Preplanned Destination</NavLink>
          </li>
          <li>
            <NavLink to="/customize">Customize Destination</NavLink>
          </li>
          <li>
            <NavLink to="/budget">Budget Friendly</NavLink>
          </li>
          <li>
            <NavLink to="/reviews">Reviews</NavLink>
          </li>
        </ul>
      </nav>
      <main>
        <Routes path="/">
          <Route index element={<Home />} />
          <Route
            path="preplanned"
            element={
              <PreplannedDestinations dests={dests} searchTerm={searchTerm} />
            }
          />
          <Route path="customize" element={<Customize setDests={setDests}/>} />
          <Route
            path="budget"
            element={<Budget dests={dests} searchTerm={searchTerm} />}
          />
          <Route path="reviews" element={<Review dests={dests} searchTerm={searchTerm} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
