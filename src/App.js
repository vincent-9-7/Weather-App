import React from "react";
// import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home'
import Weather from './pages/WeatherPage/Weather'
import API from "./api/api";
// import Search from "./components/SearchForm/Search"

// 2. 常规ss
function App() {
  return(
    <div>
      <Home />
      <Weather />
      <API city="Bristol" />
      {/* <Search /> */}
    </div>
  )
}
export default App;







// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit 
//           {' '}
//           <code>src/App.js</code>
//           {' '}
//           and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
