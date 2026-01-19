import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import './index.css';

const Home = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Search query:", searchQuery);
        // In production: navigate(`/search?q=${encodeURIComponent(searchQuery)}`)
    };

    return (
        <>
            <Header />

            <main className="bg-gray-50 min-h-screen">
                {/* HERO - luxurious dark with subtle texture feel */}
                <section className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-black overflow-hidden">
                    {/* Optional noise/grain overlay for premium texture */}
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-mosaic.png')] opacity-[0.07] mix-blend-overlay pointer-events-none"></div>

                    {/* Background image (replace with real high-res mining/property image) */}
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-25"
                        style={{
                            backgroundImage:
                                "url('/images/vgd_hero-luxury-mining-africa.jpg')", // ← use your real image
                        }}
                    ></div>

                    <div className="relative py-32 md:py-40 max-w-7xl mx-auto px-6 lg:px-8 text-white">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
                            {/* LEFT - Branding + Search */}
                            <div className="flex-1 text-center lg:text-left max-w-2xl">
                                <h1 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tight leading-none bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
                                    VHAGWEDI
                                </h1>
                                <p className="mt-4 text-3xl md:text-4xl font-semibold text-yellow-400/90 tracking-wide">
                                    Investments CC
                                </p>
                                <p className="mt-5 text-2xl text-gray-300 font-light">
                                    Premium Property • Strategic Mining • Sophisticated Finance
                                </p>

                                <form
                                    onSubmit={handleSearch}
                                    className="mt-12 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                                >
                                    <input
                                        type="text"
                                        placeholder="Explore premium investments, properties, mining ventures…"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="px-6 py-5 w-full sm:w-96 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-gray-400 shadow-inner focus:ring-2 focus:ring-yellow-500/50 focus:border-yellow-400/50 outline-none transition-all duration-300"
                                    />
                                    <button
                                        type="submit"
                                        className="px-10 py-5 bg-gradient-to-r from-yellow-500 to-amber-500 text-gray-900 font-bold rounded-xl shadow-lg hover:from-yellow-400 hover:to-amber-400 hover:shadow-2xl hover:scale-[1.04] active:scale-100 transition-all duration-300"
                                    >
                                        Search Opportunities
                                    </button>
                                </form>
                            </div>

                            {/* RIGHT - About card with glassmorphism */}
                            <div className="flex-1 max-w-xl">
                                <div className="bg-white/8 backdrop-blur-xl rounded-3xl p-9 lg:p-11 border border-white/10 shadow-2xl text-gray-100 leading-relaxed">
                                    <p className="text-xl md:text-2xl">
                                        Vhagwedi Investments CC is a premier South African firm
                                        delivering exceptional value through selective{" "}
                                        <span className="font-semibold text-yellow-400">
                      property developments
                    </span>
                                        , high-potential{" "}
                                        <span className="font-semibold text-yellow-400">
                      mining investments
                    </span>
                                        , and bespoke{" "}
                                        <span className="font-semibold text-yellow-400">
                      financial structures
                    </span>
                                        .
                                    </p>
                                    <p className="mt-6 text-xl">
                                        15+ years of disciplined capital deployment — creating
                                        generational wealth for sophisticated investors.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Main CTA */}
                        <div className="text-center mt-20">
                            <button className="px-14 py-6 bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 text-gray-900 font-extrabold text-xl rounded-2xl shadow-2xl hover:from-yellow-400 hover:via-amber-400 hover:to-yellow-500 hover:shadow-gold-xl hover:scale-[1.05] active:scale-100 transition-all duration-300 transform">
                                Start a Private Conversation About Your Portfolio →
                            </button>
                        </div>
                    </div>
                </section>

                {/* DIVISIONS - elegant lift-on-hover cards */}
                <section className="max-w-7xl mx-auto px-6 lg:px-8 py-28">
                    <h2 className="text-5xl font-black text-gray-900 text-center mb-20 tracking-tight">
                        Core Investment Pillars
                    </h2>

                    <div className="grid md:grid-cols-3 gap-10 lg:gap-14">
                        {[
                            {
                                title: "Property",
                                image: "/images/vgd_demo_properties.jpg",
                                desc: "Iconic developments • Prime commercial & residential acquisitions • High-yield sectional title & estates",
                                path: "/property",
                            },
                            {
                                title: "Mining",
                                image: "/images/vgd_demo_mining.jpg",
                                desc: "Strategic mineral rights • Chrome, platinum group metals, coal & critical minerals • Exploration & production partnerships",
                                path: "/mining",
                            },
                            {
                                title: "Finance",
                                image: "/images/vgd_demo_finance.jpg",
                                desc: "Private credit • Structured finance • Mezzanine & equity solutions for high-growth enterprises",
                                path: "/financial",
                            },
                        ].map((item) => (
                            <Link key={item.title} to={item.path}>
                                <div className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-gray-100">
                                    <div className="relative h-72 overflow-hidden">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                                    </div>
                                    <div className="p-9">
                                        <h3 className="text-3xl font-bold text-gray-900 group-hover:text-yellow-600 transition-colors duration-300">
                                            {item.title}
                                        </h3>
                                        <p className="mt-5 text-gray-700 text-lg leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* TRUST STATS - premium, spaced layout */}
                <section className="bg-gradient-to-b from-white to-gray-50 py-28 border-t border-gray-100">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="flex flex-wrap justify-center gap-20 md:gap-32 lg:gap-40 text-center">
                            {[
                                ["15+", "Years of Disciplined Excellence"],
                                ["R2.8B+", "Capital Successfully Deployed"],
                                ["200+", "High-Net-Worth & Institutional Partners"],
                            ].map(([num, label]) => (
                                <div key={label} className="min-w-[220px]">
                                    <div className="text-7xl md:text-8xl font-black text-gray-900 tracking-tighter">
                                        {num}
                                    </div>
                                    <p className="mt-4 text-xl md:text-2xl text-gray-700 font-medium">
                                        {label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
};

export default Home;