import React from 'react';
import ReactPlayer from 'react-player';

 function Player () {


    return (
      <div>
     <ReactPlayer url = {process.env.PUBLIC_URL + "/movie/PortfolioRotate.mp4" } playing loop />
      </div>
    )
}

export default Player;
