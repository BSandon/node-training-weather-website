const request = require('request');

const geocode = (address,callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYnNhbmRvbiIsImEiOiJjazIyZGR0bHEwNHcwM2VwZnc4NnVvN3E1In0.rtIAcgNjuMTkV9pThW_yvQ&limit=1';
    
    request({url, json:true},(error,{body:respBody}) => {
        if(error){
            callback('Unable to connect to geocoding services!');
        } else if (respBody.features.length === 0){
            callback('Unable to find location. Try another search.')
        } else {
            callback(undefined,{
                latitude: respBody.features[0].center[1],
                longitude: respBody.features[0].center[0],
                location: respBody.features[0].place_name
            })
        }
    })
};

module.exports = geocode;