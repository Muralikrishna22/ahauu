import React from 'react'
import '../../assets/css/Home/CoverageArea.css'
import { categories } from './data'

const CoverageArea = () => {
  return (
    <div>
        <div className='coverage_area'>
            <div>
                <h2> Out of Coverage Area </h2>
            </div>
            <div style={{fontSize: '20px', marginLeft: '20px'}}>
                <span>Travelling is a Great Remedy to the BreakUp Blues</span>
            </div>
        </div>

        <div className='coverage_places_list'>
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

export default CoverageArea