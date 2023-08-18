import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Homepage, Cart, Auth } from "./pages/index";
import { Navbar, Footer } from "./components/index";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/Auth" element={<Auth />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
