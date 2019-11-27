const request = require('request');

const forecast = (latitude,longitude,callback) => {
    const url = `https://api.darksky.net/forecast/2910ee9d3851fd6efe57253885f82ed2/${latitude},${longitude}`;

    request({ url, json: true }, (error, {body:respBody}) => {
        if(error){
            callback('Unable to connect to weather service.');
        } else if(respBody.error){
            callback('Unable to find location.')
        }else{
            let current = respBody.currently;
            
            let  weatherStr = respBody.daily.data[0].summary + ' It is currently ' + current.temperature + ' degrees out. There is a ' + current.precipProbability + '% chance of rain.';
            
            callback(undefined,weatherStr);
        }
        
    });
}

module.exports = forecast;