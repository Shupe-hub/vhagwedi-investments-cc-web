import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio.jsx";
import Property from "./pages/Property.jsx";
import Mining from "./pages/Mining.jsx";
import Finance from "./pages/Finance.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import FloatingChat from "./components/common/FloatingChat.jsx";
import ScrollToTop from "./components/common/ScrollToTop.jsx";

function App() {
    return (
        <>
            <Routes>


                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/property" element={<Property />} />
                <Route path="/mining" element={<Mining />} />
                <Route path="/finance" element={<Finance />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/portfolio" element={<Portfolio />} />
            </Routes>

            {/* Floating chat must live OUTSIDE Routes */}
            <FloatingChat />

            <ScrollToTop />
        </>
    );
}

export default App;
