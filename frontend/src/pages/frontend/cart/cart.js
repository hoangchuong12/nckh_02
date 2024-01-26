import React, { useState, useEffect } from 'react';
import { useUserContext } from '../../../layouts/LayoutSite';
import OrderService from '../../../services/OrderService';

function Cart() {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useUserContext();

  useEffect(() => {
    const getCart = async () => {
      setLoading(true);
      try {
        const response = await OrderService.getCart(user.id);
        setCart(response.cart);
        setError(null);
      } catch (err) {
        setError(err.message || 'Could not fetch cart.');
        setCart(null);
      }
      setLoading(false);
    };

    if (user && user.id) {
      getCart();
    }
  }, [user]);

  const calculateTotal = (items) => {
    return items.reduce((acc, item) => acc + (item.price * item.quantity), 0).toFixed(2);
  };

  if (loading) return <div className="text-center"><div className="spinner-border text-primary" role="status"><span className="visually-hidden">Loading...</span></div></div>;
  if (error) return <div className="alert alert-danger" role="alert">{error}</div>;

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12">
          <h2 className="text-center mb-4">Shopping Cart</h2>
          <div className="card shadow">
            <div className="card-body">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Item</th>
                      <th scope="col">Price</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart && cart.orderdetail ? (
                      cart.orderdetail.map((item, index) => (
                        <tr key={index}>
                          <td>{item.product.name}</td>
                          <td>${item.price.toFixed(2)}</td>
                          <td>{item.quantity}</td>
                          <td>${(item.product.price * item.quantity).toFixed(2)}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="4" className="text-center">Your cart is empty.</td>
                      </tr>
                    )}
                  </tbody>
                  {cart && cart.orderdetail && (
                    <tfoot>
                      <tr>
                        <th colSpan="3" className="text-right">Grand Total:</th>
                        <th>${calculateTotal(cart.orderdetail)}</th>
                      </tr>
                    </tfoot>
                  )}
                </table>
              </div>
              {cart && cart.orderdetail && cart.orderdetail.length > 0 && (
                <div className="text-center">
                  <button className="btn btn-primary btn-lg">Proceed to Checkout</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
