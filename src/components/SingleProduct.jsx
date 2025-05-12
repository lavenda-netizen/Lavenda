import axios from "axios";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import './SingleProduct.css';

const SingleProduct = () => {
    const [phone, setPhone] = useState("");
    const [loading, setLoading] = useState("");
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const [reviews, setReviews] = useState([]);
    const [newReview, setNewReview] = useState({ rating: 1, comment: "" });

    const { product } = useLocation().state || {};
    const img_url = "https://lavy.pythonanywhere.com/static/images/";

    // Define mock reviews
    const mockReviews = [
        {
            customer_name: "John Doe",
            rating: 5,
            comment: "Great product! Very useful and works as expected. Highly recommend!"
        },
        {
            customer_name: "Jane Smith",
            rating: 4,
            comment: "Good quality, but the delivery was a bit slow. Still happy with the purchase."
        },
        {
            customer_name: "Samuel K.",
            rating: 3,
            comment: "The product is okay, but I expected more features for the price."
        },
    ];

    // Fetch reviews
    const fetchReviews = async () => {
        try {
            const response = await axios.get(`https://lavy.pythonanywhere.com/api/get_reviews/${product.id}`);
            setReviews(response.data.length > 0 ? response.data : mockReviews);
        } catch (_) {
            // If there's an error fetching, fall back to mock reviews
            setReviews(mockReviews);
        }
    };

    // Submit review
    const submitReview = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");
        try {
            const data = new FormData();
            data.append("rating", newReview.rating);
            data.append("comment", newReview.comment);
            data.append("productId", product.id);
            await axios.post("https://lavy.pythonanywhere.com/api/submit_review", data);

            setSuccess("Review submitted successfully!");
            
            // Add the new review to the list directly (optimistic UI)
            setReviews([
                ...reviews, 
                { 
                    customer_name: "You",  // Assume the reviewer is the logged-in user (you can update this as needed)
                    rating: newReview.rating,
                    comment: newReview.comment 
                }
            ]);
            
            // Clear the form
            setNewReview({ rating: 1, comment: "" });
        } catch {
            setError("Failed to submit review.");
        }
    };

    // Payment form submission
    const submitForm = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");
        setLoading("Processing payment...");
        try {
            const data = new FormData();
            data.append("phone", phone);
            data.append("amount", product.product_cost);
            const response = await axios.post("https://lavy.pythonanywhere.com/api/mpesa_payment", data);
            setLoading("");
            setSuccess(response.data.message);
        } catch (error) {
            setLoading("");
            setError(error.message);
        }
    };

    // Fetch reviews when component mounts
    useEffect(() => {
        fetchReviews();
    }, []);

    return (
        <div>
            <NavBar />
            <div className="container mt-5">
                <div className="row justify-content-center">
                    {/* Product Image */}
                    <div className="col-md-6">
                        <img src={img_url + product.product_photo} className="img-fluid rounded shadow-lg" alt="Product" />
                    </div>

                    {/* Product Info and Payment Form */}
                    <div className="col-md-5 card shadow-lg rounded p-4 bg-light">
                        <h2 className="text-center text-primary fw-bold">{product.product_name}</h2>
                        <h3 className="text-warning text-center">
                            {product.product_cost.toLocaleString('en-US', { style: 'currency', currency: 'KES' })}
                        </h3>
                        <p className="text-muted text-center mb-4">{product.product_desc}</p>

                        <div className="text-center mb-4">
                            {loading && <div className="alert alert-info">{loading}</div>}
                            {success && <div className="alert alert-success">{success}</div>}
                            {error && <div className="alert alert-danger">{error}</div>}
                        </div>

                        <form onSubmit={submitForm} className="mt-4">
                            <div className="mb-3">
                                <input
                                    type="number"
                                    readOnly
                                    value={product.product_cost}
                                    className="form-control shadow-sm rounded"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="tel"
                                    className="form-control shadow-sm rounded"
                                    required
                                    placeholder="Enter Mpesa No 2547xxxxxxxxx"
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                            <div className="text-center">
                                <button className="btn btn-primary w-100 py-2 shadow-sm rounded">Pay Now</button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Reviews Section */}
                <div className="row mt-5">
                    <div className="col-md-12">
                        <h3 className="text-center text-primary">Customer Reviews</h3>

                        {reviews.length > 0 ? (
                            reviews.map((review, index) => (
                                <div key={index} className="review-card mb-3 p-3 shadow-sm rounded">
                                    <div className="d-flex justify-content-between">
                                        <h5>{review.customer_name}</h5>
                                        <span className="text-warning">{'★'.repeat(review.rating)}</span>
                                    </div>
                                    <p>{review.comment}</p>
                                </div>
                            ))
                        ) : (
                            <div className="text-center text-muted">No reviews yet. Be the first to leave a review!</div>
                        )}

                        <form onSubmit={submitReview} className="mt-4">
                            <div className="mb-3">
                                <label className="form-label">Your Rating</label>
                                <select
                                    className="form-select shadow-sm"
                                    value={newReview.rating}
                                    onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}
                                >
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <option key={star} value={star}>{star} Star{star > 1 && 's'}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-3">
                                <textarea
                                    className="form-control shadow-sm"
                                    rows="3"
                                    placeholder="Write your review here..."
                                    value={newReview.comment}
                                    onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                                ></textarea>
                            </div>
                            <div className="text-center">
                                <button className="btn btn-success w-100 py-2 shadow-sm rounded">Submit Review</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
