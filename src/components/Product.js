import React, { useState, useEffect } from 'react';

const Product = () => {
    const [products, getProducts] = useState([]);
    useEffect(() => {
        //calling api
        fetch('https://fakestoreapi.com/products')
        .then(data => data.json())
        .then(result => getProducts(result))
    }, []);

  return (
    <div>
        {JSON.stringify(products)}
    </div>
  )
}

export default Product