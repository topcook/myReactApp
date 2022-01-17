import React, { useReducer } from 'react';
import { act } from 'react-dom/cjs/react-dom-test-utils.production.min';
import './Product.css';

const currencyOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
}

const getTotal = (cart) => {
    const total = cart.reduce((totalCost, item) =>totalCost +item.price, 0);
    return total.toLocaleString(undefined, currencyOptions);
}

const products = [
    {
        emoji: '🍦',
        name: 'ice cream',
        price: 5
    },
    {
        emoji: '🍩',
        name: 'donuts',
        price: 2.5,
    },
    {
        emoji: '🍉',
        name: 'watermelon',
        price: 4
    }
];

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'add':
            return [...state, action.product];
        case 'remove':
            const productIndex = state.findIndex(item => item.name === action.product.name);
            console.log("state: ", state);
            if (productIndex <0 ) return state;
            const update = [...state];
            console.log("[...state]: ", [...state]);
            update.splice(productIndex, 1);
            return update;
        default:
            return state;
    }
}

const totalReducer = (state, action) => {
    if (action.type === 'add') return state + action.price;
    else return state - action.price;
}

export default function Product() {

    const [cart, setCart] = useReducer(cartReducer, []);

    const add = (product) => {
        setCart({ product, type: 'add' });
    }

    const remove = (product) => {
        setCart({ product, type: 'remove' });
    }

    return (
        <div className="wrapper">
            <div>
                Shopping Cart: {cart.length} total items.
            </div>
            <div>Total: {getTotal(cart)}</div>

            <div>
                {products.map(product => (
                    <div key={product.name}>
                        <div className='product'>
                            <span role="img" aria-label={product.name}>{product.emoji}</span>
                        </div>
                        <button onClick={() => add(product)}>Add</button>
                        <button onClick={() => remove(product)}>Remove</button>
                    </div>
                ))}
            </div>
        </div>
    )
}