import React from 'react'
import '../../assets/css/Home/Blogs.css'
// import { categories } from './data'

const Blogs = () => {
    const categories = [
        {
            name: "Trekking",
            image: 'https://imagetolink.com/ib/3oUKxxjTGu.jpg'
        },
        {
            name: "longride",
            image: 'https://imagetolink.com/ib/8eDXQV31tM.jpg'
        },
        // {
        //     name: "Waterfalls",
        //     image: 'https://imagetolink.com/ib/MDG5A5233p.jpg'
        // }
    ];
  return (
    <div className='blog_block' >

        <div className='blog_up'>
            <div>
                <h2> Blogs </h2>
            </div>
        </div> 

        <div className='blog_places_list'>
            {categories.slice(0,6)?.map((accessories, index) => (
              <div className='blog_place_card'>
                <img src={accessories.image} />
              </div>
            ))}
          </div>
    </div>
  )
}

export default Blogs