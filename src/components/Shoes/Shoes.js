import React from 'react';
import { multiply } from '../../utilities/calculate';

const Shoes = () => {
    const first=13;
    const second=11;
    const result=multiply(first,second)
    return (
        <div>
           <h3>This is shoes</h3> 
           <p>Price{result}</p>
        </div>
    );
};

export default Shoes;