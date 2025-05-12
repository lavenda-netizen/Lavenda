import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Footer.css";
import "./ProductCard.css";

const GetProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState("");
    const [error, setError] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [sortOrder, setSortOrder] = useState("default");
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(12);
    const navigate = useNavigate();
    const img_url = "https://lavy.pythonanywhere.com/static/images/";

    const getProducts = async () => {
        setError("");
        setLoading("Fetching products...");
        try {
            const response = await axios.get("https://lavy.pythonanywhere.com/api/getproducts");
            setProducts(response.data);
            setFilteredProducts(response.data);
            setLoading("");
        } catch (error) {
            setLoading("");
            setError("Failed to load products. Try again later.");
        }
    };

    const handleSearch = (value) => {
        const filtered = products.filter(product =>
            product.product_name.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredProducts(filtered);
    };

    const handleSortChange = (e) => {
        const order = e.target.value;
        setSortOrder(order);

        let sortedProducts = [...filteredProducts];
        if (order === "priceLowToHigh") {
            sortedProducts.sort((a, b) => a.product_cost - b.product_cost);
        } else if (order === "priceHighToLow") {
            sortedProducts.sort((a, b) => b.product_cost - a.product_cost);
        } else if (order === "nameAZ") {
            sortedProducts.sort((a, b) => a.product_name.localeCompare(b.product_name));
        } else if (order === "nameZA") {
            sortedProducts.sort((a, b) => b.product_name.localeCompare(a.product_name));
        }
        setFilteredProducts(sortedProducts);
    };

    const goToProduct = (product) => {
        navigate("/singleproduct", { state: { product } });
    };

    useEffect(() => {
        getProducts();
    }, []);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(filteredProducts.length / productsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="container-fluid">
            <NavBar />

            <div className="video-banner position-relative overflow-hidden mb-5">
                <video autoPlay muted loop playsInline className="w-100" style={{ maxHeight: "400px", objectFit: "cover" }}>
                    <source src="videos/stock-footage--d-interior-design-evolution-as-cupboards-fill-in-the-kitches-and-the-whole-empty-apartment-with.webm" type="video/webm" />
                </video>
                <div className="position-absolute top-50 start-50 translate-middle text-center text-light">
                    <h2 className="fw-bold">Discover the Future of Interior Elegance</h2>
                    <p>Modern furniture, timeless designs, just a click away.</p>
                    <button
                        className="btn btn-lg btn-primary mt-3"
                        onClick={() => document.getElementById("product-list-section")?.scrollIntoView({ behavior: "smooth" })}
                    >
                        🛍️ Shop Now
                    </button>
                </div>
            </div>

            <div className="row" id="product-list-section">
                <div className="col-12 text-center my-4">
                    <h3 className="bg-primary text-light p-3 rounded fw-bold shadow">
                        🛒 PRODUCTS IN STOCK
                    </h3>
                </div>
            </div>

            {error && <div className="alert alert-danger text-center">{error}</div>}
            {loading && <div className="loader mx-auto my-4"></div>}

            <div className="row justify-content-center my-4">
                <div className="col-md-4 mb-3">
                    <input
                        type="text"
                        placeholder="🔍 Search product by name"
                        className="form-control shadow-sm"
                        onChange={(e) => handleSearch(e.target.value)}
                    />
                </div>
                <div className="col-md-3 mb-3">
                    <select className="form-select shadow-sm" onChange={handleSortChange} value={sortOrder}>
                        <option value="default">Sort by</option>
                        <option value="priceLowToHigh">Price: Low to High</option>
                        <option value="priceHighToLow">Price: High to Low</option>
                        <option value="nameAZ">Name: A to Z</option>
                        <option value="nameZA">Name: Z to A</option>
                    </select>
                </div>
            </div>

            <div className="row justify-content-center px-5">
                {currentProducts.map((product, index) => {
                    const discountedPrice = product.is_on_sale
                        ? product.product_cost - product.product_cost * 0.2
                        : null;

                    return (
                        <div className="col-md-3 mb-4 fade-in" key={index}>
                            <div className="card product-card shadow-lg h-100 position-relative">
                                {product.is_new && <span className="badge bg-success position-absolute top-0 start-0 m-2">NEW</span>}
                                {product.is_on_sale && <span className="badge bg-danger position-absolute top-0 end-0 m-2">SALE</span>}
                                <img
                                    src={img_url + product.product_photo}
                                    alt={product.product_name}
                                    className="product_img card-img-top"
                                />
                                <div className="card-body text-center">
                                    <h5 className="text-primary fw-bold">{product.product_name}</h5>
                                    <p className="text-muted small">{product.product_desc.slice(0, 60)}...</p>
                                    <p className="fw-bold">
                                        {product.is_on_sale ? (
                                            <>
                                                <span className="text-muted text-decoration-line-through me-2">
                                                    Ksh {product.product_cost.toLocaleString()}
                                                </span>
                                                <span className="text-danger">
                                                    Ksh {discountedPrice.toLocaleString()}
                                                </span>
                                            </>
                                        ) : (
                                            <span className="text-danger">
                                                Ksh {product.product_cost.toLocaleString()}
                                            </span>
                                        )}
                                    </p>
                                    <button className="btn btn-outline-primary w-100 mt-2" onClick={() => goToProduct(product)}>
                                        🔍 View Product
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="text-center my-4">
                <nav>
                    <ul className="pagination">
                        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                            <button className="page-link" onClick={() => paginate(currentPage - 1)}>Previous</button>
                        </li>
                        {pageNumbers.map(number => (
                            <li key={number} className={`page-item ${number === currentPage ? "active" : ""}`}>
                                <button className="page-link" onClick={() => paginate(number)}>{number}</button>
                            </li>
                        ))}
                        <li className={`page-item ${currentPage === pageNumbers.length ? "disabled" : ""}`}>
                            <button className="page-link" onClick={() => paginate(currentPage + 1)}>Next</button>
                        </li>
                    </ul>
                </nav>
            </div>

            <Footer />
            <ToastContainer position="top-right" autoClose={2000} />
        </div>
    );
};

export default GetProducts;
