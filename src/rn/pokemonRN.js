const service = require('./../service/pokemonService');
const RN = {};

RN.get = (param) => {
    return service.get(param);
};

RN.getOne = (param) => {
    return  service.getOne(param);
};

RN.create = (param) => {
    return service.create(param);
};

RN.buy = (param) => {
    return service.buy(para);
};

module.exports = RN;