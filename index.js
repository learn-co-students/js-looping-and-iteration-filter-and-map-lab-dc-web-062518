// Code your solution here:
const drivers = [{ name: 'Sally',   revenue: 400 },
{ name: 'Annette', revenue: 200 },
{ name: 'Jim',     revenue: 150 },
{ name: 'Sally',   revenue: 200 }]

function driversWithRevenueOver(drivers, input_revenue) {
  let result = drivers.filter(function (driver) { return driver.revenue > input_revenue })
  return result
}

function driverNamesWithRevenueOver(drivers, input_revenue) {
  // let highRevArray = drivers.filter(function (driver) { return driver.revenue > input_revenue })
  // let result = highRevArray.filter(function (driver) { return driver.name })
  // return result
  let driverNames = []
  for (const driver of drivers){
    if (driver.revenue > input_revenue) {
      driverNames.push(driver.name)
    }
  }
  return driverNames;
}

function exactMatch(drivers, targetObject) {
  let driverNameMatches = []
  let targetKey = Object.keys(targetObject)[0]
  for (const driver of drivers) {
    if ( driver[targetKey] === targetObject[targetKey] ) {
      driverNameMatches.push(driver)
    }
  }
  return driverNameMatches;
}

function exactMatchToList(drivers, targetObject) {
  let driverNameMatches = []
  let targetKey = Object.keys(targetObject)[0]
  for (const driver of drivers) {
    if ( driver[targetKey] === targetObject[targetKey] ) {
      driverNameMatches.push(driver.name)
    }
  }
  return driverNameMatches;
}
