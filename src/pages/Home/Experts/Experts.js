import React from 'react';
import img1 from '../../../images/Services/w3.jpg'
import img2 from '../../../images/Services/w1.jpg'
import img3 from '../../../images/Services/w6.jpg'
import img4 from '../../../images/Services/w4.jpg'
import Expert from '../Expert/Expert';

const experts = [
    {
        img: img1,
        name:'Sharif Sikder',
        expertize:'Enginer Expert'

    },

    {
        img: img2,
        name:'Saim aedk',
        expertize:'Enginer Expert'

    },

    {
        img: img3,
        name:'Tamim Sikder',
        expertize:'Enginer Expert'

    },

    {
        img: img4,
        name:' Narir Hossan',
        expertize:'Enginer Expert'

    },
]
const Experts = () => {
    return (
        <div className='container mt-5'>
            <h1 className='text-primary mb-4'>Our Exparts</h1>

            <div className="row">
            {
              experts.map(expert => <Expert
              
                key={expert.name}
                expert={expert}
              
              ></Expert>)
            }
            </div>

        </div>
    );
};

export default Experts;