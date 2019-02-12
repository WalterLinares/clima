const { argv } = require('./config/yargs');
const { getLugarLatLng } = require('./lugar/lugar');
const { getClima } = require('./clima/clima');

let main = async() => {
    try {
        let result = await getLugarLatLng(argv.direccion);
        console.log(result);
        let clima = await getClima(result.lat, result.lng);
        console.log("Clima: " + clima);
    } catch (err) {
        console.log("Error:" + err);
        return -1;
    }


    return 0;
};

main()
    .then(retcode => {
        console.log("main finished with retcode:" + retcode);
    })
    .catch(err => {
        console.log("Main error:" + err);
    });