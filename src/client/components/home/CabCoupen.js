import React from "react";
import '../../assets/css/Home/CabCoupen.css'
import { cabCoupen } from './data'

const CabCoupen = () => {
    return (
        
            <div className='cab_coupen'>
                {cabCoupen.map((coupen) => (
                <p>--Flat {coupen.value}% Off on {coupen.name} Ride</p>
                ))}
            </div>
    )
}

export default CabCoupen;