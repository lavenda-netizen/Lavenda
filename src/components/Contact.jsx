import React, { useState } from "react";
import "./Contact.css";
import NavBar from "./NavBar";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div className="container contact-container my-5">
            <NavBar />
            <h2 className="text-center text-primary mb-4">📨 Contact Us</h2>

            <div className="row">
                {/* Contact Info */}
                <div className="col-md-5 mb-4">
                    <h4 className="text-warning">📌 Our Office</h4>
                    <p><strong>Address:</strong> Ngong Town, Kikoi Road, Opposite Yala Supermarket</p>
                    <p><strong>Email:</strong> lovelyhomefuniture56@gmail.com</p>
                    <p><strong>Phone:</strong> +254 785744372 / +254 797125612</p>
                    <iframe
                        title="map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.690097442982!2d36.6583537!3d-1.349409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1452171802f5%3A0x72d92720dbb65d47!2sNgong!5e0!3m2!1sen!2ske!4v1680954563560!5m2!1sen!2ske"
                        width="100%"
                        height="200"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

                {/* Contact Form */}
                <div className="col-md-7">
                    {submitted && <div className="alert alert-success">Thanks for your message! We'll get back to you soon.</div>}
                    <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
                        <div className="mb-3">
                            <label className="form-label">Full Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Email Address</label>
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Message</label>
                            <textarea
                                className="form-control"
                                rows="4"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary">
                            📤 Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
