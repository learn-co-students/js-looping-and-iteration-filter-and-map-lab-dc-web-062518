// Code your solution here:
function driversWithRevenueOver(drivers, amount) {
  newArray = [];
  for (const person of drivers) {
    if (person.revenue > amount) {
      newArray.push(person);
    }
  }
  return newArray;
}

function driverNamesWithRevenueOver(drivers, amount) {
  newArray = [];
  for (const person of drivers) {
    if (person.revenue > amount) {
      newArray.push(person.name);
    }
  }
  return newArray;
}

function exactMatch(drivers, obj) {
  const key = Object.keys(obj);
  return drivers.filter(function(driver) {
    return driver[key] === obj[key];
  });
}

function exactMatchToList(drivers, obj) {
  const key = Object.keys(obj);
  const x = drivers.filter(function(driver) {
    return driver[key] === obj[key];
  });
  const arr = x.map(function(person) {
    return person.name;
  });
  return arr;
}
