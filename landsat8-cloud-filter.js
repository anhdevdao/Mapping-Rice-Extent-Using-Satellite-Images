// Tọa độ 4 điểm trên Đồng Bằng Sông Hồng
//dbsh1 (105.53, 21.46)
//dbsh1 (106.92, 21.40)
//dbsh1 (105.06, 20.34)
//dbsh1 (106.47, 20.23)

//Khoi tao anh voi Image constructor
var l8 =  ee.ImageCollection("LANDSAT/LC08/C01/T1_SR");
//var image =  ee.ImageCollection("COPERNICUS/S1_GRD");

//Zoom vao 1 diem
Map.setCenter(106.01, 21.02, 8);

//Hien thi anh tren map
//Map.addLayer(image, {min: 0, max: 3000}, 'custom visualization');

var spatialFiltered1 = l8.filterBounds(dbsh1);
var spatialFiltered2 = l8.filterBounds(dbsh2);
var spatialFiltered3 = l8.filterBounds(dbsh3);
var spatialFiltered4 = l8.filterBounds(dbsh4);

var temporalFiltered1 = spatialFiltered1.filterDate('2018-03-31', '2018-10-16');
var temporalFiltered2 = spatialFiltered2.filterDate('2018-03-31', '2018-10-16');
var temporalFiltered3 = spatialFiltered3.filterDate('2018-03-31', '2018-10-16');
var temporalFiltered4 = spatialFiltered4.filterDate('2018-03-31', '2018-10-16');

//print('temporalFiltered', temporalFiltered);
// This will sort from least to most cloudy.
var sorted1 = temporalFiltered1.sort('CLOUD_COVER');
var sorted2 = temporalFiltered2.sort('CLOUD_COVER');
var sorted3 = temporalFiltered3.sort('CLOUD_COVER');
var sorted4 = temporalFiltered4.sort('CLOUD_COVER');

// Get the first (least cloudy) image.
var scene1 = ee.Image(sorted1.first());
var scene2 = ee.Image(sorted2.first());
var scene3 = ee.Image(sorted3.first());
var scene4 = ee.Image(sorted4.first());
// Map.addLayer(scene1, {}, 'default RGB');
// Map.addLayer(scene2, {}, 'default RGB');
// Map.addLayer(scene3, {}, 'default RGB');
// Map.addLayer(scene4, {}, 'default RGB');
// Map.addLayer(temporalFiltered1);
// Map.addLayer(temporalFiltered2);
// Map.addLayer(temporalFiltered3);
// Map.addLayer(temporalFiltered4);
var visParams = {bands: ['B4', 'B3', 'B2'], min: -10000, max: 10000};
// Map.addLayer(scene1, visParams, 'true-color composite');
// Map.addLayer(scene2, visParams, 'true-color composite');
// Map.addLayer(scene3, visParams, 'true-color composite');
// Map.addLayer(scene4, visParams, 'true-color composite');

var image1 = ee.Image(
  l8.filterBounds(dbsh1)
    .filterDate('2018-03-31', '2018-10-16')
    .sort('CLOUD_COVER')
    .first()
);
var image2 = ee.Image(
  l8.filterBounds(dbsh2)
    .filterDate('2018-03-31', '2018-10-16')
    .sort('CLOUD_COVER')
    .first()
);
var image3 = ee.Image(
  l8.filterBounds(dbsh3)
    .filterDate('2018-03-31', '2018-10-16')
    .sort('CLOUD_COVER')
    .first()
);
var image4 = ee.Image(
  l8.filterBounds(dbsh4)
    .filterDate('2018-03-31', '2018-10-16')
    .sort('CLOUD_COVER')
    .first()
);

var ndvi1 = image1.normalizedDifference(['B5', 'B4']).rename('NDVI');
var ndvi2 = image2.normalizedDifference(['B5', 'B4']).rename('NDVI');
var ndvi3 = image3.normalizedDifference(['B5', 'B4']).rename('NDVI');
var ndvi4 = image4.normalizedDifference(['B5', 'B4']).rename('NDVI');
Map.centerObject(image1, 9);
var ndviParams = {min: -1, max: 1, palette: ['blue', 'white', 'green']};
// Map.addLayer(ndvi1, ndviParams, 'NDVI image');
// Map.addLayer(ndvi2, ndviParams, 'NDVI image');
// Map.addLayer(ndvi3, ndviParams, 'NDVI image');
// Map.addLayer(ndvi4, ndviParams, 'NDVI image');
var visualization1 = ndvi1.visualize({
  palette: ['blue', 'white', 'green'],
  min: -1,
  max: 1
});
var visualization2 = ndvi2.visualize({
  palette: ['blue', 'white', 'green'],
  min: -1,
  max: 1
});
var visualization3 = ndvi3.visualize({
  palette: ['blue', 'white', 'green'],
  min: -1,
  max: 1
});
var visualization4 = ndvi4.visualize({
  palette: ['blue', 'white', 'green'],
  min: -1,
  max: 1
});

// Xuat ra GoogleDrive
Export.image.toDrive({
  image: ndvi1,
  description: 'Greenest_pixel_composite',
  scale: 30
});
Export.image.toDrive({
  image: ndvi2,
  description: 'Greenest_pixel_composite',
  scale: 30
});
Export.image.toDrive({
  image: ndvi3,
  description: 'Greenest_pixel_composite',
  scale: 30
});
Export.image.toDrive({
  image: ndvi4,
  description: 'Greenest_pixel_composite',
  scale: 30
});








