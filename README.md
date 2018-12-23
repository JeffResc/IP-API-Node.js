[![NPM](https://nodei.co/npm/ip-api.png?downloads=true&stars=true)](https://npmjs.com/package/ip-api/)

# IP-API [![Build Status](https://travis-ci.org/JeffResc/IP-API-Node.js.svg?branch=master)](https://travis-ci.org/JeffResc/IP-API-Node.js)
Implementaion of IP-API.com in Node.js

Example Shorten:

First run ```npm install ip-api``` to install the IP-API package to your system.

```javascript
var ipapi = require('ip-api');

ipapi.lookup('2.5.5.5', '262143', function(res) {
	console.log(res);
});
```

The first value used will be the IP address. The second value will be the fields. You can find more information about fields on the [IP-API website](http://ip-api.com/docs/api:json#generatedData). Using `262143` will return all available values as of December 2018.

Example Response:
```javascript
{ as: 'AS3215 Orange S.A.',
  city: 'Lille',
  country: 'France',
  countryCode: 'FR',
  isp: 'France Telecom Orange',
  lat: 50.6292,
  lon: 3.05726,
  mobile: false,
  org: '',
  proxy: false,
  query: '2.5.5.5',
  region: 'HDF',
  regionName: 'Hauts-de-France',
  reverse: 'alille-656-1-160-5.w2-5.abo.wanadoo.fr',
  status: 'success',
  timezone: 'Europe/Paris',
  zip: '59000' }
```

Returns an empty string if an error occurs.

[This Package Is Under The MIT License](https://raw.githubusercontent.com/JeffResc/IP-API-Node/master/LICENSE.txt)