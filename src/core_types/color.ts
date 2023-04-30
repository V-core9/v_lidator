

module.exports = async (value) => {
  let isString = require('./string');
  let isHexadecimal = require('./hexadecimal');
  let isInteger = require('./integer');
  let isNumber = require('./number');

  const validateRGB = async (r, g, b) => (await isInteger(r) && 0 <= r && r <= 255) && (await isInteger(g) && 0 <= g && g <= 255) && (await isInteger(b) && 0 <= b && b <= 255);
  const validateRGBA = async (r, g, b, a) => (await validateRGB(r, g, b)) && (await isNumber(a) && 0 <= a && a <= 1);

  if (await isString(value)) {
    if (value.charAt(0) === '#') {
      let hexColor = value.substring(1) ;
      return (await isHexadecimal(hexColor) && ([3, 4, 6, 8].indexOf(hexColor.length) !== -1));
    }

    let rgbColor = value.split(',');
    const red = parseInt(rgbColor[0]);
    const green = parseInt(rgbColor[1]);
    const blue = parseInt(rgbColor[2]);
    const alpha = parseFloat(rgbColor[3]);
    if (rgbColor.length === 3) return validateRGB(red, green, blue);
    if (rgbColor.length === 4) return validateRGBA(red, green, blue, alpha);

    return false;
  }
  return false;
};
