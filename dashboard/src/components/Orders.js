import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios.get("http://localhost:3002/allOrders", {
      headers: { Authorization: `Bearer ${token}` }
    }).then((res) => {
      setOrders(res.data);
    });
  }, []);

  return (
    <div className="orders">
      {orders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>

          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
      ) : (
        <div className="orders-table">
          <table>
            <thead>
              <tr>
                <th>Instrument</th>
                <th>Qty.</th>
                <th>Price</th>
                <th>Order Type</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index}>
                  <td>{order.name}</td>
                  <td>{order.qty}</td>
                  <td>₹{order.price}</td>
                  <td 
                    className={order.mode === "BUY" ? "buy" : "sell"} 
                    style={{ color: "#fff", backgroundColor: order.mode === "BUY" ? "#4184f3" : "#ff5722", padding: "5px 10px", borderRadius: "2px" }}
                  >
                    {order.mode}
                  </td>
                  <td className="success">Success</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Orders;