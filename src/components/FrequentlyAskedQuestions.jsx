import NavBar from "./NavBar";
import Footer from "./Footer";

const FrequentlyAskedQuestions = () => {
    return (
        <div className="faqs">
            <NavBar />
            <div className="container py-5">
            <h2 className="text-center mb-5 text-success">Frequently Asked Questions</h2>
              {/* Shipping & Delivery */}
<h4 className="mb-3">🚚 Shipping & Delivery</h4>
<div className="accordion mb-5" id="shipping">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#q12">
        Do you offer home delivery?
      </button>
    </h2>
    <div id="q12" className="accordion-collapse collapse" data-bs-parent="#shipping">
      <div className="accordion-body">
        Yes, we provide home delivery services across Kenya. Delivery fees depend on your location and item size.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#q13">
        How long does delivery take?
      </button>
    </h2>
    <div id="q13" className="accordion-collapse collapse" data-bs-parent="#shipping">
      <div className="accordion-body">
        Most orders are delivered within 2–5 business days. Customized items may take longer.
      </div>
    </div>
  </div>
</div>

{/* Customization */}
<h4 className="mb-3">🎨 Customization</h4>
<div className="accordion mb-5" id="customization">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#q14">
        Can I request custom furniture?
      </button>
    </h2>
    <div id="q14" className="accordion-collapse collapse" data-bs-parent="#customization">
      <div className="accordion-body">
        Absolutely! We accept custom orders. You can choose dimensions, fabric, and colors to match your space.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#q15">
        Is there an extra cost for customization?
      </button>
    </h2>
    <div id="q15" className="accordion-collapse collapse" data-bs-parent="#customization">
      <div className="accordion-body">
        Yes, custom furniture typically includes additional charges depending on the materials and complexity.
      </div>
    </div>
  </div>
</div>

{/* Product Care & Maintenance */}
<h4 className="mb-3">🧼 Product Care</h4>
<div className="accordion mb-5" id="care">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#q16">
        How do I clean upholstered furniture?
      </button>
    </h2>
    <div id="q16" className="accordion-collapse collapse" data-bs-parent="#care">
      <div className="accordion-body">
        Use a mild detergent and soft cloth for cleaning. Avoid harsh chemicals or soaking the fabric.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#q17">
        Do you offer furniture protection plans?
      </button>
    </h2>
    <div id="q17" className="accordion-collapse collapse" data-bs-parent="#care">
      <div className="accordion-body">
        Not at the moment, but we are working on providing affordable protection plans soon.
      </div>
    </div>
  </div>
</div>

{/* Security & Privacy */}
<h4 className="mb-3">🔒 Security & Privacy</h4>
<div className="accordion mb-5" id="security">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#q18">
        Is my personal data safe?
      </button>
    </h2>
    <div id="q18" className="accordion-collapse collapse" data-bs-parent="#security">
      <div className="accordion-body">
        Yes. We use encryption and follow strict privacy protocols to ensure your data remains secure.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#q19">
        Will you share my information with third parties?
      </button>
    </h2>
    <div id="q19" className="accordion-collapse collapse" data-bs-parent="#security">
      <div className="accordion-body">
        No. We do not share your information with any third parties without your consent.
      </div>
    </div>
  </div>
</div>

                

                {/* Product Information */}
                <h4 className="mb-3">🛋️ Product Information</h4>
                <div className="accordion mb-5" id="productInfo">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" data-bs-toggle="collapse" data-bs-target="#q1">
                                What materials are your furniture pieces made from?
                            </button>
                        </h2>
                        <div id="q1" className="accordion-collapse collapse show" data-bs-parent="#productInfo">
                            <div className="accordion-body">
                                We use high-quality materials such as solid wood, engineered wood, metal, and upholstery fabrics depending on the product.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#q2">
                                Are the dimensions listed accurate?
                            </button>
                        </h2>
                        <div id="q2" className="accordion-collapse collapse" data-bs-parent="#productInfo">
                            <div className="accordion-body">
                                Yes, all dimensions are measured manually and listed on each product page.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#q3">
                                Is assembly required?
                            </button>
                        </h2>
                        <div id="q3" className="accordion-collapse collapse" data-bs-parent="#productInfo">
                            <div className="accordion-body">
                                Some products require minimal assembly; tools and instructions are included.
                            </div>
                        </div>
                    </div>
                </div>

                {/* Returns & Exchanges */}
                <h4 className="mb-3">🔁 Returns & Exchanges</h4>
                <div className="accordion mb-5" id="returns">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#q4">
                                What’s your return policy?
                            </button>
                        </h2>
                        <div id="q4" className="accordion-collapse collapse" data-bs-parent="#returns">
                            <div className="accordion-body">
                                Returns accepted within 14–30 days, unused and in original packaging.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#q5">
                                Do you offer free returns?
                            </button>
                        </h2>
                        <div id="q5" className="accordion-collapse collapse" data-bs-parent="#returns">
                            <div className="accordion-body">
                                Return shipping may be at the customer’s expense unless the item is damaged.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#q6">
                                Can I exchange an item?
                            </button>
                        </h2>
                        <div id="q6" className="accordion-collapse collapse" data-bs-parent="#returns">
                            <div className="accordion-body">
                                Yes, depending on availability and return condition.
                            </div>
                        </div>
                    </div>
                </div>

                {/* Payment & Warranty */}
                <h4 className="mb-3">💳 Payment & Warranty</h4>
                <div className="accordion mb-5" id="payment">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#q7">
                                What payment methods do you accept?
                            </button>
                        </h2>
                        <div id="q7" className="accordion-collapse collapse" data-bs-parent="#payment">
                            <div className="accordion-body">
                                We accept Lipa na M-Pesa and cash payments only.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#q8">
                                Is there a warranty?
                            </button>
                        </h2>
                        <div id="q8" className="accordion-collapse collapse" data-bs-parent="#payment">
                            <div className="accordion-body">
                                Most items come with a 1-year manufacturer’s warranty.
                            </div>
                        </div>
                    </div>
                </div>

                {/* Account & Support */}
                <h4 className="mb-3">🧾 Account & Support</h4>
                <div className="accordion mb-5" id="account">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#q9">
                                How do I create an account?
                            </button>
                        </h2>
                        <div id="q9" className="accordion-collapse collapse" data-bs-parent="#account">
                            <div className="accordion-body">
                                Click the “Sign Up” button at the top of the page and follow the prompts.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#q10">
                                I forgot my password. What should I do?
                            </button>
                        </h2>
                        <div id="q10" className="accordion-collapse collapse" data-bs-parent="#account">
                            <div className="accordion-body">
                                Use the “Forgot Password” link on the login page to reset your password via email.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#q11">
                                How can I contact customer support?
                            </button>
                        </h2>
                        <div id="q11" className="accordion-collapse collapse" data-bs-parent="#account">
                            <div className="accordion-body">
                                You can contact us through WhatsApp at <b>0797125612</b> or call <b>0785744372</b>. Our team is available Monday to Friday, 9 AM – 6 PM.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default FrequentlyAskedQuestions;
