import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
    return (
        <>
            <Header />

            <main className="contact-main">
                <div className="contact-overlay"></div>

                <div className="contact-content">
                    {/* PAGE HEADER */}
                    <section className="contact-header">
                        <h1 className="contact-title">Contact Us</h1>
                        <p className="contact-subtitle">
                            Let’s discuss how we can support your investment goals.
                        </p>
                    </section>

                    {/* CONTENT GRID */}
                    <section className="contact-grid">
                        {/* CONTACT FORM */}
                        <div className="form-card">
                            <h2 className="section-title">Send Us a Message</h2>

                            <form className="contact-form">
                                <Input label="Full Name" placeholder="Your full name" />
                                <Input
                                    label="Email Address"
                                    type="email"
                                    placeholder="you@example.com"
                                />
                                <Input label="Phone Number" placeholder="+27…" />

                                <div>
                                    <label className="form-label">Message</label>
                                    <textarea
                                        rows="5"
                                        placeholder="Tell us about your enquiry…"
                                        className="form-textarea"
                                    />
                                </div>

                                <button className="submit-btn">Submit Enquiry</button>
                            </form>
                        </div>

                        {/* CONTACT DETAILS */}
                        <div className="details-card">
                            <h2 className="section-title">Get in Touch</h2>

                            <div className="detail-item">
                                <strong>📍 Office Address</strong>
                                <p>South Africa</p>
                            </div>

                            <div className="detail-item">
                                <strong>📞 Phone</strong>
                                <p>+27 83 474 9155</p>
                            </div>

                            <div className="detail-item">
                                <strong>✉️ Email</strong>
                                <p>info@vhagwediinvestments.co.za</p>
                            </div>

                            {/* SOCIAL MEDIA */}
                            <div className="social-section">
                                <h3>Connect With Us</h3>

                                <div className="social-row">
                                    <a
                                        href="https://wa.me/27834749155"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="social-icon"
                                        aria-label="WhatsApp"
                                    >
                                        <FaWhatsapp />
                                    </a>

                                    <a
                                        href="https://www.facebook.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="social-icon"
                                        aria-label="Facebook"
                                    >
                                        <FaFacebookF />
                                    </a>

                                    <a
                                        href="https://www.instagram.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="social-icon"
                                        aria-label="Instagram"
                                    >
                                        <FaInstagram />
                                    </a>
                                </div>
                            </div>

                            <div className="divider" />

                            <p className="contact-note">
                                Our team will respond within 24–48 business hours.
                            </p>
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </>
    );
};

/* ---------- SMALL COMPONENT ---------- */

const Input = ({ label, type = "text", placeholder }) => (
    <div>
        <label className="form-label">{label}</label>
        <input type={type} placeholder={placeholder} className="form-input" />
    </div>
);

export default Contact;
