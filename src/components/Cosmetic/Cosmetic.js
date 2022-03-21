import React, { useEffect, useState } from 'react';
import { addToDb,removeFromDb } from '../../utilities/fakedb';
import './Cosmetic.css'
const Cosmetic = (props) => {
const addToCart=(_id)=>{
addToDb(_id);

}
const removeFromCart=_id=>{
    removeFromDb(_id)
    }

    const {name,price,_id}=props.cosmetic;
    return (
        <div className='product'>
            <h3>Name:{name}</h3>
        <p>Price:{price}</p>
        <p>ID:{_id}</p>
        <button onClick={() =>addToCart(_id)}>Add to cart</button>
       <button onClick={() => removeFromCart(_id)}>Remove 
       </button>
        </div>
    );
};

export default Cosmetic;