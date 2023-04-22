import React from "react";
import img3 from "../images/1.png"
import img4 from "../images/2.png"
import "./Home.css";
import AppleIcon from '@material-ui/icons/Apple';
import YouTubeIcon from '@material-ui/icons/YouTube';

import TwitterIcon from '@material-ui/icons/Twitter';

const Home = () => {
  return (
    <div className="home">
      <div className="left">
        <p>
          Digital market place for crypto
          <br />
          collectable and non fungable tokens
          <br />
          (NFT's). buy, sell and dicover
          <br />
          exclusive digital asseste
        </p>
        <button>Discover</button>
        <div className="appstore">
        <AppleIcon className="apple"/>
        <div className="desc">
            <h6>Available on the</h6>
            <h2>App store</h2>
        </div>
        </div>

      </div>
      <div className="middle">
      <img src={img3} alt="#" className="img1"/>
      <img src={img4} alt="#" className="img2"/>

      

      </div>
      <div className="right">
      <div className="desc_2">
        <h2>42K+</h2>
        <p>user active</p>
        <h2>8K+</h2>
        <p>Art works</p>
        <h2>2K+</h2>
        <p>Artist</p>
        </div>
      
      <div className="icons">
      <YouTubeIcon className="icon1"/>
      
      <TwitterIcon/>
      </div>

      </div>
    </div>
  );
};

export default Home;
