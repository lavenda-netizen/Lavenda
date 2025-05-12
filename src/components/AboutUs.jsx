import NavBar from "./NavBar";
import { FaLeaf, FaThumbsUp, FaCouch, FaTags, FaSmile } from "react-icons/fa";

const AboutUs = () => {
    return (
        <div>
            <NavBar />

            <div className="container py-5">
                {/* Who Are We */}
                <section className="row align-items-center mb-5">
                    <div className="col-md-6 mb-4 mb-md-0">
                        <img
                            src="images/premium_photo-1684338795288-097525d127f0.avif"
                            alt="Lovely Home"
                            className="img-fluid rounded-4 shadow"
                        />
                    </div>
                    <div className="col-md-6">
                        <div className="card shadow-lg rounded-4 p-4">
                            <h2 className="text-success bg-dark text-white py-2 px-3 rounded-3">
                                Who Are We?
                            </h2>
                            <p className="text-muted mt-3">
                                Lovely Home Furniture offers curated, high-quality, and stylish pieces
                                designed to bring comfort and personality to every space.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Our Mission */}
                <section className="row align-items-center flex-md-row-reverse mb-5">
                    <div className="col-md-6 mb-4 mb-md-0">
                        <img
                            src="images/pexels-photo-279645.webp"
                            alt="Mission"
                            className="img-fluid rounded-4 shadow"
                        />
                    </div>
                    <div className="col-md-6">
                        <div className="card shadow-lg rounded-4 p-4">
                            <h2 className="text-success bg-dark text-white py-2 px-3 rounded-3">
                                Our Mission
                            </h2>
                            <p className="text-muted mt-3">
                                We're here to make quality furniture accessible to everyone – blending
                                comfort, design, and affordability in every piece.
                            </p>
                        </div>
                    </div>
                </section>

                {/* What Sets Us Apart */}
                <section className="row align-items-start mb-5">
                    <div className="col-md-6 mb-4 mb-md-0">
                        <div className="card shadow-lg rounded-4 p-4 h-100">
                            <h2 className="text-success bg-dark text-white py-2 px-3 rounded-3">
                                What Sets Us Apart
                            </h2>
                            <ul className="list-unstyled text-muted mt-3">
                                <li>
                                    <FaThumbsUp className="me-2 text-success" />
                                    <strong>Quality:</strong> Durable, trusted craftsmanship
                                </li>
                                <li>
                                    <FaCouch className="me-2 text-success" />
                                    <strong>Variety:</strong> Styles for every room
                                </li>
                                <li>
                                    <FaTags className="me-2 text-success" />
                                    <strong>Value:</strong> Affordable, luxurious pieces
                                </li>
                                <li>
                                    <FaSmile className="me-2 text-success" />
                                    <strong>Service:</strong> Friendly, expert support
                                </li>
                                <li>
                                    <FaLeaf className="me-2 text-success" />
                                    <strong>Sustainability:</strong> Eco-conscious sourcing
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Our Story */}
                    <div className="col-md-6">
                        <img
                            src="images/istockphoto-2109056640-612x612.jpg"
                            alt="Our Story"
                            className="img-fluid rounded-4 shadow mb-3"
                        />
                        <div className="card shadow-lg rounded-4 p-4 h-100">
                            <h2 className="text-success bg-dark text-white py-2 px-3 rounded-3">
                                Our Story
                            </h2>
                            <p className="text-muted mt-3">
                                Founded by passionate design lovers, we’re committed to helping you
                                create a home that’s both beautiful and practical.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AboutUs;
