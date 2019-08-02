const axios = require('axios');


const getLugarLatLng = async(direccion) => {

    let encodeURL = encodeURI(direccion);

    let resp = await axios.get(`https://geocoder.api.here.com/6.2/geocode.json?app_id=mTnkufSMkJn81zTLmVZq&app_code=2_ivRKdIW06moOvI7JKO4g&searchtext=${encodeURL}`);

    if (resp.data.Response.View[0] == undefined) {
        throw new Error(`No hay resultados para la ciudad ${direccion}`);
    }

    let location = resp.data.Response.View[0].Result[0].Location;

    return {
        direccion: location.Address.Label,
        lat: location.NavigationPosition[0].Latitude,
        lng: location.NavigationPosition[0].Longitude
    }
}

module.exports = {
    getLugarLatLng
}