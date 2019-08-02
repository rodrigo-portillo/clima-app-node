const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


let getInfo = async(direccion) => {

    try {
        let coors = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);
        return `El clima en ${coors.direccion} es de ${temp.temp}`;

    } catch (error) {
        return `No se pudo determinar el clima en ${direccion}`;
    }
}

getInfo(argv.direccion)
    .then(msg => {
        console.log(msg);
    })
    .catch(e => {
        console.log(e);
    });