import { useState } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import { useNavigate } from "react-router-dom";
import "./Mining.css";

const Mining = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const navigate = useNavigate();

    const images = [
        { src: "/images/mining/chrome_mine.jpg", title: "Chrome Mining Site" },
        { src: "/images/mining/platinum.jpg", title: "Platinum Operations" },
        { src: "/images/mining/power_plant.jpg", title: "Coal Processing Plant" },
        { src: "/images/mining/open_pit.jpg", title: "Open Pit Mining" },
        { src: "/images/mining/drilling.jpg", title: "Exploration Drilling" },
    ];

    return (
        <>
            <Header />

            <main className="mining-main">
                <div className="mining-overlay"></div>

                <div className="mining-content">
                    {/* BACK BUTTON */}
                    <button className="mining-back" onClick={() => navigate(-1)}>
                        ← Back
                    </button>

                    {/* TITLE */}
                    <h1 className="mining-title">Mining Investments</h1>
                    <p className="mining-intro">
                        We invest in strategic mineral rights, exploration projects, and
                        production-stage mining operations across South Africa, with a focus
                        on high-demand resources and long-term value creation.
                    </p>

                    {/* GALLERY */}
                    <section className="mining-gallery">
                        <h2>Mining Operations Gallery</h2>

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
                    <section className="mining-video">
                        <h2>Mining Project Showcase</h2>

                        <video controls>
                            <source src="/images/mining/mining_video.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </section>

                    {/* CONTACT */}
                    <section className="mining-contact">
                        <h2>Mining Enquiries</h2>

                        <div className="contact-grid">
                            <div>
                                <h4>Phone</h4>
                                <p>+27 83 474 9155</p>
                            </div>
                            <div>
                                <h4>Email</h4>
                                <p>mining@vhagwedi.co.za</p>
                            </div>
                            <div>
                                <h4>Location</h4>
                                <p>111 Outeniqua Flats, 721
                                    Church Street, Arcadia, 0083 </p>
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
                    <img src={selectedImage} alt="Full View" onClick={(e) => e.stopPropagation()} />
                    <button className="modal-close" onClick={() => setSelectedImage(null)}>
                        ×
                    </button>
                </div>
            )}

            <Footer />
        </>
    );
};

export default Mining;
