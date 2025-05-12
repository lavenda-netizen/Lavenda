import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import './Navbar.css'; // Ensure the CSS for sticky navbar is included here.

const NavBar = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        setUser(storedUser);
    }, []);

    const handleLogout = () => {
        localStorage.clear();
        setUser(null);
        navigate("/signin");
    };

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark px-4 shadow sticky-top py-2">
            <Link to="/" className="navbar-brand d-flex align-items-center gap-2">
                <img
                    src="/images/Screenshot from 2025-03-25 07-43-58.png"
                    alt="Logo"
                    height="40"
                    className="rounded shadow-sm"
                />
                <span className="fw-bold text-warning fs-5">LovelyHome</span>
            </Link>

            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#mainNavbar"
                aria-controls="mainNavbar"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="mainNavbar">
                <ul className="navbar-nav me-auto mb-2 mb-md-0">
                    <li className="nav-item">
                        <Link to="/" className="nav-link text-light fw-semibold">
                            <i className="fas fa-home me-1"></i> Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/addproduct" className="nav-link text-light fw-semibold">
                            <i className="fas fa-plus me-1"></i> Add Product
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/aboutus" className="nav-link text-light fw-semibold">
                            <i className="fas fa-info-circle me-1"></i> About Us
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/faqs" className="nav-link text-light fw-semibold">
                            <i className="fas fa-question-circle me-1"></i> FAQs
                        </Link>
                    </li>
                    {/* Add an icon for the Contact Us link */}
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link text-light fw-semibold">
                            <i className="fas fa-envelope me-1"></i> Contact Us
                        </Link>
                    </li>
                </ul>

                <ul className="navbar-nav ms-auto">
                    {user ? (
                        <>
                            <li className="nav-item d-flex align-items-center">
                                <span className="nav-link text-warning fw-bold">
                                    <i className="fas fa-user-circle me-1"></i> Hello, {user.username}
                                </span>
                            </li>
                            <li className="nav-item">
                                <button
                                    className="btn btn-outline-warning btn-sm ms-2"
                                    onClick={handleLogout}
                                >
                                    <i className="fas fa-sign-out-alt me-1"></i> Logout
                                </button>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className="nav-item">
                                <Link to="/signin" className="nav-link text-light">
                                    <i className="fas fa-sign-in-alt me-1"></i> Log In
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/signup" className="nav-link text-light">
                                    <i className="fas fa-user-plus me-1"></i> Register
                                </Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
