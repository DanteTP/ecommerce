'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [{
      Tittle: 'Lorem ipsum dolor sit amet.',
      Description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, voluptate architecto soluta laborum corrupti placeat necessitatibus nisi iusto delectus doloremque cum nulla officiis saepe eos pariatur accusantium autem. Ea fugit iure porro animi in sit atque quo ipsa! Nam, explicabo.',
      Stars: 5,
      Product_Id: 22 ,
      User_Id: 17,
    },
    {
      Tittle: 'Lorem ipsum dolor sit amet.',
      Description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, voluptate architecto soluta laborum corrupti placeat necessitatibus nisi iusto delectus doloremque cum nulla officiis saepe eos pariatur accusantium autem. Ea fugit iure porro animi in sit atque quo ipsa! Nam, explicabo.',
      Stars: 2,
      Product_Id: 22 ,
      User_Id: 17,
    },{
      Tittle: 'Lorem ipsum dolor sit amet.',
      Description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, voluptate architecto soluta laborum corrupti placeat necessitatibus nisi iusto delectus doloremque cum nulla officiis saepe eos pariatur accusantium autem. Ea fugit iure porro animi in sit atque quo ipsa! Nam, explicabo.',
      Stars: 3,
      Product_Id: 22 ,
      User_Id: 17,
    },{
      Tittle: 'Lorem ipsum dolor sit amet.',
      Description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, voluptate architecto soluta laborum corrupti placeat necessitatibus nisi iusto delectus doloremque cum nulla officiis saepe eos pariatur accusantium autem. Ea fugit iure porro animi in sit atque quo ipsa! Nam, explicabo.',
      Stars: 4,
      Product_Id: 22 ,
      User_Id: 17,
    },{
      Tittle: 'Lorem ipsum dolor sit amet.',
      Description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, voluptate architecto soluta laborum corrupti placeat necessitatibus nisi iusto delectus doloremque cum nulla officiis saepe eos pariatur accusantium autem. Ea fugit iure porro animi in sit atque quo ipsa! Nam, explicabo.',
      Stars: 4,
      Product_Id: 22 ,
      User_Id: 17,
    },
    {
      Tittle: 'Lorem ipsum dolor sit amet.',
      Description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, voluptate architecto soluta laborum corrupti placeat necessitatibus nisi iusto delectus doloremque cum nulla officiis saepe eos pariatur accusantium autem. Ea fugit iure porro animi in sit atque quo ipsa! Nam, explicabo.',
      Stars: 5,
      Product_Id: 23,
      User_Id: 17,
    },
    {
      Tittle: 'Lorem ipsum dolor sit amet.',
      Description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, voluptate architecto soluta laborum corrupti placeat necessitatibus nisi iusto delectus doloremque cum nulla officiis saepe eos pariatur accusantium autem. Ea fugit iure porro animi in sit atque quo ipsa! Nam, explicabo.',
      Stars: 2,
      Product_Id: 23,
      User_Id: 17,
    },{
      Tittle: 'Lorem ipsum dolor sit amet.',
      Description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, voluptate architecto soluta laborum corrupti placeat necessitatibus nisi iusto delectus doloremque cum nulla officiis saepe eos pariatur accusantium autem. Ea fugit iure porro animi in sit atque quo ipsa! Nam, explicabo.',
      Stars: 3,
      Product_Id: 23,
      User_Id: 17,
    },{
      Tittle: 'Lorem ipsum dolor sit amet.',
      Description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, voluptate architecto soluta laborum corrupti placeat necessitatibus nisi iusto delectus doloremque cum nulla officiis saepe eos pariatur accusantium autem. Ea fugit iure porro animi in sit atque quo ipsa! Nam, explicabo.',
      Stars: 4,
      Product_Id: 23,
      User_Id: 17,
    },{
      Tittle: 'Lorem ipsum dolor sit amet.',
      Description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, voluptate architecto soluta laborum corrupti placeat necessitatibus nisi iusto delectus doloremque cum nulla officiis saepe eos pariatur accusantium autem. Ea fugit iure porro animi in sit atque quo ipsa! Nam, explicabo.',
      Stars: 4,
      Product_Id: 23,
      User_Id: 17,
    },{
      Tittle: 'Lorem ipsum dolor sit amet.',
      Description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, voluptate architecto soluta laborum corrupti placeat necessitatibus nisi iusto delectus doloremque cum nulla officiis saepe eos pariatur accusantium autem. Ea fugit iure porro animi in sit atque quo ipsa! Nam, explicabo.',
      Stars: 5,
      Product_Id: 24,
      User_Id: 17,
    },
    {
      Tittle: 'Lorem ipsum dolor sit amet.',
      Description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, voluptate architecto soluta laborum corrupti placeat necessitatibus nisi iusto delectus doloremque cum nulla officiis saepe eos pariatur accusantium autem. Ea fugit iure porro animi in sit atque quo ipsa! Nam, explicabo.',
      Stars: 2,
      Product_Id: 24,
      User_Id: 17,
    },{
      Tittle: 'Lorem ipsum dolor sit amet.',
      Description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, voluptate architecto soluta laborum corrupti placeat necessitatibus nisi iusto delectus doloremque cum nulla officiis saepe eos pariatur accusantium autem. Ea fugit iure porro animi in sit atque quo ipsa! Nam, explicabo.',
      Stars: 3,
      Product_Id: 24,
      User_Id: 17,
    },{
      Tittle: 'Lorem ipsum dolor sit amet.',
      Description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, voluptate architecto soluta laborum corrupti placeat necessitatibus nisi iusto delectus doloremque cum nulla officiis saepe eos pariatur accusantium autem. Ea fugit iure porro animi in sit atque quo ipsa! Nam, explicabo.',
      Stars: 4,
      Product_Id: 24,
      User_Id: 17,
    },{
      Tittle: 'Lorem ipsum dolor sit amet.',
      Description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, voluptate architecto soluta laborum corrupti placeat necessitatibus nisi iusto delectus doloremque cum nulla officiis saepe eos pariatur accusantium autem. Ea fugit iure porro animi in sit atque quo ipsa! Nam, explicabo.',
      Stars: 4,
      Product_Id: 24,
      User_Id: 17,
    },
    {
      Tittle: 'Lorem ipsum dolor sit amet.',
      Description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, voluptate architecto soluta laborum corrupti placeat necessitatibus nisi iusto delectus doloremque cum nulla officiis saepe eos pariatur accusantium autem. Ea fugit iure porro animi in sit atque quo ipsa! Nam, explicabo.',
      Stars: 5,
      Product_Id: 25,
      User_Id: 17,
    },
    {
      Tittle: 'Lorem ipsum dolor sit amet.',
      Description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, voluptate architecto soluta laborum corrupti placeat necessitatibus nisi iusto delectus doloremque cum nulla officiis saepe eos pariatur accusantium autem. Ea fugit iure porro animi in sit atque quo ipsa! Nam, explicabo.',
      Stars: 2,
      Product_Id: 25,
      User_Id: 17,
    },{
      Tittle: 'Lorem ipsum dolor sit amet.',
      Description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, voluptate architecto soluta laborum corrupti placeat necessitatibus nisi iusto delectus doloremque cum nulla officiis saepe eos pariatur accusantium autem. Ea fugit iure porro animi in sit atque quo ipsa! Nam, explicabo.',
      Stars: 3,
      Product_Id: 25,
      User_Id: 17,
    },{
      Tittle: 'Lorem ipsum dolor sit amet.',
      Description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, voluptate architecto soluta laborum corrupti placeat necessitatibus nisi iusto delectus doloremque cum nulla officiis saepe eos pariatur accusantium autem. Ea fugit iure porro animi in sit atque quo ipsa! Nam, explicabo.',
      Stars: 4,
      Product_Id: 25,
      User_Id: 17,
    },{
      Tittle: 'Lorem ipsum dolor sit amet.',
      Description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, voluptate architecto soluta laborum corrupti placeat necessitatibus nisi iusto delectus doloremque cum nulla officiis saepe eos pariatur accusantium autem. Ea fugit iure porro animi in sit atque quo ipsa! Nam, explicabo.',
      Stars: 4,
      Product_Id: 25,
      User_Id: 17,
    },
    {
      Tittle: 'Lorem ipsum dolor sit amet.',
      Description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, voluptate architecto soluta laborum corrupti placeat necessitatibus nisi iusto delectus doloremque cum nulla officiis saepe eos pariatur accusantium autem. Ea fugit iure porro animi in sit atque quo ipsa! Nam, explicabo.',
      Stars: 5,
      Product_Id: 26,
      User_Id: 17,
    },
    {
      Tittle: 'Lorem ipsum dolor sit amet.',
      Description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, voluptate architecto soluta laborum corrupti placeat necessitatibus nisi iusto delectus doloremque cum nulla officiis saepe eos pariatur accusantium autem. Ea fugit iure porro animi in sit atque quo ipsa! Nam, explicabo.',
      Stars: 2,
      Product_Id: 26,
      User_Id: 17,
    },{
      Tittle: 'Lorem ipsum dolor sit amet.',
      Description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, voluptate architecto soluta laborum corrupti placeat necessitatibus nisi iusto delectus doloremque cum nulla officiis saepe eos pariatur accusantium autem. Ea fugit iure porro animi in sit atque quo ipsa! Nam, explicabo.',
      Stars: 3,
      Product_Id: 26,
      User_Id: 17,
    },{
      Tittle: 'Lorem ipsum dolor sit amet.',
      Description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, voluptate architecto soluta laborum corrupti placeat necessitatibus nisi iusto delectus doloremque cum nulla officiis saepe eos pariatur accusantium autem. Ea fugit iure porro animi in sit atque quo ipsa! Nam, explicabo.',
      Stars: 4,
      Product_Id: 26,
      User_Id: 17,
    },{
      Tittle: 'Lorem ipsum dolor sit amet.',
      Description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, voluptate architecto soluta laborum corrupti placeat necessitatibus nisi iusto delectus doloremque cum nulla officiis saepe eos pariatur accusantium autem. Ea fugit iure porro animi in sit atque quo ipsa! Nam, explicabo.',
      Stars: 4,
      Product_Id: 26,
      User_Id: 17,
    },
    {
      Tittle: 'Lorem ipsum dolor sit amet.',
      Description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, voluptate architecto soluta laborum corrupti placeat necessitatibus nisi iusto delectus doloremque cum nulla officiis saepe eos pariatur accusantium autem. Ea fugit iure porro animi in sit atque quo ipsa! Nam, explicabo.',
      Stars: 5,
      Product_Id: 27,
      User_Id: 17,
    },
    {
      Tittle: 'Lorem ipsum dolor sit amet.',
      Description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, voluptate architecto soluta laborum corrupti placeat necessitatibus nisi iusto delectus doloremque cum nulla officiis saepe eos pariatur accusantium autem. Ea fugit iure porro animi in sit atque quo ipsa! Nam, explicabo.',
      Stars: 2,
      Product_Id: 27,
      User_Id: 17,
    },{
      Tittle: 'Lorem ipsum dolor sit amet.',
      Description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, voluptate architecto soluta laborum corrupti placeat necessitatibus nisi iusto delectus doloremque cum nulla officiis saepe eos pariatur accusantium autem. Ea fugit iure porro animi in sit atque quo ipsa! Nam, explicabo.',
      Stars: 3,
      Product_Id: 27,
      User_Id: 17,
    },{
      Tittle: 'Lorem ipsum dolor sit amet.',
      Description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, voluptate architecto soluta laborum corrupti placeat necessitatibus nisi iusto delectus doloremque cum nulla officiis saepe eos pariatur accusantium autem. Ea fugit iure porro animi in sit atque quo ipsa! Nam, explicabo.',
      Stars: 4,
      Product_Id: 27,
      User_Id: 17,
    },{
      Tittle: 'Lorem ipsum dolor sit amet.',
      Description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, voluptate architecto soluta laborum corrupti placeat necessitatibus nisi iusto delectus doloremque cum nulla officiis saepe eos pariatur accusantium autem. Ea fugit iure porro animi in sit atque quo ipsa! Nam, explicabo.',
      Stars: 4,
      Product_Id: 27,
      User_Id: 17,
    },
  ]);

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
