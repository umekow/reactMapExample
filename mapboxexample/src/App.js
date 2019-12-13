import React, {useState} from 'react';
//mapbox component
import ReactMapGL from 'react-map-gl';
import './App.css';

//data
import * as capitalIncomes from './data/m'

function App() {
  //information for map
  const [viewport, setViewport] = useState({
    latitude: 33.000000, 
    longitude: -90.000000, 
    width: '100vw', 
    height: '100vh', 
    zoom: 6.5

  })
  return (
    <div className="App">
      
     <ReactMapGL {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      mapStyle="mapbox://styles/umekow/ck41vrm6q06nk1cn7j1gm30nk"
      onViewportChange={viewport => setViewport(viewport)}
     >
       markers
     </ReactMapGL>
    </div>
  );
}

export default App;
