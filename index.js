// Code your solution here:
function driversWithRevenueOver(drivers, str) {
  const  newDriver = drivers.filter(function(driver) {
    return driver.revenue > str;
  })
  return newDriver;
}

function driverNamesWithRevenueOver(drivers, str) {
  return driversWithRevenueOver(drivers, str).map(function(driver){
    return driver.name
  })
}

function exactMatch(drivers, obj) {
  const newDriver = drivers.filter(function(driver){
    let key = Object.keys(obj)[0]
      return driver[key] === obj[key]
    })
  return newDriver
}

function exactMatchToList(drivers, obj) {
  return exactMatch(drivers, obj).map(function(driver){
    return driver.name
  })
}
