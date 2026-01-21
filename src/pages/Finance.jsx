import { useState } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import { useNavigate } from "react-router-dom";
import "./Finance.css";

const Finance = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const navigate = useNavigate();

    const images = [
        { src: "/images/finance/finance_1.jpg", title: "Private Credit Funding" },
        { src: "/images/finance/finance_2.jpg", title: "Venture Capital Investments" },
        { src: "/images/finance/finance_3.jpg", title: "Structured Finance Solutions" },
        { src: "/images/finance/finance_4.jpg", title: "Equity Partnerships" },
        { src: "/images/finance/finance_5.jpg", title: "Bridging Finance Deals" },
    ];

    return (
        <>
            <Header />

            <main className="finance-main">
                <div className="finance-overlay"></div>

                <div className="finance-content">
                    {/* BACK BUTTON */}
                    <button className="finance-back" onClick={() => navigate(-1)}>
                        ← Back
                    </button>

                    {/* TITLE */}
                    <h1 className="finance-title">Financial Investments</h1>
                    <p className="finance-intro">
                        We provide bespoke financial solutions including private credit,
                        venture capital, structured finance, bridging finance, and equity
                        investments to support high-growth enterprises and strategic ventures.
                    </p>

                    {/* GALLERY */}
                    <section className="finance-gallery">
                        <h2>Finance Portfolio</h2>

                        <div className="gallery-grid">
                            {images.map((item, index) => (
                                <div key={index} className="gallery-card">
                                    <img
                                        src={item.src}
                                        alt={item.title}
                                        onClick={() => setSelectedImage(item.src)}
                                    />
                                    <div className="gallery-caption">{item.title}</div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* VIDEO */}
                    <section className="finance-video">
                        <h2>Finance Project Showcase</h2>

                        <video controls>
                            <source src="/videos/finance_vid_1.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </section>

                    {/* CONTACT */}
                    <section className="finance-contact">
                        <h2>Finance Enquiries</h2>

                        <div className="contact-grid">
                            <div>
                                <h4>Phone</h4>
                                <p>+27 11 456 7890</p>
                            </div>
                            <div>
                                <h4>Email</h4>
                                <p>finance@vhagwedi.co.za</p>
                            </div>
                            <div>
                                <h4>Location</h4>
                                <p>Johannesburg, South Africa</p>
                            </div>
                        </div>

                        <a href="/contact" className="contact-btn">
                            Enquire Now
                        </a>
                    </section>
                </div>
            </main>

            {/* IMAGE MODAL */}
            {selectedImage && (
                <div className="image-modal" onClick={() => setSelectedImage(null)}>
                    <img
                        src={selectedImage}
                        alt="Full View"
                        onClick={(e) => e.stopPropagation()}
                    />
                    <button
                        className="modal-close"
                        onClick={() => setSelectedImage(null)}
                    >
                        ×
                    </button>
                </div>
            )}

            <Footer />
        </>
    );
};

export default Finance;
