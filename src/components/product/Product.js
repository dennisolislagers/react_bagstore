import React from 'react';

function Product ({label, image, name, price}) {
    return(
        <article>
             <span className="label-name">{label}</span>
               <img src={image} alt=""/>
               <p className="name-name">{name}</p>
               <h4 className="price-name">{price}</h4>
        </article>
    );
}

export default Product;