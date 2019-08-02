const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=49de6190f7637c87058663ab1104b2ca`);

    return resp.data.main;
}


module.exports = {
    getClima
}