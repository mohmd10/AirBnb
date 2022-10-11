
function filterByCity(targetCity, listingCityArray) {
 let filter = [];
  for(let i = 0; i < listingCityArray.length; i++) {
    if(listingCityArray[i].toLowerCase() === targetCity.toLowerCase()) {
      filter.push(i); 
    }
  }
  return filter;
}
filterByCityTest();

function filterByPrice(minPrice, maxPrice, listingPriceArray) {
let range = [];
  for(let i = 0; i < listingPriceArray.length; i++) {
    if(listingPriceArray[i] >= minPrice && listingPriceArray[i] <= maxPrice) {
      range.push(i);
    }
  }
  return range;
}
 filterByPriceTest()

// LEVEL UP!
function filterByTypes(targetTypes, listingTypeArray) {
  let arr = [];
  for(let i = 0; i < listingTypeArray.length; i++) {
     for (let j = 0; j < targetTypes.length; j++) {
       if(targetTypes[j] == listingTypeArray[i]){
       arr.push(i);
      }
    }
  }
  return arr;
}   
  filterByTypesTest();