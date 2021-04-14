import React from 'react'

const Product = (props) => {
    const {product, onAdd} = props;
    return (
        <div className="main">
            <img className="small" src={product.image} alt={product.name}/>
            <h3>{product.name}</h3>
            <div>${product.price}</div>
            <div>
                <button onClick={()=>onAdd(product)}>Add To Cart</button>
            </div>
        </div>
    )
}

export default Product
