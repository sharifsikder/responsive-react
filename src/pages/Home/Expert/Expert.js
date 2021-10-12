import React from 'react';

const Expert = ({expert}) => {

    const{name, img, expertize} = expert
    return (
        <div className="col-lg-4 col-sm-6 col-12 mb-3">
            <img className="w-100 img rounded" src={img} alt="" />
            <h3 className="pt-2">{name}</h3>
            <p>{expertize}</p>
        </div>
    );
};

export default Expert;