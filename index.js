// let drivers = [{ name: 'Syd',   revenue: 400 },
// { name: 'Ann', revenue: 200 }]
//
// let revenue = 367

function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(revOver)
  function revOver(driver) {
      return driver.revenue > revenue
  }
}

function driverNamesWithRevenueOver(drivers, revenue) {
  let newDrivers = driversWithRevenueOver(drivers, revenue)
    return newDrivers.map(x => x.name)
}

function exactMatch(drivers, thing) {
  // driversWithRevenueOver(drivers, revenue)
  return drivers.filter(keyword)
    function keyword(driver) {
      if (driver.name === thing.name || driver.revenue === thing.revenue){
        return driver
      }
    }
}

function exactMatchToList(extendedDrivers, something) {
  return exactMatch(extendedDrivers, something).map( x => x["name"] )
}
