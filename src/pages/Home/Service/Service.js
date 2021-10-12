import React from 'react';
import './service.css'

const Service = ({service}) => {

    const{name, img, price, discreption} = service;

    return (
        <div className="service">
            
            <img className='img' src={img} alt="" />
            <h3 className="p-3"> Name : {name}</h3>
            <p>Price : {price}</p>
            <p>{discreption}</p>
        </div>
    );
};

export default Service;