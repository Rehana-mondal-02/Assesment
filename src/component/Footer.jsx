import React from 'react'
import "./Footer.css"


const Footer = () => {
  return (
    <div className='footer'>
    <div className='top'>
    <p className='p1'>Top seller</p>
    <p className='p2'>Open gallery</p>
    </div>
    
    <hr style={{borderTop:"1px dashed white"}}/>
    <div className='bottom'>
    <div className='bot_1'>
    <h2>Black Shadow</h2>
    <p>@Antinobanderas</p>
    </div>
    <div className='bot_2'>
    <h2>269</h2>
    <p>ArtWork for sale</p>
    </div>
    <div className='bot_3'>
    <p>Remaining Time</p>
    <h2>22h:05m:35s</h2>
    </div>
<div className='bot_4'>
    <p>Current Bid</p>
    <h2>18.00</h2>
    </div>
         
    </div>
    

    </div>
  )
}

export default Footer