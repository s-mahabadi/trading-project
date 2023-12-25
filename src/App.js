import React, { useEffect, useRef } from 'react';
import ChartManager from './main';

function App() {
  const chartContainerRef = useRef();
  
  // console.log(chartContainerRef.current);
  
  // useEffect(() => {
  //   const chartManager = new ChartManager();
  // });

  useEffect(() => {
    // code to run after render goes here
    console.log("USE EFFECT");
    chartContainerRef.current.innerHTML = "";
    const chartManager = new ChartManager(chartContainerRef.current);
  }, []);

  return (
    <div>
      <h1>React App</h1>
      <div style={{height: '1000px'}} ref={chartContainerRef}></div>
    </div>
  );
}

export default App;
