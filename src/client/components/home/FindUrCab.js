import React from 'react'
import '../../assets/css/Home/FindUrCab.css'

const FindUrCab = () => {
    return (
        <div className='cab_block'>
            <div className='cab'>
                <div className='cab_top'>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div className='heading_block'>
                            <span>Spartan's Let's Go...</span>
                        </div>
                        <div style={{ fontSize: '34px', fontWeight: 'bold', marginTop: '50px', marginLeft: '10px' }} >
                            <span> The Biggest Funnn in Trip's always... </span>
                            <br />
                            <span>When you Travelll with...</span>
                        </div>

                        <div style={{ fontWeight: 'bold', fontSize: '70px', marginBottom: '50px', marginLeft: '10px' }}>
                            <span>Chaddi Buddie's</span>
                        </div>
                        <div className='cab_button'>
                            <span>Find Ur Cab</span>
                        </div>
                    </div>
                    <div className='cab_left'>
                        <img src='https://imagetolink.com/ib/I8iH0yxf5T.jpg' />
                    </div>

                </div>
                {/* <div className='cab_bottom'>
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

export default FindUrCab;