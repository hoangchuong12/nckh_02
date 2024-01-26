import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import productService from '../../../services/ProductService';
import { urlImage } from '../../../config';
import { useUserContext } from '../../../layouts/LayoutSite';
import OrderService from './../../../services/OrderService';

function ProductShow() {
  const { id } = useParams();
  const { user } = useUserContext();
  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1); // State for quantity
  const [address, setAddress] = useState(''); // State for address

  useEffect(() => {
    const fetchProduct = async () => {
      try {
// console.log(id);
        const result = await productService.show(id);
        setProduct(result);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = async () => {
    console.log('User ID:', user.id, 'Product ID:', id, 'Qty:', qty, 'Address:', address);
    try{
      const result = await OrderService.add({
        "user": user,
        "product_id": id,
        "qty": qty,
        "address": address,
      });
      if(result.status){
        console.log("đã thêm")
      }
    }catch(er){
      console.error(er);
    }
    
    
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-lg-4">
          <img src={urlImage + 'product/' + product.product.image} alt={product.product.name} className="img-fluid rounded" />
        </div>
        <div className="col-lg-6">
          <h2 className="mb-3">{product.product.name}</h2>

          <p className="fw-bold fs-4">Giá: {product.product.price}</p>

          <div className="mb-3">
            <label htmlFor="quantity" className="form-label">
              Số lượng:
            </label>
            <input
              type="number"
              id="quantity"
              className="form-control"
              value={qty}
              onChange={(e) => setQty(e.target.value)}
              min="1"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              Địa chỉ:
            </label>
            <input
              type="text"
              id="address"
              className="form-control"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <button className="btn btn-primary" onClick={handleAddToCart}>
            Thêm vào giỏ hàng
          </button>

          <p className="fw-bold fs-4">Miêu tả:</p>
          <p className="text-muted">{product.product.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductShow;



