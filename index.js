const { get } = require('./weather-client.mock');

// client.get('london', (d) => console.log(d));
window.document.client_get = get;
