const request = require('request')

const url = 'https://api.darksky.net/forecast/ba7df1f8860f78113ce7aa332ab57913/37.8267,-122.4233'

request({url: url}, (error, response) => {
    console.log(response);
})