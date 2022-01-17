import React, { Component } from 'react';
import './Product.css';

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

export default class Product extends Component {
    state = {
        cart: [],
        total: 0
    }

    currencyOptions = {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }

    getTotal = () => (this.state.total.toLocaleString(undefined, this.currencyOptions));

    add = (product) => {
        this.setState(state => ({
            cart: [...state.cart, product.name],
            total: state.total + product.price
        }))

        setTimeout(() => {
            console.log(this.state.cart);
        }, 100)
    }

    remove = (product) => {
        this.setState(state => {
            const cart = [...state.cart];
            cart.splice(cart.indexOf(product));
            const total = state.total - product.price;
            return ({
                cart,
                total: state.total - product.price
            });
        });
    }

    render() {
        return (
            <div className="wrapper">
                <div>
                    Shopping Cart: {this.state.cart.length} total items.
                </div>
                <div>Total: {this.getTotal()}</div>
                <div>
                    {
                        products.map(product => (
                            <div>
                                <div className="product">
                                    <span role="img" aria-label={product.name}>{product.emoji}</span></div>
                                <button onClick={() => this.add(product)}>Add</button>
                                <button onClick={() => this.remove(product)}>Remove</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}