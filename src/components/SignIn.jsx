import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import NavBar from "./NavBar";
import "./Footer.css";

const SignIn = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const submitForm = async (e) => {
        e.preventDefault();

        try {
            setError("");
            setSuccess("");
            setLoading("Please wait ...");

            const data = new FormData();
            data.append("username", username);
            data.append("password", password);

            const response = await axios.post("https://lavy.pythonanywhere.com/api/signin", data);

            if (response.data.User) {
                localStorage.setItem("user", JSON.stringify(response.data.User));
                navigate("/");
            } else {
                setLoading("");
                setError(response.data.Message);
            }
        } catch (error) {
            setLoading("");
            setError("Something went wrong. Please try again.");
        }
    };

    const togglePassword = () => {
        const passwordInput = document.getElementById("password");
        const icon = document.getElementById("icon");

        const isPassword = passwordInput.getAttribute("type") === "password";
        passwordInput.setAttribute("type", isPassword ? "text" : "password");
        icon.classList.toggle("bi-eye-fill");
        icon.classList.toggle("bi-eye-slash-fill");
    };

    return (
        <>
            <NavBar />
            <div className="container mt-5">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-5 d-none d-md-block">
                        <img
                            src="images/giphy.webp"
                            alt="Sign In Illustration"
                            className="img-fluid rounded shadow"
                        />
                    </div>
                    <div className="col-md-6 card p-4 shadow-lg">
                        <h2 className="text-center text-primary mb-4">Welcome Back</h2>

                        {success && <div className="alert alert-success">{success}</div>}
                        {loading && <div className="alert alert-warning">{loading}</div>}
                        {error && <div className="alert alert-danger">{error}</div>}

                        <form onSubmit={submitForm}>
                            <div className="mb-3">
                                <label className="form-label">Username</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter username"
                                    required
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <div className="input-group">
                                    <input
                                        type="password"
                                        id="password"
                                        className="form-control"
                                        placeholder="Enter password"
                                        required
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <span className="input-group-text" onClick={togglePassword} style={{ cursor: "pointer" }}>
                                        <i className="bi bi-eye-fill" id="icon"></i>
                                    </span>
                                </div>
                            </div>

                            <div className="d-grid">
                                <button className="btn btn-primary" type="submit">
                                    <i className="bi bi-box-arrow-in-right me-1"></i> Sign In
                                </button>
                            </div>
                        </form>

                        <div className="mt-3 text-center">
                            <p>
                                Don't have an account? <Link to="/signup">Sign Up</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignIn;
