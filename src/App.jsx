import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Homepage, Cart, Auth, Recommendation } from "./pages/index";
import { Navbar, Footer } from "./components/index";
import { Provider } from "react-redux";
import store from "./store/store";

const App = () => {
  return (
    <div className="app">
      <Provider store={store}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/Auth" element={<Auth />} />
            <Route path="/Recommendation" element={<Recommendation />} />
          </Routes>
          <Footer />
        </Router>
      </Provider>
    </div>
  );
};

export default App;
