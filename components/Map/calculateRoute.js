import PolylineTool from './decodePolyline';

// REMOVE API BEFORE COMMITTING
const APIuri = 'https://router.hereapi.com/v8/routes?transportMode=pedestrian&return=polyline,summary&apiKey=__';

export default function calculateRoute(mapCoordinates) {
  // generate waypoints params  
  const origin = `&origin=${mapCoordinates[0].latitude},${mapCoordinates[0].longitude}`;
  const destination = `&destination=${mapCoordinates[mapCoordinates.length-1].latitude},${mapCoordinates[mapCoordinates.length-1].longitude}`;

  let params = origin + destination;
  mapCoordinates.shift();
  mapCoordinates.pop();

  
  mapCoordinates.forEach(coord => {
    params += `&via=${coord.latitude},${coord.longitude}`;
  });
  
  // geojson features template to save response
  let features = []
  // send api request 
  return fetch(APIuri + params)
    .then(response => {
      return response.json();
    })
    .then(data => {
      // save response into geojson features
      let geometry = [];
      data.routes[0].sections.forEach(section => {
        const polyline = PolylineTool.decode(section.polyline).polyline;
        let lineString = [];
        polyline.forEach(coord => {
          // m.push([coord[1], coord[0]]);
          lineString.push({latitude: coord[0], longitude: coord[1]});
        })
        geometry.push(lineString);
      })
    
      geometry.forEach(coordinates => {
        features.push(coordinates)
      });

      return features;
    });
}