import React, { useReducer } from 'react';
import { act } from 'react-dom/cjs/react-dom-test-utils.production.min';
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

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'add':
            return [...state, action.name];
        case 'remove':
            const update = [...state];
            const index = update.splice(update.indexOf(action.name));
            update.splice(index, 1);
            return update;
        default:
            return state;
    }
}

const totalReducer = (state, action) => {
    if (action.type === 'add') return state + action.price;
    else return state.total - action.price;
}

export default function Product() {

    const [cart, setCart] = useReducer(cartReducer, []);
    const [total, setTotal] = useReducer(totalReducer, 0);

    const add = (product) => {
        const { name, price } = product;
        setCart({ name, type: 'add' });
        setTotal({ price, type: 'add' });
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