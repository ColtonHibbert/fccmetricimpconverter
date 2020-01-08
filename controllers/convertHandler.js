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
    const valRegex = /gal|l|mi|km|lbs|kg/i
    const valMatch = input.match(valRegex)
    console.log(valMatch)
    const val = valMatch[0]
    if(val) {
      console.log('getunit val returning', val)
      return val
    }
    return 'invalid unit'
    
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    return result;
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

    const checkMi = initUnit.match(miRegex)
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
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
