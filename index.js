function produceDrivingRange(blockRange) {
  return function drivingRange(start, end) {
    let distance = parseInt(end)-parseInt(start);
    let gap = blockRange - distance;
    if (blockRange < distance) {
      gap = gap * -1
      return `${gap} blocks out of range`
    } else {
      return `within range by ${gap}`
    }
  }
}

function produceTipCalculator(tip) {
  return function tipCalculator(fee) {
    return tip * fee;
  }
}

function createDriver(name) {
  let driverId = 0
  return class {
    constructor(name){
      this.id = ++driverId
      this.name = name
    }
  }
}
