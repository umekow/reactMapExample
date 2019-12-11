import React, {useState} from 'react';
//mapbox component
import ReactMapGL from 'react-map-gl';
import './App.css';

function App() {
  //information for map
  const [viewport, setViewport] = useState({
    latitude: 32.298760, 
    longitude: -90.184810, 
    width: '100vw', 
    height: '100vh', 
    zoom: 10

  })
  return (
    <div className="App">
      
     <ReactMapGL {...viewport}>
       markers
     </ReactMapGL>
    </div>
  );
}

export default App;
