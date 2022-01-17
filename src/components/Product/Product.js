import React, { useReducer } from 'react';
import './Product.css';

const currencyOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
}

const getTotal = (total) => (total.toLocaleString(undefined, currencyOptions));

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

const cartReducer = (state, product) => ([...state, product]);

const totalReducer = (state, price) => (state + price);

export default function Product() {

    const [cart, setCart] = useReducer(cartReducer, []);
    const [total, setTotal] = useReducer(totalReducer, 0);

    const add = (product) => {
        setCart(product.name);
        setTotal(product.price);
    }


    return (
        <div className="wrapper">
            <div>
                Shopping Cart: {cart.length} total items.
            </div>
            <div>Total: {getTotal(total)}</div>

            <div>
                {products.map(product => (
                    <div key={product.name}>
                        <div className='product'>
                            <span role="img" aria-label={product.name}>{product.emoji}</span>
                        </div>
                        <button onClick={() => add(product)}>Add</button>
                        <button>Remove</button>
                    </div>
                ))}
            </div>
        </div>
    )
}