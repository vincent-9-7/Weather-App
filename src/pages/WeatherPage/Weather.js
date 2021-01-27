import './Weather.css';
import React from "react";
// import{ AiOutlineSearch } from 'react-icons/ai';

// import API from "../../api/api";

// console.log(<API />)
  

function WeatherPage() {
    
    return(
        
      <div className="weatherPage">
        
        <div className="weatherPage__background" />
        {/* <div className="weatherPage__right-backgound" /> */}

        <div className="weatherPage__content">
          <div className="weatherPage__search">
            <form>
              <input className="weatherPage__search--input" type="text" placeholder="Search" />
            </form>
          </div>          
        </div>

      </div>
    )
  }
  export default WeatherPage;