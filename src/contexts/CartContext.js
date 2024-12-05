
import React, { createContext, useReducer, useState, useEffect } from 'react';

const CartContext = createContext();
const initialState = {
    items: [], // Initialize an array to hold cart items
};

const reducer = (state, { type, payload }) => {
    switch (type) {
        case "ADD_TO_CART":
            const existingItem = state.items.find(item => item.id === payload.id);
            if (existingItem) {
                return {
                    ...state,
                    items: state.items.map(item =>
                        item.id === payload.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                };
            }
            return { ...state, items: [...state.items, { ...payload, quantity: 1 }] };
        case "REMOVE_FROM_CART":
            return { ...state, items: state.items.filter(item => item.id !== payload.id) };
        case "INCREASE_QUANTITY":
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === payload.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                ),
            };
        case "DECREASE_QUANTITY":
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === payload.id
                        ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
                        : item
                ),
            };
        case "CLEAR_CART":
            return { ...state, items: [] };
        default:
            return state; // Return current state for unhandled actions
    }
};

export default function CartContextProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [totalItems, setTotalItems] = useState(0); // Total unique items count
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [searchQuery, setSearchQuery] = useState(''); // Total quantity of items

    // Update totalItems and totalQuantity based on cart changes
    useEffect(() => {
        const itemsCount = state.items.length; // Unique items count
        const quantityCount = state.items.reduce((sum, item) => sum + item.quantity, 0); // Total quantity

        setTotalItems(itemsCount);
        setTotalQuantity(quantityCount);
    }, [state.items]);

    return (
        <CartContext.Provider value={{ state, dispatch, totalItems, totalQuantity , searchQuery, setSearchQuery}}>
            {children}
        </CartContext.Provider>
    );
}

export { CartContext };

