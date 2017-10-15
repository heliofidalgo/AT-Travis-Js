const DAO = {};

var Sequelize = require('sequelize');
var sequelize = new Sequelize('pokemons', null, null, {
	dialect: 'sqlite'
});

var Pokemon = sequelize.define('pokemon', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	price: {
		type: Sequelize.INTEGER,
		allowNull: false
	},
	stock: {
		type: Sequelize.INTEGER,
		allowNull: true,
		defaultValue: 1
	}
});

Pokemon.sync({force: true}).then(function () {
	console.log('Model is ready!');
});

DAO.get = () => {
    return Pokemon.findAll();
};

DAO.getOne = (param) => {
   return Pokemon.findOne({
		where: {
			name: param
		}
	});
};

DAO.create = (param) => {
    return Pokemon.create(param);
};

DAO.buy = (param) => {
    return Pokemon.findOne({
		where: {
			name: param
		}
	});
};

module.exports = DAO;