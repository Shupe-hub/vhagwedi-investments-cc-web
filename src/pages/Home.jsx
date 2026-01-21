import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import "./Home.css";

const Home = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Search query:", searchQuery);
    };

    return (
        <>
            <Header />

            <main className="home-main">
                {/* HERO */}
                <section className="hero-section">
                    <div className="hero-overlay"></div>

                    <div className="hero-container">
                        <div className="hero-content">
                            <h1 className="hero-title">VHAGWEDI</h1>
                            <p className="hero-subtitle-brand">Investments CC</p>
                            <p className="hero-tagline">
                                Premium Property • Strategic Mining • Sophisticated Finance
                            </p>

                            <form onSubmit={handleSearch} className="hero-search-form">
                                <input
                                    type="text"
                                    placeholder="Explore premium investments, properties, mining ventures…"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="hero-input"
                                />
                                <button type="submit" className="hero-button">
                                    Search Opportunities
                                </button>
                            </form>
                        </div>

                        <div className="hero-about-card">
                            <p>
                                Vhagwedi Investments CC is a premier South African firm delivering
                                exceptional value through selective{" "}
                                <span>property developments</span>, high-potential{" "}
                                <span>mining investments</span>, and bespoke{" "}
                                <span>financial structures</span>.
                            </p>
                            <p className="hero-about-small">
                                15+ years of disciplined capital deployment — creating
                                generational wealth for sophisticated investors.
                            </p>
                        </div>
                    </div>

                    <div className="hero-cta-container">
                        <button className="hero-cta">
                            Start a Private Conversation About Your Portfolio →
                        </button>
                    </div>
                </section>

                {/* DIVISIONS */}
                <section className="pillars-section">
                    <h2 className="pillars-title">Core Investment Pillars</h2>

                    <div className="pillars-grid">
                        {[
                            {
                                title: "Property",
                                image: "/images/vgd_demo_properties.jpg",
                                desc:
                                    "Iconic developments • Prime commercial & residential acquisitions • High-yield sectional title & estates",
                                path: "/property",
                            },
                            {
                                title: "Mining",
                                image: "/images/vgd_demo_mining.jpg",
                                desc:
                                    "Strategic mineral rights • Chrome, platinum group metals, coal & critical minerals • Exploration & production partnerships",
                                path: "/mining",
                            },
                            {
                                title: "Finance",
                                image: "/images/vgd_demo_finance.jpg",
                                desc:
                                    "Private credit • Structured finance • Mezzanine & equity solutions for high-growth enterprises",
                                path: "/financial",
                            },
                        ].map((item) => (
                            <Link key={item.title} to={item.path} className="pillar-link">
                                <div className="pillar-card">
                                    <div className="pillar-image-wrapper">
                                        <img src={item.image} alt={item.title} />
                                        <div className="pillar-image-overlay"></div>
                                    </div>
                                    <div className="pillar-body">
                                        <h3>{item.title}</h3>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* TRUST STATS */}
                <section className="stats-section">
                    <div className="stats-grid">
                        {[
                            ["15+", "Years of Disciplined Excellence"],
                            ["R2.8B+", "Capital Successfully Deployed"],
                            ["200+", "High-Net-Worth & Institutional Partners"],
                        ].map(([num, label]) => (
                            <div key={label} className="stat-card">
                                <div className="stat-number">{num}</div>
                                <p className="stat-label">{label}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
};

export default Home;
