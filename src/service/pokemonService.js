const DAO = require('./../dao/pokemonDAO');
const SERVICE = {};

SERVICE.get = (param) => {
    return DAO.get(param);
};

SERVICE.getOne = (param) => {
    return  DAO.getOne(param);
};

SERVICE.create = (param) => {
    return DAO.create(param);
};

SERVICE.buy = (param) => {
    return DAO.buy(para);
};

module.exports = SERVICE;