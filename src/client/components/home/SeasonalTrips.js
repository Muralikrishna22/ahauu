import React from 'react'
import '../../assets/css/Home/SeasonalTrips.css'
import { categories } from './data'

const SeasonalTrips = () => {
  return (
    <div>
        <h2> Seasonal Trips </h2>

        <div className='seasons_menu'>
            <div>
                <h2> Rainy season is famous for </h2>
            </div>
            <div>
                <button className='tab active'> North </button>
                <button className='tab'> South </button>
                <button className='tab'> East </button>
                <button className='tab'> West </button>
            </div>
        </div>

        <div className='seasonsal_palces_list'>
            {categories?.map((accessories, index) => (
              <div className='place_card'>
                <img src={accessories.image} />
                <p>{accessories.name}</p>
              </div>
            ))}
          </div>
    </div>
  )
}

export default SeasonalTrips