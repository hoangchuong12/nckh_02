import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import productService from '../../../services/ProductService';
import { urlImage } from '../../../config';

function ProductCategory() {
  const { category_id } = useParams(); // Sử dụng category_id từ URL
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await productService.productcategory(category_id);
        console.log(response); // In ra để kiểm tra
        if (response && response.status && Array.isArray(response.products)) {
          setProducts(response.products); // Sử dụng response.products nếu đúng định dạng
        } else {
          console.log('Invalid response format', response);
          setProducts([]);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [category_id]);

  return (
    <>
      <section id="products" className="product-store position-relative">
        <div className="container display-header d-flex flex-wrap justify-content-between pb-4">
          <h3>Tất cả sản phẩm:</h3>
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
              <p>No products found.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductCategory;
