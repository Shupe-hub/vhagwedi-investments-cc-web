import { useState } from "react";
import emailjs from "emailjs-com";

const EnquiryForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        interest: "",
    });

    const [showPopup, setShowPopup] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .send(
                "service_viphppw",        // ✅ YOUR SERVICE ID
                "template_7adxxi7",       // 🔴 REPLACE with your TEMPLATE ID
                {
                    name: formData.name,
                    email: formData.email,
                    interest: formData.interest,
                },
                "C6QS6upEFp4HTzr0Z"      // 🔴 REPLACE with your PUBLIC KEY
            )
            .then(
                () => {
                    setShowPopup(true);
                    setFormData({ name: "", email: "", interest: "" });
                },
                (error) => {
                    console.error("EmailJS error:", error);
                    alert("Failed to send enquiry. Please try again.");
                }
            );
    };

    return (
        <>
            <form className="enquiry-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="enquiry-input"
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="enquiry-input"
                />

                <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    required
                    className="enquiry-input"
                >
                    <option value="">Select Investment Interest</option>
                    <option value="Property">Property</option>
                    <option value="Mining">Mining</option>
                    <option value="Finance">Finance</option>
                </select>

                <button type="submit" className="enquiry-btn">
                    Submit Enquiry
                </button>
            </form>

            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-box">
                        <h3>Thank You!</h3>
                        <p>Your enquiry has been sent successfully.</p>
                        <button
                            className="popup-btn"
                            onClick={() => setShowPopup(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default EnquiryForm;
