import { useEffect, useState } from 'react';
import React from 'react';
import { urlImage } from '../../../config';
import productService from '../../../services/ProductService';

const ProductHot = () => {

  const [products, setProducts] = useState([]);
  const limit = 3; 
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await productService.productHot(limit);

        setProducts(result.products);

      } catch (error) {
        console.error("Error fetching new products:", error);
      }
    };

    fetchProducts();
  }, [limit]);

  return (
    <section id="products" className="product-store position-relative">
      <div className="container display-header d-flex flex-wrap justify-content-between pb-4">
        <h3>sản phảm nổi bật:</h3>
        <div className='row'>
          {/* Repeat this structure for each product card */}
          {products.length > 0 ? (
            products.map((product) => (
           
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

export default ProductHot;
