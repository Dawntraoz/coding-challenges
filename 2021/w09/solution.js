const rgb2Hex = (r, g, b) => {
  const letter = {
    0: '0',
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
    10: 'A',
    11: 'B',
    12: 'C',
    13: 'D',
    14: 'E',
    15: 'F'
  }

  const calcDigit = (rgbDigit) => {
    if (Math.trunc(rgbDigit/16) > 15) return letter[15] + letter[15];
    if (Math.sign(rgbDigit) === -1) return letter[0] + letter[0];
    return letter[Math.trunc(rgbDigit/16)] + letter[(Math.abs(rgbDigit/16) - Math.floor(rgbDigit/16)) * 16]
  }

  return `#${calcDigit(r) + calcDigit(g) + calcDigit(b)}`;
};

module.exports = rgb2Hex;
