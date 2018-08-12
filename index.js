// Code your solution here:
function driversWithRevenueOver(drivers,revenue) {
  return drivers.filter(driver => driver.revenue > parseInt(revenue) )
}

function driverNamesWithRevenueOver(drivers,revenue) {
   return drivers.filter(driver => driver.revenue > parseInt(revenue))
   .map(driver=> driver.name)
}

function exactMatch(drivers, object) {

  let key = Object.keys(object)[0]

  return drivers.filter(driver=> driver[key]===object[key])

}

function exactMatchToList(drivers,object) {
  let key = Object.keys(object)[0]

  return drivers.filter(driver=> driver[key]===object[key]).map(driver=> driver.name)
}
