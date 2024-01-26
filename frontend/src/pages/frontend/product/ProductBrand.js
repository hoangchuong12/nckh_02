import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import productService from '../../../services/ProductService';
import { urlImage } from '../../../config';

function ProductBrand() {
  const { brand_id } = useParams()
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProductsByBrand = async () => {
      try {
        const response = await productService.productbrand(brand_id);
        console.log(response);
        console.log(brand_id);
        setProducts(response.products);
      } catch (error) {
        if (error.response && error.response.status === 404) {
          console.log('No products found for this brand.');
          setProducts([]); // Set products to an empty array or handle as needed
        } else {
          console.error('Error fetching products:', error);
        }
      }
    };
  
    fetchProductsByBrand();
  }, [brand_id]);
  

  return (
    <>
      <section id="products" className="product-store position-relative">
        <div className="container display-header d-flex flex-wrap justify-content-between pb-4">
          <h3>Products by Brand:</h3>
          <div className='row'>
            {products.length > 0 ? (
              products.map((product) => (
                product.status === 1 && (
                  <div key={product.id} className="col-md-4 col-lg-3">
                    <div className="product-card position-relative">
                      <div className="image-holder zoom-effect">
                        <img src={urlImage + "product/" + product.image}
                          alt={product.image} className="img-fluid zoom-in" />
                        <div className="cart-concern position-absolute">
                          <div className="cart-button">
                            <Link className="btn" to={`/productshow/${product.id}`}>Add to Cart</Link>
                          </div>
                        </div>
                      </div>
                      <div className="card-detail text-center pt-3 pb-2">
                        <h5 className="card-title fs-3 text-capitalize">
                          {product.name}
                        </h5>
                        <span className="item-price text-primary fs-3 fw-light">{product.price}</span>
                      </div>
                    </div>
                  </div>
                )
              ))
            ) : (
              <p>No products found for this brand.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductBrand;
