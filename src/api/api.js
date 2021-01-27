import './api.css';
import React from "react";

/* eslint-disable camelcase */
/* eslint-disable camelcase */

// import { IoMdSunny } from "react-icons/io";
import { WiDegrees } from "react-icons/wi";
// import { doc } from 'prettier';

// let getLon;
// let getLat;
    
// async function getCoord(getDay,secondApi,city) {
    
//     const currentCity = city;

//     const apiUrl = `https://api.openweathermap.org/data/2.5/`
//     +
//     `weather?q=${currentCity}&appid=9bf729522efcbfd825ccfbef7c8f2410&units=metric`
//     console.log(apiUrl);
//     const response = await fetch(apiUrl);
//     // console.log(response);
//     const data = await response.json();
//     // console.log(data);
//     const {lon,lat} = data.coord // 解构
//     // console.log(lon,lat)
//     getLon = lon;
//     getLat = lat;

//     // // //读取数据 更改Html内容
//     // document.getElementById('currentCity').textContent = currentCity;
//     // document.getElementById('lon').textContent = getLon;
//     // document.getElementById('lat').textContent = getLat;

//     secondApi();// 回调函数，调用完getCoord再调用getDetail（）
//     getDay();
// }

// async function getDetail(){
//     const apiUrlSecond = `https://api.openweathermap.org/data/2.5/`
//     +
//     `onecall?lat=${getLat}&lon=${getLon}&exclude=minutely,hourly,alerts`
//     +
//     `&appid=9bf729522efcbfd825ccfbef7c8f2410&units=metric`
//     console.log(apiUrlSecond)

//     const response = await fetch(apiUrlSecond);
//     const data = await response.json();
//     // const {temp, wind_peed, pressure, humidity, feels_like, uvi} = data.current // 解构
//     // const {description, main, icon} = data.current.weather[0]
    
//     // console.log(description)
//     for(let i=0; i<6; i+=1) {
//         const {max,min} = data.daily[i].temp;
//         const highTemp = max.toString().slice(0,2);
//         const lowTemp = min.toString().slice(0,2);
//         const order = ['second','third','forth','fifth','sixth','seventh']

//         const idHigh = `${order[i]}--high`;
//         const idLow = `${order[i]}--low`;
//         console.log(idHigh);
//         console.log(idLow);
//         // document.getElementById({idHigh}).textContent = highTemp;
//         // document.getElementById({idLow}).textContent = lowTemp;

//         document.getElementById('second--high').textContent = highTemp;
//         document.getElementById('second--low').textContent = lowTemp;

//     }
    
//     // 分割获取到的字符串
    
//     // const time = datetime.toString().slice(11,19)
//     // //读取数据 更改Html内容
//     // document.getElementById('temperature').textContent = temp;
    

//     // document.getElementById('main').textContent = main;
//     // document.getElementById('windspeed').textContent = wind_peed;
//     // document.getElementById('pressure').textContent = pressure;
//     // document.getElementById('humidity').textContent = humidity;
//     // document.getElementById('feelstemperature').textContent = feels_like;
//     // document.getElementById('uvi').textContent = uvi;

//     // 更改天气图片
//     // document.getElementById('img').src = `http://openweathermap.org/img/wn/${icon}@2x.png`;

// }

// const getDay = () => {
//     const today = new Date()
//     const day = today.getUTCDay()
//     // console.log(day)
//     const list = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
//     console.log(list[day+1])
//     // document.getElementById("second--day").textContent = list[day];
// }

async function getTime() {
    const time = `${new Date().toString().slice(4,10)} ${new Date().toString().slice(16,24)}`
    document.getElementById('weatherPage__today--time').textContent = time;
}

class Api extends React.Component {  
    constructor(props) {
      super(props)
      this.state=''
    }

    async componentDidMount() {
        this.updateTime();
        this.getDay();
        const{city} = this.props
        const currentCity = city;
        const apiUrl = `https://api.openweathermap.org/data/2.5/`
        +
        `weather?q=${currentCity}&appid=9bf729522efcbfd825ccfbef7c8f2410&units=metric`
        console.log(apiUrl);
        const response = await fetch(apiUrl);
        const data = await response.json();
        const {lon,lat} = data.coord // 解构
        // this.getDetail();// 回调函数，调用完getCoord再调用getDetail（）
        

        // ------------------第二个api函数----------------
        const apiUrlSecond = `https://api.openweathermap.org/data/2.5/`
        +
        `onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts`
        +
        `&appid=9bf729522efcbfd825ccfbef7c8f2410&units=metric`
        console.log(apiUrlSecond)
    
        const responseSecond = await fetch(apiUrlSecond);
        const dataSecond = await responseSecond.json();
 
        // 获取当天的温度 icon description 信息
        const {temp} = dataSecond.current;
        const {icon:todayIcon, main} = dataSecond.current.weather[0];
        const todayTemp = temp.toString().split(".")[0];

        
        document.getElementById('today--tep').textContent = todayTemp;
        document.getElementById('today--icon').src = `http://openweathermap.org/img/wn/${todayIcon}@2x.png`;
        document.getElementById('today--main').textContent = main;

        document.getElementById('weatherPage__today--detail').textContent = city;
        
        for(let i=0; i<6; i+=1) {
            const {max,min} = dataSecond.daily[i+1].temp;
            const {icon} = dataSecond.daily[i+1].weather[0];

            const highTemp = max.toString().split(".")[0];
            const lowTemp = min.toString().split(".")[0];
            const order = ['second','third','forth','fifth','sixth','seventh']
    
            const idHigh = `${order[i]}--high`;
            const idLow = `${order[i]}--low`;
            const idIcon = `${order[i]}--icon`;
            document.getElementById(`${idIcon}`).src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
            document.getElementById(`${idHigh}`).textContent = highTemp;
            document.getElementById(`${idLow}`).textContent = lowTemp;
        }
    }

    getDay = () => {
        for(let i=0; i<6; i+=1) {
            const today = new Date().getUTCDay()
            const dayList = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
            console.log(dayList[today])
           
            const order = ['second','third','forth','fifth','sixth','seventh']
            const day = `${order[i]}--day`;

            if(today+i < 7) {
                document.getElementById(`${day}`).textContent = dayList[today+i];
            }else{
                document.getElementById(`${day}`).textContent = dayList[today+i-7];
            }            
        }
    }

    updateTime(){
        this.timer = setInterval(() => {
            getTime();
          }, 1000)
    }

    render(){
        return(
          
          <div className="weatherPage">

            <div className="weatherPage__today">

              <div className='weatherPage__today weatherPage__today--tep'>
                <span id='today--tep' />
                <WiDegrees className="degree" />

    
                <div className='weatherPage__today weatherPage__today--location'>
                  <span id='weatherPage__today--detail' />
                  {/* <br /> */}
                  <span id='weatherPage__today--time' />
                </div>
              

                <div className='weatherPage__today weatherPage__today--icon'>
                  <img id='today--icon' className="weatherPage__today--icon" src="" alt="today" />
                  
                  <div className='weatherPage__today weatherPage__today--main'>
                    <span id='today--main' />
                  </div>
                </div>

              </div>
            </div>

            {/* <div className="weatherPage__detail"> */}

            <div className="weatherPage__detail weatherPage__detail--day">

              <div className='weatherPage__item weatherPage__item--day'>
                <span id='second--day' />
              </div>

              <div className='weatherPage__item weatherPage__item--icon'>
                <img id='second--icon' className="weatherPage__item--icon" src="" alt="second" />
              </div>

              <div className='weatherPage__item weatherPage__item--tep'>
                <span id='second--high'>
                  <WiDegrees />
                </span>
              </div>

              <div className='weatherPage__item weatherPage__item--tep'>
                <span id='second--low'>
                  <WiDegrees />
                </span>
              </div>

              {/* third */}
              <div className='weatherPage__item weatherPage__item--day'>
                <span id='third--day' />
              </div>

              <div className='weatherPage__item weatherPage__item--icon'>
                <img id='third--icon' className="weatherPage__item--icon" src="" alt="third" />
              </div>
              
              <div className='weatherPage__item weatherPage__item--tep'>
                <span id='third--high'>
                   
                  <WiDegrees />
                </span>
              </div>

              <div className='weatherPage__item weatherPage__item--tep'>
                <span id='third--low'>
                   
                  <WiDegrees />
                </span>
              </div>

              {/* Forth\ */}
              <div className='weatherPage__item weatherPage__item--day'>
                <span id='forth--day' />
              </div>

              <div className='weatherPage__item weatherPage__item--icon'>
                <img id='forth--icon' className="weatherPage__item--icon" src="" alt="third" />
              </div>
              
              <div className='weatherPage__item weatherPage__item--tep'>
                <span id='forth--high'>
                  <WiDegrees />
                </span>
              </div>

              <div className='weatherPage__item weatherPage__item--tep'>
                <span id='forth--low'>
                  <WiDegrees />
                </span>
              </div>

              {/* fifth */}
              <div className='weatherPage__item weatherPage__item--day'>
                <span id='fifth--day' />
              </div>

              <div className='weatherPage__item weatherPage__item--icon'>
                <img id='fifth--icon' className="weatherPage__item--icon" src="" alt="fifth" />
              </div>

              <div className='weatherPage__item weatherPage__item--tep'>
                <span id='fifth--high'>
                  <WiDegrees />
                </span>
              </div>

              <div className='weatherPage__item weatherPage__item--tep'>
                <span id='fifth--low'>
                  <WiDegrees />
                </span>
              </div>

              {/* sixth */}
              <div className='weatherPage__item weatherPage__item--day'>
                <span id='sixth--day' />
              </div>

              <div className='weatherPage__item weatherPage__item--icon'>
                <img id='sixth--icon' className="weatherPage__item--icon" src="" alt="sixth" />
              </div>

              <div className='weatherPage__item weatherPage__item--tep'>
                <span id='sixth--high'>
                  <WiDegrees />
                </span>
              </div>

              <div className='weatherPage__item weatherPage__item--tep'>
                <span id='sixth--low'>
                  <WiDegrees />
                </span>
              </div>

              {/* seventh */}
              <div className='weatherPage__item weatherPage__item--day'>
                <span id='seventh--day' />
              </div>

              <div className='weatherPage__item weatherPage__item--icon'>
                <img id='seventh--icon' className="weatherPage__item--icon" src="" alt="seventh" />
              </div>

              <div className='weatherPage__item weatherPage__item--tep'>
                <span id='seventh--high'>
                  <WiDegrees />
                </span>
              </div>

              <div className='weatherPage__item weatherPage__item--tep'>
                <span id='seventh--low'>
                  <WiDegrees />
                </span>
              </div>
            </div>

            {/* <div className="weatherPage__detail weatherPage__detail--thirdDay" /> */}
            {/* <div className="weatherPage__detail weatherPage__detail--forthDay" /> */}
            {/* <div className="weatherPage__detail weatherPage__detail--fifthDay" /> */}
            {/* <div className="weatherPage__detail weatherPage__detail--sixthDay" /> */}
            {/* <div className="weatherPage__detail weatherPage__detail--seventhDay" /> */}
            {/* </div> */}
          </div>
        )


    }
}
  export default Api;


  