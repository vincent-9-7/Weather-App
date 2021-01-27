import './Home.css';
import React from "react";
// import ReactPlayer from 'react-player'
// import Video from 'react-responsive-video'
import { IoRainyOutline } from 'react-icons/io5';

// import MyForm from '../../components/SearchForm/Search'

import video from "../../img/2.mp4"
// import video from "../../img/1.mp4"
// import video from "../../img/3.mp4"
// import video from "../../img/4.mp4"
// import video from "../../img/5.mp4"


class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = ""
    }

    render() {
        return(
          <div className="mainPage">
            <div className="mainPage__background" />
            
            <div className="mainPage__player-wrapper">
              <video autoPlay muted loop id="mainPage__myVideo">
                <source src={video} type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </div>
            
            <div id="mainPage__webName">
              <h1>
                Find Your Weather.
              </h1>   
              <IoRainyOutline id="mainPage__webIcon" />
            </div>

            <form>
              <input
                className="mainPage__search"
                type="text" 
                name="search"
                placeholder="enter your city"
              />
              {/* <AiOutlineSearch id="mainPage__searchIcon" /> */}
            </form>
          </div>
          
        )
    }
}

export default Home

// {/* <ReactPlayer
//                 className='player' 
//                 url={video} 
//                 playing   // 自动播放
//                 loop    // 循环播放
//                 muted // mute必须添加，否则谷歌浏览器不让自动播放
//                 width="100%"
//                 height="100%"
//                 style={{objectFit:'fill'}}
//                 /> */}