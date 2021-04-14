import React from 'react'
import Product from './Product';

const Main = (props) => {
    const {products, onAdd}= props;
    return (
       <main className="block col-2">
           <h2>Products</h2>
           <div className="row main-row">
           {products.map((product)=>(
               <Product key={products.id} onAdd={onAdd} product={product}/>
           ))}
           </div>
       </main>
    )
}

export default Main
