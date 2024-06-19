import Home from "./pages/Home";
import Programs from "./pages/Programs";
import AboutUs from "./pages/AboutUs";
import Donate from "./pages/Donate";
import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
