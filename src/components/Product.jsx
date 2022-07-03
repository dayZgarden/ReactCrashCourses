import React from 'react';

const Product = (props) => {
    return (
        <div className='products'>
            <h1>Name: {props.product.name}</h1>
            <p>Price: {props.product.price.toLocaleString('en-US', { style: 'currency', currency: 'USD'})} 
              - {props.product.description}</p>
        </div>
    );
}

export default Product;
