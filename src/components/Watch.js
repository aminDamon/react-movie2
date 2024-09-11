import React from 'react'

import Header from './Header';
import VideoJS from './MyPlayer';
import { allSeriesMovie, lists } from './list';
import Info from './Info';

function Watch(props) {
    let myMovie = allSeriesMovie.find((list) => {
        return props.main === '' ? list.name.toLocaleLowerCase().includes(window.location.pathname.slice(1)) : list.name === props.main
    })
    


    const playerRef = React.useRef(null);

  const videoJsOptions = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    poster: myMovie.cover,
    sources: [{
      src: myMovie.src,
      
      type: myMovie.type
    }]
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

  };


  return (
    <div>
      <Header backHomeHandler={props.backHomeHandler}/>
      <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
      <Info selectMovie={myMovie}/>
    </div>
  )
}

export default Watch

