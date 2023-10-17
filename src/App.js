import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./Header";
import Home from "./Home";
import PreplannedDestinations from "./PreplannedDestinations";
import Customize from "./Customize";
import Budget from "./Budget";
import Review from "./Review";
import "semantic-ui-css/semantic.min.css";

function App() {
  return (
    <div>
      <nav className="top-area">
        <Header />
        <ul className="navigate">
          <li>
            <Link to="/preplanned">Preplanned Destination</Link>
          </li>
          <li>
            <Link to="/customize">Customize Destination</Link>
          </li>
          <li>
            <Link to="/budget">Budget friendly</Link>
          </li>
          <li>
            <Link to="/reviews">Reviews</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Routes path="/">
          <Route index element={<Home />} />
          <Route path="preplanned" element={<PreplannedDestinations />} />
          <Route path="customize" element={<Customize />} />
          <Route path="budget" element={<Budget />} />
          <Route path="reviews" element={<Review />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
