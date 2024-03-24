import React from 'react'
import '../../assets/css/Home/BreakUp.css'
import { categories } from './data'

const BreakUp = () => {
  return (
    <div className='breakup_block' >

        <div className='break_up'>
            <div>
                <h2> BreakUp Recover Back with us </h2>
            </div>
            <div style={{fontSize: '20px', marginLeft: '20px'}}>
                <span>Travelling is a Great Remedy to the BreakUp Blues</span>
            </div>
        </div>

        <div className='breakup_places_list'>
            {categories.slice(0,6)?.map((accessories, index) => (
              <div className='place_card'>
                <img src={accessories.image} />
                <p>{accessories.name}</p>
              </div>
            ))}
          </div>
    </div>
  )
}

export default BreakUp