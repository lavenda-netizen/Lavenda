import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);
    const [hovered, setHovered] = useState(false);
    const [email, setEmail] = useState("");
    const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
    const [showTooltip, setShowTooltip] = useState(false);
    const currentYear = new Date().getFullYear();

    useEffect(() => {
        const handleScroll = () => setShowTopBtn(window.scrollY > 300);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email.includes("@") && email.includes(".")) {
            alert(`Thanks for subscribing, ${email}!`);
            setEmail("");
        } else {
            alert("Please enter a valid email.");
        }
    };

    const handleMouseMove = (e) => {
        const buttonRect = e.currentTarget.getBoundingClientRect();
        setTooltipPos({
            x: e.clientX - buttonRect.left,
            y: -30,
        });
    };

    return (
        <footer className="footer-container mt-5">
            <div className="footer-top row g-4 p-5 bg-dark text-light">
                {/* Contact */}
                <div className="col-md-3">
                    <h5 className="text-warning mb-3">📞 Contact Us</h5>
                    <ul className="list-unstyled">
                        <li><img src="/images/download (1).png" width="20" className="me-2" alt="" /> +254 785744372</li>
                        <li><img src="/images/download.png" width="20" className="me-2" alt="" /> lovelyhomefuniture56@gmail.com</li>
                        <li><img src="/images/download.jpeg" width="20" className="me-2" alt="" /> +254 797125612</li>
                        <li><img src="/images/download (2).png" width="20" className="me-2" alt="" /> Ngong Town, Kikoi Rd</li>
                    </ul>
                </div>

                {/* Quick Links */}
                <div className="col-md-3 text-center">
                    <h5 className="text-warning mb-3">📁 Quick Links</h5>
                    <ul className="list-unstyled footer-links">
                        <li><Link to="/">🏠 Home</Link></li>
                        <li><Link to="/addproduct">➕ Add Product</Link></li>
                        <li><Link to="/aboutus">ℹ️ About Us</Link></li>
                        <li><Link to="/faqs">❓ FAQs</Link></li>
                        <li><Link to="/contact">📨 Contact</Link></li>
                    </ul>
                </div>

                {/* Hours */}
                <div className="col-md-3 text-center">
                    <h5 className="text-warning mb-3">🕒 Hours</h5>
                    <ul className="list-unstyled">
                        <li>Mon - Fri: 8am - 6pm</li>
                        <li>Saturday: 9am - 4pm</li>
                        <li>Sunday: Closed</li>
                    </ul>
                    <div className="mt-3">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="me-3">
                            <img src="/images/fb.png" alt="Facebook" height="36" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <img src="/images/in.png" alt="Instagram" height="36" />
                        </a>
                    </div>
                </div>

                {/* Newsletter */}
                <div className="col-md-3 text-center">
                    <h5 className="text-warning mb-3">📬 Subscribe</h5>
                    <form onSubmit={handleSubscribe} className="d-flex flex-column align-items-center">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="form-control mb-2"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button type="submit" className="btn btn-warning btn-sm">Subscribe</button>
                    </form>
                </div>
            </div>

            <div className="footer-bottom bg-secondary text-light text-center py-3">
                <small>&copy; {currentYear} LovelyHome. Built with ❤️ by Lavenda Madahana. All rights reserved.</small>
            </div>

            {showTopBtn && (
                <div className="back-to-top-wrapper">
                    <div
                        className="tooltip-container"
                        onMouseMove={handleMouseMove}
                        onMouseEnter={() => {
                            setHovered(true);
                            setShowTooltip(true);
                        }}
                        onMouseLeave={() => {
                            setHovered(false);
                            setShowTooltip(false);
                        }}
                    >
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                            className="back-to-top"
                            title="Back to Top"
                        >
                            {hovered ? "🚀" : "⬆️"}
                        </button>
                        <span
                            className="tooltip-text"
                            style={{
                                left: `${tooltipPos.x}px`,
                                top: `${tooltipPos.y}px`,
                                opacity: showTooltip ? 1 : 0,
                                transform: showTooltip ? "translate(-50%, 0)" : "translate(-50%, 10px)",
                            }}
                        >
                            Back to Top
                        </span>
                    </div>
                </div>
            )}
        </footer>
    );
};

export default Footer;
