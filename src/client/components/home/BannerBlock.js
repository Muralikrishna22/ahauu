import React from 'react'
import '../../assets/css/Home/BannerBlock.css'

const BannerBlock = () => {
    return (
        <div className='banner_block'>
             <img src='https://imagetolink.com/ib/SWDvhAAh2k.png' />
            <div className='left_block'>
                <p>What's On Your Travel Bucket List</p>
                <h1>Explore</h1>
            </div>
            {/* <div className='right_block'>
                <img src='https://imagetolink.com/ib/hfeybrSRn6.jpg' />
            </div> */}
        </div>
    )
}

export default BannerBlock