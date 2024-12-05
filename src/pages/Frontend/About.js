import React, { useContext } from 'react';
import img12 from "../../assests/headset.jpg";
import img13 from '../../assests/airpods.jpg';
import { message } from 'antd';
import { CartContext } from '../../contexts/CartContext'; // Adjust the import path as necessary

const products = [
    {
        id: 1,
        name: 'Wireless Headset',
        price: '$10.00',
        category: 'Confirm',
        imageUrl: img12,
    },
    {
        id: 2,
        name: 'Air Buds',
        price: '$20.00',
        category: 'Confirm',
        imageUrl: img13,
    },
    {
        id: 3,
        name: 'Head Phones',
        price: '$30.00',
        category: 'Confirm',
        imageUrl: img12,
    },
    {
        id: 4,
        name: 'Air Dots',
        price: '$40.00',
        category: 'Confirm',
        imageUrl: img13,
    },
];

export default function Products() {
    const { state, dispatch } = useContext(CartContext);

    const handleAddToCart = (product) => {
        const existingProduct = state.items.find(item => item.id === product.id);
        
        if (existingProduct) {
            dispatch({ type: "INCREASE_QUANTITY", payload: product }); // Increase quantity
            message.success(`Increased quantity of ${product.name}!`); // Show success message
        } else {
            dispatch({ type: "ADD_TO_CART", payload: { ...product, quantity: 1 } }); // Add product with initial quantity
            message.success(`${product.name} added to cart!`); // Show success message
        }
    };

    const handleIncreaseQuantity = (product) => {
        dispatch({ type: "INCREASE_QUANTITY", payload: product });
        message.success(`Increased quantity of ${product.name}!`);
    };

    const handleDecreaseQuantity = (product) => {
        const existingProduct = state.items.find(item => item.id === product.id);
        
        if (existingProduct.quantity > 1) {
            dispatch({ type: "DECREASE_QUANTITY", payload: product });
            message.success(`Decreased quantity of ${product.name}!`);
        } else {
            dispatch({ type: "REMOVE_FROM_CART", payload: product });
            message.success(`${product.name} removed from cart!`);
        }
    };

    return (
        <main>
            <div className="container">
                <div className="row mt-3">
                    <div className="col">
                        <div className='w-100'>
                            <h1>Product Listing</h1>
                            <table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Category</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map(product => (
                                        <tr key={product.id}>
                                            <td>{product.id}</td>
                                            <td>
                                                <img src={product.imageUrl} alt={product.name} style={{ width: '100px', height: 'auto' }} />
                                            </td>
                                            <td>{product.name}</td>
                                            <td>{product.price}</td>
                                            <td>
                                                <button
                                                    className='btn btn-primary'
                                                    onClick={() => handleAddToCart(product)} // Add to cart on click
                                                >
                                                    Add to Cart
                                                </button>
                                            </td>
                                            <td>
                                                <button
                                                    className='btn btn-success'
                                                    onClick={() => handleIncreaseQuantity(product)}
                                                >
                                                    +
                                                </button>
                                                <button
                                                    className='btn btn-danger'
                                                    onClick={() => handleDecreaseQuantity(product)}
                                                >
                                                    -
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
