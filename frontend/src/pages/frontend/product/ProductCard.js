import React, { useState, useEffect } from 'react';
import { urlImage } from '../../../config';
import productService from '../../../services/ProductService';
import { Link } from 'react-router-dom';
import '../css/pagination.css'

const ProductCard = () => {

  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(4);
  const [totalNumberOfProducts, setTotalNumberOfProducts] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await productService.indexpagination(currentPage, productsPerPage);

        // Assuming the response has a data property that is an object containing a products array
        setProducts(result.products);
        setTotalNumberOfProducts(result.total);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [currentPage, productsPerPage]);

  const totalPages = Math.ceil(totalNumberOfProducts / productsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <section id="products" className="product-store position-relative">
      <div className="container display-header d-flex flex-wrap justify-content-between pb-4">
        <h3>Tất cả sản phẩm:</h3>
        <div className='row'>
          {/* Repeat this structure for each product card */}
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

                          <Link className="btn" to={`/productshow/${product.id}`}>Add to Cart{`${product.id}`}</Link>
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
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      </div>
      <div className="pagination-container d-flex justify-content-center my-4">
  <nav aria-label="Page navigation example">
    <ul className="pagination">
      {/* Nút Trước */}
      <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
        <button className="page-link" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} aria-label="Previous">
          &laquo;
        </button>
      </li>

      {/* Các nút số trang */}
      {[...Array(totalPages).keys()].map((page) => (
        <li key={page} className={`page-item ${currentPage === page + 1 ? 'active' : ''}`}>
          <button className="page-link" onClick={() => handlePageChange(page + 1)}>
            {page + 1}
          </button>
        </li>
      ))}

      {/* Nút Sau */}
      <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
        <button className="page-link" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} aria-label="Next">
          &raquo;
        </button>
      </li>
    </ul>
  </nav>
</div>


    </section>
  );
};

export default ProductCard;
