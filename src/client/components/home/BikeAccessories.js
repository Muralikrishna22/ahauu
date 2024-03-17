import React from 'react'
import '../../assets/css/Home/BikeAccessories.css'
import { bikeAccessories } from './data'

const BikeAccessories = () => {
  return (
    <div className='bike_accessories_block'>
      <h2>Bike Accessories</h2>
      <div className='bike_accessories'>
        <div className='bike_accessories_top'>
          <div className='bike_accessories_left'>
            <img src='https://imagetolink.com/ib/I8iH0yxf5T.jpg' />
          </div>
          <div className='bike_accessories_right'>
            {bikeAccessories?.slice(0, 6)?.map((accessories, index) => (
              <div className='accessory_card'>
                <img src={accessories.image} />
                <p>{accessories.name}</p>
              </div>
            ))}
          </div>
        </div>
        {/* <div className='bike_accessories_bottom'>
          {bikeAccessories?.slice(6)?.map((accessories, index) => (
            <div className='accessory_card'>
              <img src={accessories.image} />
              <p>{accessories.name}</p>
            </div>
          ))}
        </div> */}
      </div>

    </div>
  )
}

export default BikeAccessories