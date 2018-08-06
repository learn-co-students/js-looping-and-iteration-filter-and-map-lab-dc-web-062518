// Code your solution here:
function driversWithRevenueOver(collection, rev) {
  let newCollection = collection.filter(function(driver) { return driver.revenue > rev})
  return newCollection
}

function driverNamesWithRevenueOver(collection, rev) {
  let first = driversWithRevenueOver(collection, rev)
  let newCollection = first.map(function(driver) { return driver.name})
  return newCollection
}

function exactMatch(collection, obj) {
  let newCollection = collection.filter(function(driver) {
    let key = Object.keys(obj)[0]
    return obj[key] === driver[key] })
  return newCollection
}

function exactMatchToList(collection, obj) {
  let first = exactMatch(collection, obj)
  let newCollection = first.map(function(driver) { return driver.name})
  return newCollection
}
