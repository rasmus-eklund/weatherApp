const base = 'http://api.weatherapi.com/v1/';
const freeKey = '185c34eb96be4480be2122624231404';
const get = (location, cb) => {
  fetch(`${base}current.json?key=${freeKey}&q=${location}&aqi=no`)
    .then((res) => {
      return res.json();
    })
    .then((result) => {
      return cb(result);
    });
};

module.exports.get = get;
