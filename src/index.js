import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const currDate = new Date();
currDate.setHours(8);
const currHour = currDate.getHours();



let greeting;
let cssStyle = {};
if(currHour>=1 && currHour<12){
   greeting = "Good Morning";
   cssStyle.color = '#00FF00';
}else if(currHour>=12 && currHour<19){
  greeting = "Good AfterNoon";
  cssStyle.color = '#00008B';
}else{
  greeting = "Good Night";
  cssStyle.color = '#FF8C00';
}


ReactDOM.render(
  <>
     <div className='greeting'>
     <h1> Hello Sir, <span style={cssStyle}> {greeting} </span> </h1>
     </div>
  </>,
  document.getElementById('root')
);