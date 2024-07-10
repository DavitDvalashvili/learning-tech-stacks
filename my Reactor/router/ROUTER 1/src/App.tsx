import { Routes, Route, Link, useParams} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import FaqPage from "./pages/FaqPage";
import Question from "./pages/Question";

function App() {


  return (
    <>
      <header>
        <nav>
            <ul>
                <li>
                <Link to="./home">Home</Link>
                </li>
                <li>
                <Link to="./about">About</Link>
                </li>
                <li>
                <Link to="./contact">contact</Link>
                </li>
                <li>
                <Link to="./faq">faq</Link>
                </li>
            </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/faq/:username" element={<Question />} />
      </Routes>
      <footer>footer</footer>
    </>
  );
}

export default App;
