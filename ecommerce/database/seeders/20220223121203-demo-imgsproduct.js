'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Pictures', [
      {
      Name: 'Alimento Royal Canin1.jpeg',
      Product_Id: 22
    }, {
      Name: 'Alimento Royal Canin2.png',
      Product_Id: 22
    }, {
      Name: 'Alimento Royal Canin3.png',
      Product_Id: 22
    },
    {
      Name: 'Bandeja Sanitaria1.jpeg',
      Product_Id: 23
    }, {
      Name: 'Bandeja Sanitaria2.jpeg',
      Product_Id: 23
    }, {
      Name: 'Bandeja Sanitaria3.jpeg',
      Product_Id: 23
    },
    {
      Name: 'Cama Little Arena1.jpeg',
      Product_Id: 24
    }, {
      Name: 'Cama Little Arena2.jpeg',
      Product_Id: 24
    }, {
      Name: 'Cama Little Arena3.jpeg',
      Product_Id: 24
    },
    {
      Name: 'Comedero Flippy.jpeg',
      Product_Id: 25
    }, {
      Name: 'Comedero Flippy.jpeg',
      Product_Id: 25
    }, {
      Name: 'Comedero Flippy.jpeg',
      Product_Id: 25
    },
    {
      Name: 'Correa extensible1.jpeg',
      Product_Id: 26
    }, {
      Name: 'Correa extensible2.jpeg',
      Product_Id: 26
    }, {
      Name: 'Correa extensible3.jpeg',
      Product_Id: 26
    },
    {
      Name: 'Cucha chica1.jpeg',
      Product_Id: 27
    }, {
      Name: 'Cucha chica2.jpeg',
      Product_Id: 27
    }, {
      Name: 'Cucha chica3.jpeg',
      Product_Id: 27
    },
    {
      Name: 'Cucha Kenny1.jpeg',
      Product_Id: 28
    }, {
      Name: 'Cucha Kenny2.jpeg',
      Product_Id: 28
    }, {
      Name: 'Cucha Kenny3.jpeg',
      Product_Id: 28
    },
    {
      Name: 'Juguete para Gato1.jpeg',
      Product_Id: 29
    }, {
      Name: 'Juguete para Gato2.jpeg',
      Product_Id: 29
    }, {
      Name: 'Juguete para Gato3.jpeg',
      Product_Id: 29
    },
    {
      Name: 'Juguete Goodbite1.jpeg',
      Product_Id: 30
    }, {
      Name: 'Juguete Goodbite2.jpeg',
      Product_Id: 30
    }, {
      Name: 'Juguete Goodbite3.jpeg',
      Product_Id: 30
    },
    {
      Name: 'Litera Catego1.jpeg',
      Product_Id: 31
    }, {
      Name: 'Litera Catego2.jpeg',
      Product_Id: 31
    }, {
      Name: 'Litera Catego3.jpeg',
      Product_Id: 31
    },
    {
      Name: 'Litera magix1.jpeg',
      Product_Id: 32
    }, {
      Name: 'Litera magix2.jpeg',
      Product_Id: 32
    }, {
      Name: 'Litera magix3.jpeg',
      Product_Id: 32
    },
    {
      Name: 'Moises Pet1.jpeg',
      Product_Id: 33
    }, {
      Name: 'Moises Pet2.jpeg',
      Product_Id: 33
    }, {
      Name: 'Moises Pet3.jpeg',
      Product_Id: 33
    },
    {
      Name: 'Pelota Fitness1.jpeg',
      Product_Id: 34
    }, {
      Name: 'Pelota Fitness2.jpeg',
      Product_Id: 34
    }, {
      Name: 'Pelota Fitness3.jpeg',
      Product_Id: 34
    },
    {
      Name: 'Pelota Pawise1.jpeg',
      Product_Id: 35
    }, {
      Name: 'Pelota Pawise2.jpeg',
      Product_Id: 35
    }, {
      Name: 'Pelota Pawise3.jpeg',
      Product_Id: 35
    },
    {
      Name: 'Rascador1.jpeg',
      Product_Id: 36
    }, {
      Name: 'Rascador2.jpeg',
      Product_Id: 36
    }, {
      Name: 'Rascador3.jpeg',
      Product_Id: 36
    },
    {
      Name: 'Shampoo Antiparasitario1.jpeg',
      Product_Id: 37
    }, {
      Name: 'Shampoo Antiparasitario2.jpeg',
      Product_Id: 37
    }, {
      Name: 'Shampoo Antiparasitario3.jpeg',
      Product_Id: 37
    },
  ]
    )},

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Pictures', null, {});

  }
};
