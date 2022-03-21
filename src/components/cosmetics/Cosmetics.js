
import React from 'react';
import { add } from '../../utilities/calculate';
import Cosmetic from '../Cosmetic/Cosmetic';
import  { useEffect, useState } from 'react';

const Cosmetics = () => {
    const [cosmetics,setCosmetic]=useState([]);
useEffect(()=>{
fetch('data.json')
.then(response=>response.json())
.then(data=>setCosmetic(data))

},[])
   
    // const first=55;
    // const second=66;
    // const total=add(first,second)
    return (
        <div>
            {
                cosmetics.map(cosmetic=> <Cosmetic key={cosmetic.id}
                cosmetic={cosmetic}
                ></Cosmetic>)
            }
            <h1>Welcome to my store</h1>
            {/* <p>Total{total}</p> */}
        </div>
    );
};

export default Cosmetics;
