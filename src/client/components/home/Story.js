import React from 'react'
import '../../assets/css/Home/Story.css'
// import { categories } from './data'

const Story = () => {
    const categories = [
        {
            name: "Trekking",
            image: 'https://imagetolink.com/ib/3oUKxxjTGu.jpg',
            story: 'testingsstorybooktestingsstorybooktestingsstorybooktestingsstorybooktestingsstorybooktestingsstorybooktestingsstorybooktestingsstorybooktestingsstorybooktestingsstorybooktestingsstorybooktestingsstorybooktestingsstorybooktestingsstorybooktestingsstorybooktestingsstorybooktestingsstorybooktestingsstorybooktestingsstorybooktestingsstorybooktestingsstorybooktestingsstorybook/'
        },
        {
            name: "longride",
            image: 'https://imagetolink.com/ib/8eDXQV31tM.jpg',
            story: 'testingsstorybooktestingsstorybooktestingsstorybooktestingsstorybooktestingsstorybooktestingsstorybooktestingsstorybooktestingsstorybooktestingsstorybooktestingsstorybooktestingsstorybooktestingsstorybooktestingsstorybooktestingsstorybooktestingsstorybooktestingsstorybooktestingsstorybooktestingsstorybooktestingsstorybooktestingsstorybooktestingsstorybooktestingsstorybook/'
        },
        {
            name: "Waterfalls",
            image: 'https://imagetolink.com/ib/MDG5A5233p.jpg',
            story: 'testingsstorybooktestingsstorybooktestingsstorybooktestingsstorybooktestingsstorybooktestingsstorybooktestingsstorybooktestingsstorybooktestingsstorybooktestingsstorybooktestingsstorybooktestingsstorybooktestingsstorybooktestingsstorybooktestingsstorybooktestingsstorybooktestingsstorybooktestingsstorybooktestingsstorybooktestingsstorybooktestingsstorybooktestingsstorybook/'
        }
    ];
  return (
    <div className='story_block' >

        <div className='story_up'>
            <div>
                <h2> Story Book </h2>
            </div>
        </div>

        <div className='story_places_list'>
            {categories.slice(0,6)?.map((accessories, index) => (
                <div className='story_book'>
                    <div className='story_place_card'>
                        <img src={accessories.image} />
                        <p>{accessories.name}</p>
                    </div>
                    <div className='story_content'>
                        <span>{accessories.story}</span>
                    </div>
                    <div>
                        <button className='read_more_btn'> Read More ... </button>
                    </div>
                </div>
            ))}
          </div>
    </div>
  )
}

export default Story