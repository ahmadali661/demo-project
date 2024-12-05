
import React, { useContext } from 'react';
import img12 from "../../assests/headset.jpg";
import img13 from '../../assests/airpods.jpg';
import img14 from '../../assests/smart watch.jpg';
import img15 from '../../assests/power bank.jpg';
import img16 from '../../assests/new air buds.jpg';
import img17 from '../../assests/sony head.jpg';
import img18 from '../../assests/c type cable.jpg';
import { message } from 'antd';
import { CartContext } from '../../contexts/CartContext';

const products = [
    { id: 1, name: '125_W Wireless Headset', price: '$10.00', category: 'Add to cart', imageUrl: img12 },
    { id: 2, name: 'Air Buds i12', price: '$20.00', category: 'Add to cart', imageUrl: img13 },
    { id: 3, name: 'Smart Watch A53S_21', price: '$30.00', category: 'Add to cart', imageUrl: img14 },
    { id: 4, name: 'Mi Power Bank plus ultra fast', price: '$40.00', category: 'Add to cart', imageUrl: img15 },
    { id: 5, name: 'Mi twitter buds 401S', price: '$40.00', category: 'Add to cart', imageUrl: img16 },
    { id: 6, name: 'Wired Head Phones', price: '$40.00', category: 'Add to cart', imageUrl: img17 },
    { id: 7, name: 'C Type Cable', price: '$40.00', category: 'Add to cart', imageUrl: img18 },
];

export default function Products() {
    const { state, dispatch,  searchQuery } = useContext(CartContext);
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    const handleAddToCart = (product) => {
        const existingProduct = state.items.find(item => item.id === product.id);

        if (existingProduct) {
            message.warning(`${product.name} is already in the cart!`);
        } else {
            if (isLoggedIn === "true") {
                dispatch({ type: "ADD_TO_CART", payload: product });
                message.success(`${product.name} added to cart!`);
            } else {
                message.error("Please log in to add items to the cart");
            }
        }
    };

    // Filter products based on search query
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <main>
            <div className="container">
                <div className="row mt-3">
                    <div className="col">
                        <h1>Product Listing</h1>
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Category</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredProducts.length > 0 ? (
                                    filteredProducts.map(product => (
                                        <tr key={product.id}>
                                            <td>{product.id}</td>
                                            <td>
                                                <img src={product.imageUrl} alt={product.name} style={{ width: '100px', height: '85px' }} />
                                            </td>
                                            <td>{product.name}</td>
                                            <td>{product.price}</td>
                                            <td>
                                                <button className='btn btn-primary' onClick={() => handleAddToCart(product)}>
                                                    {product.category}
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="5">No products found.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    );
}

