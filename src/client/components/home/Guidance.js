import React from 'react'
import '../../assets/css/Home/Guidance.css'
// import { categories } from './data'

const Guidance = () => {
    const categories = [
        {
            name: "Trekking",
            image: 'https://imagetolink.com/ib/3oUKxxjTGu.jpg'
        },
        {
            name: "longride",
            image: 'https://imagetolink.com/ib/8eDXQV31tM.jpg'
        },
        {
            name: "Waterfalls",
            image: 'https://imagetolink.com/ib/MDG5A5233p.jpg'
        }
    ];
  return (
    <div className='guidance_block' >

        <div className='guidance_up'>
            <div>
                <h2> Guidance </h2>
            </div>
        </div>

        <div className='guidance_places_list'>
            {categories.slice(0,6)?.map((accessories, index) => (
              <div className='guidance_place_card'>
                <img src={accessories.image} />
              </div>
            ))}
          </div>
    </div>
  )
}

export default Guidance