const axios = require('axios');

const getClima = async(lat, lng) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=e929f8d876f068885a1dc6bd25bc9018`;
    let resp = await axios.get(url);

    if (resp.data.cod != 200) {
        throw new Error("Error getClima:" + resp.message);
    }

    return resp.data.main.temp;

};

module.exports = {
    getClima
};