
const RN = require('./../rn/pokemonRN');
const CONTROL = {};

CONTROL.get = (req, res) => {
    RN.get()
    .then(
        (response) => {
            res.status(200).json(response);
        }
    )
    .catch(
        (error) => {
            res.status(400).json(error);
        }
    );
};

CONTROL.getOne = (req, res) => {
    RN.getOne(req.params.name)
    .then(
        (response) => {
            res.status(200).json(response);
        }
    )
    .catch(
        (error) => {
            res.status(400).json(error);
        }
    );
};

CONTROL.create = (req, res) => {
    RN.create(req.body)
    .then(
        (response) => {
            res.status(201).json(response);
        }
    )
    .catch(
        (error) => {
            res.status(400).json(error);
        }
    );
};

CONTROL.buy = (req, res) => {
    RN.buy(req.body)
    .then(
        (response) => {
            res.status(201).json(response);
        }
    )
    .catch(
        (error) => {
            res.status(400).json(error);
        }
    );
};

module.exports = CONTROL;
