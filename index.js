// Code your solution here:
function driversWithRevenueOver(drivers, x){
 return drivers.filter(function (driver) { return driver.revenue > x; });
};

function driverNamesWithRevenueOver(drivers, x){
  let a = driversWithRevenueOver(drivers, x);
  return a.map( function(c) { return c.name });
};


function exactMatch(drivers, attribute){
  return drivers.filter(function(x){
    return x[Object.keys(attribute)] === attribute[Object.keys(attribute)];
  });
};

function exactMatchToList(drivers, attribute){
  let a = exactMatch(drivers, attribute);
  return a.map(function(x){ return x.name});
}
