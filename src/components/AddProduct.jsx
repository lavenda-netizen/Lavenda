import axios from "axios";
import { useEffect, useRef, useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const AddProducts = () => {
    const [product_name, setProductName] = useState("");
    const [product_desc, setProductDesc] = useState("");
    const [product_cost, setProductCost] = useState("");
    const [product_photo, setProductPhoto] = useState("");
    const [loading, setLoading] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [showAuthMessage, setShowAuthMessage] = useState(false);

    const navigate = useNavigate();
    const user = localStorage.getItem("user");
    const isAuthenticated = !!user;
    const fileInputRef = useRef(null);

    useEffect(() => {
        if (!isAuthenticated) {
            setShowAuthMessage(true);
            setTimeout(() => {
                localStorage.clear();
                navigate("/signin");
            }, 5000); // Redirect after 5 seconds
        }
    }, [isAuthenticated, navigate]);

    const submitForm = async (e) => {
        e.preventDefault();
        try {
            setError("");
            setSuccess("");
            setLoading("Please wait...");

            const data = new FormData();
            data.append("product_name", product_name);
            data.append("product_desc", product_desc);
            data.append("product_cost", product_cost);
            data.append("product_photo", product_photo);

            const response = await axios.post(
                "https://lavy.pythonanywhere.com/api/addproduct",
                data
            );

            setLoading("");
            setSuccess(response.data.Success);

            // Reset form
            setProductName("");
            setProductDesc("");
            setProductCost("");
            if (fileInputRef.current) fileInputRef.current.value = "";
        } catch (error) {
            setLoading("");
            setError("Failed to add product. Please try again.");
        }
    };

    return (
        <>
            <NavBar />
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6">
                        <div className="card shadow-lg p-4 rounded-4">
                            <h3 className="text-center text-primary mb-4">Add New Product</h3>

                            {loading && <div className="alert alert-info">{loading}</div>}
                            {error && <div className="alert alert-danger">{error}</div>}
                            {success && <div className="alert alert-success">{success}</div>}

                            {showAuthMessage ? (
                                <div className="alert alert-warning text-center">
                                    To add products, you need to sign in or create an account if you do not have one.
                                    <br />
                                    Redirecting to Sign In page...
                                </div>
                            ) : (
                                <form onSubmit={submitForm}>
                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="productName"
                                            placeholder="Product Name"
                                            required
                                            value={product_name}
                                            onChange={(e) => setProductName(e.target.value)}
                                        />
                                        <label htmlFor="productName">Product Name</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <textarea
                                            className="form-control"
                                            id="productDesc"
                                            placeholder="Product Description"
                                            required
                                            style={{ height: "100px" }}
                                            value={product_desc}
                                            onChange={(e) => setProductDesc(e.target.value)}
                                        ></textarea>
                                        <label htmlFor="productDesc">Product Description</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="productCost"
                                            placeholder="Product Cost"
                                            required
                                            value={product_cost}
                                            onChange={(e) => setProductCost(e.target.value)}
                                        />
                                        <label htmlFor="productCost">Product Cost</label>
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Product Photo</label>
                                        <input
                                            type="file"
                                            className="form-control"
                                            required
                                            ref={fileInputRef}
                                            onChange={(e) => setProductPhoto(e.target.files[0])}
                                        />
                                    </div>

                                    <div className="d-grid">
                                        <button type="submit" className="btn btn-success btn-lg">
                                            Add Product
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AddProducts;
