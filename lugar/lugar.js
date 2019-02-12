const axios = require('axios');

const getLugarLatLng = async(direccion) => {
    let encodedDireccion = encodeURI(direccion);
    let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedDireccion}&key=AIzaSyCzjZ_fmwrqsBo5SbWtfB9Wwo4EOEtAHhw`;
    let resp = await axios.get(url);

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error("no hay resultados para direccion:" + direccion);
    }

    let result = resp.data.results[0];
    let formatted_address = result.formatted_address;
    let location = result.geometry.location;

    return {
        direccion: formatted_address,
        lat: location.lat,
        lng: location.lng
    };

};

module.exports = {
    getLugarLatLng
};