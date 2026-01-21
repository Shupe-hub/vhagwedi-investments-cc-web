import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio.jsx";
import Property from "./pages/Property.jsx";
import Mining from "./pages/Mining.jsx";
import Finance from "./pages/Finance.jsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/property" element={<Property />} />
            <Route path="/mining" element={<Mining />} />
            <Route path="/finance" element={<Finance />} />

            <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
    );
}

export default App;
