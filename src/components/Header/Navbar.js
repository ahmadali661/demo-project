import { message } from 'antd';
import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';
import { CartContext } from '../../contexts/CartContext';

export default function Navbar() {

    const { totalItems, setSearchQuery } = useContext(CartContext)
    const { isAuth, dispatch } = useAuthContext();
    const admin = JSON.parse(localStorage.getItem("user"));

    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear the user from local storage
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("user");

        // Dispatch action to update context state
        dispatch({ type: "SET_LOGGED_OUT" });

        // Show success message
        message.success("Logged out successfully");

        // Navigate to the home page or login page after logging out
        navigate("/");
    };

    return (
        <nav className="navbar navbar-expand-lg bak">
            <div className="container">

                <Link to="/" className="navbar-brand text-secondary" >E-Commerce</Link>
                <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {/* <li className="nav-item">
                            <Link to='/' className="nav-link text-secondary">Home</Link>
                        </li> */}
                        <li className="nav-item">
                            <Link to="products" className="nav-link text-secondary">All Products</Link>
                        </li>
                        {admin && admin.email === "admin@gmail.com" ? <li className="nav-item">
                            <Link to="products" className="nav-link text-secondary">Admin</Link>
                        </li> : null}


                    </ul>
                    <form className="d-flex" role="search">
                        <input
                            className="form-control me-2 rounded-0"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            onChange={(e) => setSearchQuery(e.target.value)} // Update search query
                        />
                        <Link to="allItems" className="nav-link m-auto" ><i className="fa-solid fa-cart-shopping fs-5 text-white"></i></Link> &nbsp;&nbsp;
                        <p className='m-auto text-white'>{totalItems}</p>
                        {!isAuth ? (
                            <Link to="/auth/login" className="btn btn-secondary ms-2 rounded-0">Login</Link>
                        ) : (
                            <Link to="#" className="btn btn-danger ms-2 rounded-0" onClick={handleLogout}>Logout</Link>
                        )}
                    </form>
                </div>
            </div>
        </nav>
    )
}
