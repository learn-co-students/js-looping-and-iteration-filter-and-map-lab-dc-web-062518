function driversWithRevenueOver(array, revenue) {
  return array.filter(driver => { return driver.revenue > revenue});
}

function driverNamesWithRevenueOver(array, revenue) {
  let newName = driversWithRevenueOver(array, revenue);
  return newName.map(name => {return name.name});
}

function exactMatch(array, attribute) {
  return array.filter(driver => {
    return driver[Object.keys(attribute)] === attribute[Object.keys(attribute)]});
}

function exactMatchToList(array, attribute) {
  let newName = exactMatch(array, attribute);
  return newName.map(name => {return name.name});
}
