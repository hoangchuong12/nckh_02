import React, { useEffect, useState } from 'react';
import productService from '../../../services/ProductService';
import { urlImage } from '../../../config';

const ProductNew = () => {
  const [productsnew, setproductsnew] = useState([]);
  const limit = 3; 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await productService.productnew(limit);
        setproductsnew(result.products);

      } catch (error) {
        console.error("Error fetching new products:", error);
      }
    };

    fetchProducts();
  }, [limit]);
  return (
    <section id="products" className="product-store position-relative">
      <div className="container display-header d-flex flex-wrap justify-content-between pb-4">
        <h3>sản phảm mới:</h3>
        <div className='row'>
          {/* Repeat this structure for each product card */}
          {productsnew.length > 0 ? (
            productsnew.map((product) => (
           
                <div key={product.id} className="col-md-4 col-lg-3">
                  <div className="product-card position-relative">
                    <div className="image-holder zoom-effect">
                      <img src={urlImage + "product/" + product.image}
                        alt={product.image} className="img-fluid zoom-in" />
                      <div className="cart-concern position-absolute">
                        <div className="cart-button">
                          <a href="#a" className="btn">Add to Cart</a>
                        </div>
                      </div>
                    </div>
                    <div className="card-detail text-center pt-3 pb-2">
                      <h5 className="card-title fs-3 text-capitalize">
                        <a href="single-product.html">{product.name}</a>
                      </h5>
                      <span className="item-price text-primary fs-3 fw-light">{product.price}</span>
                    </div>
                  </div>
                </div>
              )
            )
          ) : (
            <p>No products found.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductNew;
