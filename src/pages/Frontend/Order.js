import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { message } from 'antd';

export default function Order() {
    const [orders, setOrders] = useState([]);
    
    // Fetch orders from localStorage when the component mounts
    useEffect(() => {
        const isLoggedIn = localStorage.getItem("isLoggedIn");

        if (isLoggedIn !== "true") {
            message.error("You must be logged in to view your orders.");
            setOrders([]); // Clear any existing orders in the state
        } else {
            const storedOrders = JSON.parse(localStorage.getItem('orderDetails')) || [];
            setOrders(storedOrders);
        }
    }, []);

    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="col">  <h1>Your Order Details</h1></div>
                    <div className="col text-end mt-2"> <Link to="/" className="btn btn-primary">Back to Home</Link></div>
                </div>

                {/* Check if there are orders and if the user is logged in */}
                {orders.length > 0 ? (
                    <div>
                        {orders.map((order, index) => (
                            <div key={index} className="order-card mb-4 p-3 border rounded">
                                <h5>Order ID: {order.orderId}</h5>
                                <p>Date: {order.date}</p>
                                <p>Total Quantity: {order.totalQuantity}</p>
                                <p>Total Price: ${order.total.toFixed(2)}</p>

                                <h6>Items:</h6>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {order.items.map((item, index) => (
                                            <tr key={index}>
                                                <td>{item.name}</td>
                                                <td>{item.price}</td>
                                                <td>{item.quantity}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No orders placed yet or you are not logged in.</p>
                )}
            </div>
        </main>
    );
}
