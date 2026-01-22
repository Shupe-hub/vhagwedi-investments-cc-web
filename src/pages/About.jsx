import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import "./About.css";

const About = () => {
    return (
        <>
            <Header />

            <main className="about-main">
                <div className="about-overlay"></div>

                <div className="about-content">
                    {/* PAGE INTRO */}
                    <section className="about-intro">
                        <h1 className="about-title">About Us</h1>
                        <p className="about-subtitle">
                            Vhagwedi Investments CC is a South African investment company
                            committed to building long-term value through strategic
                            investments across property, mining, and financial services.
                        </p>
                    </section>

                    {/* COMPANY OVERVIEW */}
                    <section className="about-section">
                        <div className="about-grid">
                            <div>
                                <h2 className="about-section-title">Who We Are</h2>
                                <p className="about-text">
                                    With over 15 years of experience, Vhagwedi Investments CC has
                                    established itself as a trusted partner in identifying,
                                    developing, and managing high-value investment opportunities.
                                    Our approach is rooted in disciplined decision-making, strong
                                    governance, and sustainable growth.
                                </p>
                                <p className="about-text">
                                    We work closely with investors, partners, and industry
                                    specialists to ensure each opportunity aligns with our values
                                    and delivers measurable returns.
                                </p>
                            </div>

                            <div className="about-highlight-card">
                                <h3 className="about-highlight-title">Our Focus Areas</h3>
                                <ul className="about-list">
                                    <li>Property development & acquisitions</li>
                                    <li>Mining ventures & mineral resource stakes</li>
                                    <li>Structured finance & private equity</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* VISION & MISSION */}
                    <section className="about-section">
                        <div className="about-grid">
                            <div className="about-card">
                                <h3 className="about-card-title">Our Vision</h3>
                                <p className="about-text">
                                    To be a leading African investment company known for
                                    integrity, innovation, and sustainable value creation.
                                </p>
                            </div>

                            <div className="about-card">
                                <h3 className="about-card-title">Our Mission</h3>
                                <p className="about-text">
                                    To deliver consistent returns by investing responsibly,
                                    building strong partnerships, and contributing positively to
                                    economic development.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* CORE VALUES */}
                    <section className="about-section about-values-section">
                        <h2 className="about-section-title centered">Our Core Values</h2>

                        <div className="about-values-grid">
                            {[
                                {
                                    title: "Integrity",
                                    desc:
                                        "We conduct our business with honesty, transparency, and accountability.",
                                },
                                {
                                    title: "Excellence",
                                    desc:
                                        "We strive for high standards in every investment and partnership.",
                                },
                                {
                                    title: "Sustainability",
                                    desc:
                                        "We focus on long-term impact and responsible growth.",
                                },
                                {
                                    title: "Partnership",
                                    desc:
                                        "We believe strong relationships drive shared success.",
                                },
                            ].map((value) => (
                                <div key={value.title} className="about-value-card">
                                    <h4 className="about-value-title">{value.title}</h4>
                                    <p className="about-text">{value.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </>
    );
};

export default About;
