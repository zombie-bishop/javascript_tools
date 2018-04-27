function romanize(num) {
  var romaninizeLessThanThousands = function (numArray) {
    var converted = '';
    var romanNums = [
      ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
      ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
      ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']
    ].slice((3 - numArray.length), 3);
    for (i = 0; i < numArray.length; i++) {
      converted += romanNums[i][numArray[i]];
    }
    return converted;
  }
  var romaninize = ""
  if (num < 1) {
    return "NaR";
  }
  var numberArray = num.toString(10).split("").map(function(t){return parseInt(t)});
  if (numberArray.length >= 4) {
    var thousandsArray = numberArray.slice(0, (numberArray.length-3));
    numberArray = numberArray.slice((numberArray.length-3));
    var thousandths = ['', 'M', 'MM', 'MMM'];
    if (thousandsArray.length == 1 && thousandsArray[0] < 4) {
      romaninize = thousandths[thousandsArray[0]];
    } else {
      romaninize = romaninizeLessThanThousands(thousandsArray) + 'M';
    }
  }
  romaninize += romaninizeLessThanThousands(numberArray);
  return romaninize;
}
