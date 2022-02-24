'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Pictures', [
      {
      Name: 'Alimento Royal Canin1',
      Product_Id: 22
    }, {
      Name: 'Alimento Royal Canin2',
      Product_Id: 22
    }, {
      Name: 'Alimento Royal Canin3',
      Product_Id: 22
    },
    {
      Name: 'Bandeja Sanitaria1',
      Product_Id: 23
    }, {
      Name: 'Bandeja Sanitaria2',
      Product_Id: 23
    }, {
      Name: 'Bandeja Sanitaria3',
      Product_Id: 23
    },
    {
      Name: 'Cama Little Arena1',
      Product_Id: 24
    }, {
      Name: 'Cama Little Arena2',
      Product_Id: 24
    }, {
      Name: 'Cama Little Arena3',
      Product_Id: 24
    },
    {
      Name: 'Comedero Flippy',
      Product_Id: 25
    }, {
      Name: 'Comedero Flippy',
      Product_Id: 25
    }, {
      Name: 'Comedero Flippy',
      Product_Id: 25
    },
    {
      Name: 'Correa extensible1',
      Product_Id: 26
    }, {
      Name: 'Correa extensible2',
      Product_Id: 26
    }, {
      Name: 'Correa extensible3',
      Product_Id: 26
    },
    {
      Name: 'Cucha chica1',
      Product_Id: 27
    }, {
      Name: 'Cucha chica2',
      Product_Id: 27
    }, {
      Name: 'Cucha chica3',
      Product_Id: 27
    },
    {
      Name: 'Cucha Kenny1',
      Product_Id: 28
    }, {
      Name: 'Cucha Kenny2',
      Product_Id: 28
    }, {
      Name: 'Cucha Kenny3',
      Product_Id: 28
    },
    {
      Name: 'Juguete para Gato1',
      Product_Id: 29
    }, {
      Name: 'Juguete para Gato2',
      Product_Id: 29
    }, {
      Name: 'Juguete para Gato3',
      Product_Id: 29
    },
    {
      Name: 'Juguete Goodbite1',
      Product_Id: 30
    }, {
      Name: 'Juguete Goodbite2',
      Product_Id: 30
    }, {
      Name: 'Juguete Goodbite3',
      Product_Id: 30
    },
    {
      Name: 'Litera Catego1',
      Product_Id: 31
    }, {
      Name: 'Litera Catego2',
      Product_Id: 31
    }, {
      Name: 'Litera Catego3',
      Product_Id: 31
    },
    {
      Name: 'Litera magix1',
      Product_Id: 32
    }, {
      Name: 'Litera magix2',
      Product_Id: 32
    }, {
      Name: 'Litera magix3',
      Product_Id: 32
    },
    {
      Name: 'Moises Pet1',
      Product_Id: 33
    }, {
      Name: 'Moises Pet2',
      Product_Id: 33
    }, {
      Name: 'Moises Pet3',
      Product_Id: 33
    },
    {
      Name: 'Pelota Fitness1',
      Product_Id: 34
    }, {
      Name: 'Pelota Fitness2',
      Product_Id: 34
    }, {
      Name: 'Pelota Fitness3',
      Product_Id: 34
    },
    {
      Name: 'Pelota Pawise1',
      Product_Id: 35
    }, {
      Name: 'Pelota Pawise2',
      Product_Id: 35
    }, {
      Name: 'Pelota Pawise3',
      Product_Id: 35
    },
    {
      Name: 'Rascador1',
      Product_Id: 36
    }, {
      Name: 'Rascador2',
      Product_Id: 36
    }, {
      Name: 'Rascador3',
      Product_Id: 36
    },
    {
      Name: 'Shampoo Antiparasitario1',
      Product_Id: 37
    }, {
      Name: 'Shampoo Antiparasitario2',
      Product_Id: 37
    }, {
      Name: 'Shampoo Antiparasitario3',
      Product_Id: 37
    },
  ]
    )},

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Pictures', null, {});

  }
};
