
import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { message } from 'antd';
import { Link } from 'react-router-dom';

export default function AllItems() {
    const { state, dispatch } = useContext(CartContext);
    const { items } = state;

    const handleRemoveFromCart = (item) => {
        dispatch({ type: "REMOVE_FROM_CART", payload: item });
    };
    const isLoggedIn = localStorage.getItem("isLoggedIn")
    const handleConfirmOrder = (item) => {

        if (isLoggedIn === "true") {
            const orderDetails = {
                orderId: Math.random().toString(36).slice(2), // Generate a random order ID
                date: new Date().toLocaleString(),
                items: [item], // Store only the confirmed item
                total: parseFloat(item.price.replace('$', '')) * item.quantity, // Calculate total for the item
                totalQuantity: item.quantity, // Only the quantity of this item
            };
    
            const existingOrders = JSON.parse(localStorage.getItem('orderDetails')) || [];
    
            // Add the new order to the existing orders
            existingOrders.push(orderDetails);
    
            // Store the updated orders in local storage
            localStorage.setItem('orderDetails', JSON.stringify(existingOrders));
    
            // Remove only the confirmed item from the cart
            dispatch({ type: "REMOVE_FROM_CART", payload: item });
    
            // Notify the user
            alert(`${item.name} confirmed and saved to local storage!`);
        }else{
            message.error("login please to confirm your order")
        }

        
    };

    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="col">  <h1>Your Cart</h1></div>
                    <div className="col text-end mt-2"> <Link to="/order"  className='btn btn-success'>Ordered Products</Link></div>
                </div>
              
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.length > 0 ? (
                            items.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>
                                        <img src={item.imageUrl} alt={item.name} style={{ width: '100px', height: 'auto' }} />
                                    </td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>
                                        <div className="d-flex flex-column flex-sm-row align-items-start">
                                            <button className='btn btn-danger' onClick={() => handleRemoveFromCart(item)}>Remove</button>
                                            <div className="d-flex align-items-center mt-2 mt-sm-0">
                                                <button className='btn btn-secondary' onClick={() => dispatch({ type: "INCREASE_QUANTITY", payload: item })}>+</button>
                                                <span className='mx-2'>{item.quantity}</span>
                                                <button className='btn btn-secondary' onClick={() => dispatch({ type: "DECREASE_QUANTITY", payload: item })}>-</button>
                                            </div>
                                            <button className='btn btn-primary mt-2 mt-sm-0 ms-sm-2' onClick={() => handleConfirmOrder(item)}>Confirm Order</button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5">Your cart is empty.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </main>
    );
}
