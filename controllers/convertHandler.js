/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    console.log(input)
    const numRegex = /^[0-9.\/]{0,}/ig
    const numMatch = input.match(numRegex)
    console.log(numMatch, 'nummatch')
    const num = eval(numMatch[0]);
    console.log('num', num)
    if(typeof num === "number"){
      console.log('getnum is returning', num)
      return num
    }  
    return 'invalid number'   
  };
  
  this.getUnit = function(input) {
    const valRegex = /gal|lbs|mi|km|l|kg/i
    const valMatch = input.match(valRegex)
    console.log(valMatch)
    const val = (() => {
      if(valMatch) {
        return  valMatch[0]
      }
    })()
     
    if(val) {
      console.log('getunit val returning', val)
      return val
    }
    return 'invalid unit'
    
  };
  
  this.getReturnUnit = function(initUnit) {
    const galRegex = /gal/i;
    const lbsRegex = /lbs/i;
    const kgRegex = /kg/i;
    const miRegex = /mi/i;
    const kmRegex = /km/i;
    const lRegex = /l/i;

    const checkRegex = (reg) => {
      if(initUnit.match(reg)) {
        return initUnit.match(reg)[0]
      }
    }
    
    const unit = (() => {
      if(initUnit === checkRegex(galRegex)) {
        return 'l'
      }
      if(initUnit === checkRegex(lRegex)){
        return 'gal';
      }
      if(initUnit === checkRegex(lbsRegex)) {
        return 'kg';
      }
      if(initUnit === checkRegex(kgRegex)) {
        return  'lbs';
      }
      if(initUnit === checkRegex(miRegex)) {
        return 'km';
      }
      if(initUnit === checkRegex(kmRegex)) {
        return 'mi';
      }
    })()

    return unit
  };

  this.spellOutUnit = function(initUnit, returnUnit) {
    const galRegex = /gal/i;
    const lbsRegex = /lbs/i;
    const kgRegex = /kg/i;
    const miRegex = /mi/i;
    const kmRegex = /km/i;
    const lRegex = /l/i;

    const checkRegex = (unit , reg) => {
      if(unit.match(reg)) {
        return unit.match(reg)[0]
      }
    }
    
    const spellUnit = (unit) => {
      if(unit === checkRegex(unit, galRegex)) {
        return 'gallons'
      }
      if(unit === checkRegex(unit, lRegex)){
        return 'liters';
      }
      if(unit === checkRegex(unit, lbsRegex)) {
        return 'pounds';
      }
      if(unit === checkRegex(unit, kgRegex)) {
        return  'kilograms';
      }
      if(unit === checkRegex(unit, miRegex)) {
        return 'miles';
      }
      if(unit === checkRegex(unit, kmRegex)) {
        return 'kilometers';
      }
    }


    const spelledOutUnits = {
      initSpelled: spellUnit(initUnit),
      returnSpelled: spellUnit(returnUnit)
    }

    return spelledOutUnits;
    
  };
  
  this.convert = function(initNum, initUnit) {
    
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.609344;

    const galRegex = /gal/i;
    const lRegex = /l/i;
    const lbsRegex = /lbs/i
    const kgRegex = /kg/i;
    const miRegex = /mi/i;
    const kmRegex = /km/i;

    const checkRegex = (reg) => {
      if(initUnit.match(reg)) {
        return initUnit.match(reg)[0]
      }
    }
    //console.log(initUnit.match(galRegex), "match galregex")
    if(initUnit === checkRegex(galRegex)) {
      return initNum * galToL;
    }
    if(initUnit === checkRegex(lRegex)){
      return initNum / galToL;
    }
    if(initUnit === checkRegex(lbsRegex)) {
      return initNum * lbsToKg;
    }
    if(initUnit === checkRegex(kgRegex)) {
      return initNum / lbsToKg;
    }
    if(initUnit === checkRegex(miRegex)) {
      return initNum * miToKm;
    }
    if(initUnit === checkRegex(kmRegex)) {
      return initNum / miToKm;
    }
  };
  
  this.getString = function(initNum, initUnit, returnNum, spelledUnit) {
    
    return `${initNum} ${spelledUnit.initSpelled} converts to ${returnNum} ${spelledUnit.returnSpelled}`
  };
  
}

module.exports = ConvertHandler;
