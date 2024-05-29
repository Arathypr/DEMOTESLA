import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import ChatBot from "./components/ChatBot";
import Hero from "./components/Hero";
import Vehicles from "./components/Vehicles";
import CarDetails from "./components/CarDetails";
import "./App.css";
import CustomOrder from "./components/CustomOrder";
import DemoDrive from "./components/DemoDrive";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FeatureSlide from "./components/FeatureSlide";
import Energy from "./components/energy/Energy";
import Charging from "./components/Charging";
import Shop from "./components/Shop";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/energy" element={<Energy />} />
          <Route path="/charging" element={<Charging />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/charging" element={<Charging />} />
          <Route path="/energy" element={<Energy />} />
          <Route path="/car/:id" element={<CarDetails />} />
          <Route path="/custom-order" element={<CustomOrder />} />
          <Route path="/demo-drive" element={<DemoDrive />} />
          <Route path="/feature" element={<FeatureSlide />} />{" "}
          {/* Add route for CarDetails */}
        </Routes>
        <ConditionalHero />
        <ChatBot />
      </div>
    </Router>
  );
};

const ConditionalHero = () => {
  const location = useLocation();
  return location.pathname === "/" ? <Hero /> : null;
};

export default App;
