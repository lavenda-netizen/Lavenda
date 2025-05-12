import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import './SignUp.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure this is included in your project

const SignUp = () => {
    let [username, setUsername] = useState("");
    let [email, setEmail] = useState("");
    let [phone, setPhone] = useState("");
    let [password, setPassword] = useState("");
    let [loading, setLoading] = useState("");
    let [error, setError] = useState("");
    let [success, setSuccess] = useState("");
    let [passwordVisible, setPasswordVisible] = useState(false);
    let [passwordValid, setPasswordValid] = useState(true);
    let [usernameValid, setUsernameValid] = useState(true);
    let [passwordGenerated, setPasswordGenerated] = useState(false);
    let [copySuccess, setCopySuccess] = useState(false);
    let [passwordStrength, setPasswordStrength] = useState(""); // New

    const navigate = useNavigate();

    const generatePassword = () => {
        const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let password = "";
        for (let i = 0; i < 12; i++) {
            password += charset.charAt(Math.floor(Math.random() * charset.length));
        }
        return password;
    };

    const setGeneratedPassword = () => {
        const generatedPassword = generatePassword();
        setPassword(generatedPassword);
        setPasswordGenerated(true);
        setCopySuccess(false);
        validatePassword(generatedPassword);
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(password)
            .then(() => setCopySuccess(true))
            .catch(() => setCopySuccess(false));
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const validatePassword = (password) => {
        const regex = /^[A-Za-z0-9]{8,}$/;
        setPasswordValid(regex.test(password));
        setPassword(password);

        let strengthValue = 0;
        if (password.length >= 8) strengthValue += 1;
        if (/[A-Z]/.test(password)) strengthValue += 1;
        if (/[0-9]/.test(password)) strengthValue += 1;
        if (/[a-z]/.test(password)) strengthValue += 1;

        let strength = "";
        if (strengthValue <= 1) {
            strength = "Weak";
        } else if (strengthValue === 2 || strengthValue === 3) {
            strength = "Medium";
        } else {
            strength = "Strong";
        }

        setPasswordStrength(strength);
    };

    const validateUsername = (username) => {
        const regex = /^[a-zA-Z0-9_]+$/;
        setUsernameValid(regex.test(username));
        setUsername(username);
    };

    const getStrengthPercentage = () => {
        if (passwordStrength === "Weak") return 33;
        if (passwordStrength === "Medium") return 66;
        if (passwordStrength === "Strong") return 100;
        return 0;
    };

    const getProgressBarClass = () => {
        if (passwordStrength === "Weak") return "bg-danger";
        if (passwordStrength === "Medium") return "bg-warning";
        if (passwordStrength === "Strong") return "bg-success";
        return "";
    };

    const submitForm = async (e) => {
        e.preventDefault();

        if (!passwordValid || !usernameValid) {
            setError("Please fix the errors before submitting.");
            return;
        }

        try {
            setLoading("Please wait as we upload your data");

            const data = new FormData();
            data.append("username", username);
            data.append("email", email);
            data.append("phone", phone);
            data.append("password", password);

            const response = await axios.post("https://lavy.pythonanywhere.com/api/signup", data);

            setLoading("");
            setError("");
            setSuccess(response.data.success);
            setUsername("");
            setEmail("");
            setPhone("");
            setPassword("");

            navigate("/signin");
        } catch (error) {
            setLoading("");
            setError("Something went wrong");
        }
    };

    return (
        <div className="row justify-content-center mt-4">
            <NavBar />
            <div className="col-md-6 card shadow p-4">
                <img src="images/12198823.gif" alt="" />
            </div>
            <div className="col-md-6 card shadow p-4">
                <h2>Sign up</h2>
                <b className="text-warning">{loading}</b>
                <b className="text-danger">{error}</b>
                <b className="text-success">{success}</b>
                <form onSubmit={submitForm}>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter UserName"
                        required
                        onChange={(e) => validateUsername(e.target.value)}
                        value={username}
                    />
                    {!usernameValid && (
                        <small className="text-danger">
                            Username should not contain special characters.
                        </small>
                    )}
                    <br />
                    <input
                        type="email"
                        required
                        className="form-control"
                        placeholder="Enter Email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <br />
                    <input
                        type="tel"
                        required
                        placeholder="Enter phone"
                        className="form-control"
                        onChange={(e) => setPhone(e.target.value)}
                        value={phone}
                    />
                    <br />
                    <div className="input-group">
                        <input
                            type={passwordVisible ? "text" : "password"}
                            required
                            placeholder="Enter Password"
                            className="form-control"
                            onChange={(e) => validatePassword(e.target.value)}
                            value={password}
                        />
                        <span className="input-group-text" onClick={togglePasswordVisibility}>
                            <i className={passwordVisible ? "bi bi-eye-slash" : "bi bi-eye"}></i>
                        </span>
                    </div>
                    {!passwordValid && (
                        <small className="text-danger">
                            Password must be at least 8 characters long and contain only alphanumeric characters.
                        </small>
                    )}
                    {password && (
                        <div className="mt-2">
                            <div className="progress">
                                <div
                                    className={`progress-bar ${getProgressBarClass()}`}
                                    role="progressbar"
                                    style={{ width: `${getStrengthPercentage()}%` }}
                                    aria-valuenow={getStrengthPercentage()}
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                >
                                    {passwordStrength}
                                </div>
                            </div>
                        </div>
                    )}
                    <br />

                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={setGeneratedPassword}
                    >
                        Generate Password
                    </button>
                    <br />
                    {passwordGenerated && (
                        <p className="text-success">Password has been generated!</p>
                    )}
                    {passwordGenerated && (
                        <button
                            type="button"
                            className="btn btn-info mt-2"
                            onClick={copyToClipboard}
                        >
                            Copy to Clipboard
                        </button>
                    )}
                    {copySuccess && (
                        <p className="text-success mt-2">Password copied to clipboard!</p>
                    )}
                    <br />
                    <button className="btn btn-primary">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
