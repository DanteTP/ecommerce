'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [
      {id: 1,
      Name: 'Perros',
      Subcategory: 0
    },
    {id: 2,
      Name: 'Gatos',
      Subcategory: 0
    },
    {id: 3,
      Name: 'Peces',
      Subcategory: 0
    },
    {id: 4,
      Name: 'Alimentos',
      Subcategory: 1
    },
    {id: 5,
      Name: 'Cuchas',
      Subcategory: 1
    },
    {id: 6,
      Name: 'Juguetes',
      Subcategory: 1
    },
    {id: 7,
      Name: 'Comederos',
      Subcategory: 1
    },
    {id: 8,
      Name: 'Alimentos',
      Subcategory: 2
    },
    {id: 9,
      Name: 'Cuchas',
      Subcategory: 2
    },
    {id: 10,
      Name: 'Juguetes',
      Subcategory: 2
    },
    {id: 11,
      Name: 'Comederos',
      Subcategory: 2
    },
    {id: 12,
      Name: 'Alimentos',
      Subcategory: 3
    },
    {id: 13,
      Name: 'Peceras',
      Subcategory: 3
    },
    {id: 14,
      Name: 'Accesorios',
      Subcategory: 3
    },
    {id: 15,
      Name: 'Plantas',
      Subcategory: 3
    }
  ]
    )},
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {});
  }
};
