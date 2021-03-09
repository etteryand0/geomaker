import arts from './arts';

import * as transform from 'transform-coordinates';

// Places art points on world map
export default function worldLink( location, route, coeff ) {
  // geo tools to convert coordinates
  const geotoolLATLNG = transform.default('EPSG:4326', '3857');
  const geotoolXY = transform.default('EPSG:3857', '4326');
    
  // https://www.npmjs.com/package/transform-coordinates
  // define start point
  const originPoint = geotoolLATLNG.forward({
    x: location.longitude, y: location.latitude
  });


  var art = []
  if (route === 0) {
    art = [...arts.cup];  // copy art from ./arts.js to display it on map
  } else if (route === 1) {
    art = [...arts.choroon]
  } else if (route === 2) {
    art = [...arts.triangle]
  }
  const metersCoefficient = parseInt(coeff);  // meters coefficient to scale route sizes

  // list of ESPG:3857 points convert them to ESPG:4326 
  let points = [
    [
      originPoint.x,
      originPoint.y
    ]
  ];

  // place every dot near to originPoint
  art.forEach(xy => {
    const x = xy[0] * metersCoefficient + originPoint.x;
    const y = xy[1] * metersCoefficient + originPoint.y;
  
    // [metersCoefficient/4, metersCoefficient/2, metersCoefficient*3/4].map(coeff => {
    //   points.push([
    //     xy[0] * coeff + originPoint.x,
    //     xy[1] * coeff + originPoint.y
    //   ])
    // })
    points.push([x,y]);
  });
  points.push([
    originPoint.x, originPoint.y
  ]); // come back to originPoint

  
  // convert XY coords to LATLNG
  let mapCoordinates = []
  points.forEach(dot => {
    let coord = geotoolXY.forward({
      x: dot[0], y: dot[1]
    });

    mapCoordinates.push({latitude: coord.y, longitude: coord.x})
  });

  return mapCoordinates;
}