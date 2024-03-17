import React from 'react'
import '../../assets/css/Home/CoupenCards.css'

const CoupenCards = () => {
    return (
        <div className='coupens_list'>
            <div className='coupen_card style_1'>
                <div>
                    <p>Enjoy 30% off </p>
                    <button> SUPER 30</button>
                </div>
                <span>On min order value of 1500/- </span>
            </div>
            <div className='coupen_card style_2'>
                <div>
                    <p>Enjoy 25% off </p>
                    <button> SUPER 25</button>
                </div>
                <span>On min order value of 1000/- </span>
            </div>
            <div className='coupen_card style_1'>
                <div>
                    <p>Enjoy 30% off </p>
                    <button> SUPER 20</button>
                </div>
                <span>On min order value of 500/- </span>
            </div>
            <div className='coupen_card style_2'>
                <div>
                    <p>Enjoy 25% off </p>
                    <button> SUPER 25</button>
                </div>
                <span>On min order value of 1000/- </span>
            </div>
        </div>
    )
}

export default CoupenCards