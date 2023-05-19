# A Theory of Sinking City 
© 2023 Monte Kietpapwpan | MIT License

## Sea Water Volume to Sink a City
1. Let A be a city in the coastal lowland, with with an average elevation of 1.5 meters above mean sea level. 
2. The city can be sinked by seawater if the sea level rise is greater than 1.5 meters, or if the rising volume of water in the global ocean is greater than the global ocean's surface area multiplied by 0.0015 km. 
3. We know that the global or world ocean's surface area is 361.13 million km<sup>2</sup>. 
4. So, the city will be sinked after V > 361.13 million km<sup>2</sup>* 0.0015 km, or 0.541695 million km<sup>3</sup>:

```
function sinkingCity() {
  var A = 361.13 * 1000000; // global ocean's surface area
  var H = getElementById(A).value; // land elevation of city A (1.5 m) 
  var V = A * H / 1000; // volume of sea level rise that begins to sink city A.
  var seaLevelRise = getElementById(S).value;
  let sinking = "";
    if(seaLevelRise > V) {
      sinking = "Sinked";}
    else {sinking = "Not sinked";}
}
```
This ocean water rise results from the melting of the two polar ice caps of Earth: Antarctic ice sheet and Artic ice sheet.

Antarctic ice sheet covers about 98% of the Antarctic continent and is the largest single mass of ice on Earth, with the average thickness of over 2 km covering an area of almost 14 million km<sup>2</sup>. The total ice volume is 2 km * 14 million km<sup>2</sup>, or 28 million km<sup>3</sup>. If 50% of the total volume of glacier ice is below the surface of the ocean, the ice volume that causes sea level rise will be 28 million km<sup>3</sup> * 0.5, or 14 million km<sup>3</sup>.  

```
function sinkingCity() {
  var A = 361.13 * 1000000; // global ocean's surface area
  var H = getElementById(A).value; // land elevation of city A (1.5 m) 
  var V = A * H / 1000; // volume of sea level rise that begins to sink city A.
  var seaLevelRise = getElementById(S).value;
  let sinking = "";
    if(seaLevelRise > V) {
      sinking = "Sinked";}
    else {sinking = "Not sinked";}
  var iceArea = 14 * 1000000;
  var iceThickness = 2;
  var totalIceVolume = iceArea * iceThinkness;
  var iceAboveOceanPortion = 0.5;
  var effectiveIceVolume = totalIceVolume * iceAboveOceanPortion;
  var iceToWaterConversionFactor = 0.91;
  var volumeOfWaterFromIce = effectiveIceVolume * iceToWaterConversionFactor;
  var seaWaterRise = A/ (H/1000); // Volume of seawater that begins to sink the city.
}
```

If the whole mass of the ice sheet is melt, the water mass will be densed by 9%, so the water volume melt from the ice sheet is 14 million km<sup>3</sup> * 0.91, or 12.74 million km<sup>3</sup>, which can increase the mean sea level by 12.74 million km<sup>3</sup>/361.13 million km<sup>2</sup>, or 0.035 km, or 35.27 meters, contributed by the melting of Antarctic ice sheet alone.

## Conclusion
The mass of global glacier ice above the global ocean surface, if just half melt, is more than enough to sink the coastal lowland around the globe. The sinking time equals the land elevation (meters above MSL) of a given land divided by the rate of sea level rise (mm/year):

```
var sinkingTime = landEvelvation / (rateOfSeaLevelRise / 1000);
```

The question is not whether the lowland city will be sinked or not, but is when it will be sinked. High risk cities are located below 35.27 meters above mean sea level.  
  
