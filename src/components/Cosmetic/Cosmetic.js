import React, { useEffect, useState } from 'react';

const Cosmetic = (props) => {

    const {name,price,_id}=props.cosmetic;
    return (
        <div>
            <h3>Name:{name}</h3>
        <p>Price:{price}</p>
        <p>ID:{_id}</p>
        </div>
    );
};

export default Cosmetic;