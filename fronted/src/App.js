
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Locations from './components/locations/'
import Home from './components/home/';





function App() {
  return (
    <Router>
      <div >
        <Switch>
          <Route path="/" exact component={Home} />

          <Route path="/locations" exact component={Locations}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;




// import React, { useState, useEffect } from "react";
// import {
//   withGoogleMap,
//   withScriptjs,
//   GoogleMap,
//   Marker,
//   InfoWindow
// } from "react-google-maps";

// function Map() {
  

//   return (
//     <GoogleMap
//       defaultZoom={10}
//       defaultCenter={{ lat: 45.4211, lng: -75.6903 }}
//     />
//   );
// }

// const MapWrapped = withScriptjs(withGoogleMap(Map));

// export default function App() {
//   return (
//     <div style={{ width: "100vw", height:"100vh" }}>
//       <MapWrapped
//         googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
//         loadingElement={<div style={ { height:"100%" } } />}
//         containerElement={<div style={ { height:"100%" } } />}
//         mapElement={<div style={ { height:"100%" } } />}
//       />
//     </div>
//   );
// }

