// OrderHistory.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch user orders from the backend
    axios.get('/api/orders/history')
      .then(response => {
        setOrders(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching order history!", error);
      });
  }, []);

  return (
    <div>
      <h2>Order History</h2>
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            <p>Order ID: {order.id}</p>
            <p>Date: {order.date}</p>
            <p>Total Amount: {order.totalAmount}</p>
            {/* Add more order details here */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderHistory;
