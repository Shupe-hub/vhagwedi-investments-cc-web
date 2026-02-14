import { useState } from "react";
import emailjs from "emailjs-com";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        message: ""
    });

    const [errors, setErrors] = useState({});
    const [showPopup, setShowPopup] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = "Enter a valid email address";
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;

        emailjs.send(
            "service_viphppw",        // ✅ your service ID
            "template_7adxxi7",       // ✅ your template ID
            {
                fullName: formData.fullName,
                email: formData.email,
                phone: formData.phone,
                message: formData.message,
            },
            "C6QS6upEFp4HTzr0Z"        // ✅ your public key
        )
            .then(() => {
                setShowPopup(true);
                setFormData({
                    fullName: "",
                    email: "",
                    phone: "",
                    message: ""
                });
                setErrors({});
            })
            .catch((error) => {
                console.error("EmailJS Error:", error);
                alert("Failed to send message. Please try again.");
            });
    };

    return (
        <>
            <Header />

            <main className="contact-main">
                <div className="contact-overlay"></div>

                <div className="contact-content">
                    <section className="contact-header">
                        <h1 className="contact-title">Contact Us</h1>
                        <p className="contact-subtitle">
                            Let’s discuss how we can support your investment goals.
                        </p>
                    </section>

                    <section className="contact-grid">
                        {/* FORM */}
                        <div className="form-card">
                            <h2 className="section-title">Send Us a Message</h2>

                            <form className="contact-form" onSubmit={handleSubmit} noValidate>
                                <Input
                                    label="Full Name"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    error={errors.fullName}
                                    placeholder="Your full name"
                                />

                                <Input
                                    label="Email Address"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    error={errors.email}
                                    placeholder="you@example.com"
                                />

                                <Input
                                    label="Phone Number"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    error={errors.phone}
                                    placeholder="+27…"
                                />

                                <div>
                                    <label className="form-label">Message</label>
                                    <textarea
                                        name="message"
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="form-textarea"
                                        placeholder="Tell us about your enquiry…"
                                    />
                                    {errors.message && (
                                        <small className="error-text">{errors.message}</small>
                                    )}
                                </div>

                                <button className="submit-btn" type="submit">
                                    Submit Enquiry
                                </button>
                            </form>
                        </div>

                        {/* DETAILS */}
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

                            <div className="social-section">
                                <h3>Connect With Us</h3>
                                <div className="social-row">
                                    <a href="https://wa.me/27834749155" target="_blank" rel="noreferrer" className="social-icon">
                                        <FaWhatsapp />
                                    </a>
                                    <a href="#" className="social-icon"><FaFacebookF /></a>
                                    <a href="#" className="social-icon"><FaInstagram /></a>
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

            {/* SUCCESS POPUP */}
            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-box">
                        <h3>Thank You!</h3>
                        <p>Your message has been sent successfully.</p>
                        <button className="popup-btn" onClick={() => setShowPopup(false)}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

/* ---------- INPUT COMPONENT ---------- */
const Input = ({ label, type = "text", name, value, onChange, placeholder, error }) => (
    <div>
        <label className="form-label">{label}</label>
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="form-input"
        />
        {error && <small className="error-text">{error}</small>}
    </div>
);

export default Contact;
