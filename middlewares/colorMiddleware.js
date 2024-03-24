// middleware/colorMiddleware.js
const colorToHex = (req, res, next) => {
  const colorMap = {
    red: '#ff0000',
    green: '#00ff00',
    blue: '#0000ff',
  };

  if (req.body.color && colorMap[req.body.color]) {
    req.body.hexColor = colorMap[req.body.color];
  }

  next();
};

module.exports = colorToHex;
