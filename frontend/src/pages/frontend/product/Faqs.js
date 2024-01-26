import React from 'react';

function Faqs() {
    return (
        <section id="faqs" className="padding-xlarge">
            <div className="container">
                <div className="row">
                    <div className="offset-md-2 col-md-8">
                        <h3 className="text-center mb-5">Some FAQs</h3>
                        <div className="accordion accordion-flush" id="accordionFlush">
                            {/* Accordion items... */}
                            <div className="accordion-item">
                                <h4 className="accordion-header" id="flush-headingOne3">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="true" aria-controls="flush-collapseOne">
                                        I got my vase but some items are broken, what to do?
                                    </button>
                                </h4>
                                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div className='row'>
                                        {/* Repeat this structure for each product card */}
                                        <div className="col-md-4 col-lg-3">
                                            <div className="product-card position-relative">
                                                <div className="image-holder zoom-effect">
                                                    <img src={require(`../../../layouts/LayoutSite/images/product-item5.jpg`)} alt="" className="img-fluid zoom-in" />
                                                    <div className="cart-concern position-absolute">
                                                      
                                                    </div>
                                                </div>
                                                <div className="card-detail text-center pt-3 pb-2">
                                                    <h5 className="card-title fs-3 text-capitalize">
                                                        <a href="single-product.html">Vintage With Handle</a>
                                                    </h5>
                                                    <span className="item-price text-primary fs-3 fw-light">$750</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Repeat for each accordion item */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Faqs;
