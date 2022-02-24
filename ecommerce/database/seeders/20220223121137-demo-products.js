'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [
      {
       Name: "Alimento Royal Canin",
       Description: "fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse",
       Price: 3574,
       Discount: 30,
       Offer: "normal",

      },
      {
       Name: "Bandeja Sanitaria",
       Description: "nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris",
       Price: 1679,
       Discount: 25,
       Offer: "normal",

      },
      {
       Name: "Cama Little Arena",
       Price: 4705,
       Discount: 10,
       Description: "placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante",
       Offer: "normal",

      },
      {
       Name: "Comedero Flippy",
       Price: 4063,
       Discount: 0,
       Description: "nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh",
       Offer: "normal",

      },
      {
       Name: "Correa Extensible",
       Price: 2687,
       Discount: 35,
       Description: "mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec",
       Offer: "normal",

      },
      {
       Name: "Cucha Chica",
       Price: 9700,
       Discount: 0,
       Description: "sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium",
       Offer: "normal",
      },
      {
       Name: "Cucha Kenny",
       Price: 7662,
       Discount: 0,
       Description: "elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero",
       Offer: "normal",

      },
      {
       Name: "Juguete para Gato",
       Price: 3712,
       Discount: 0,
       Description: "fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse",
       Offer: "normal",

      },
      {
       Name: "Juguete Goodbite",
       Price: 3711,
       Discount: 0,
       Description: "rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia",
       Offer: "normal",

      },
      {
       Name: "Litera Catego",
       Price: 691,
       Discount: 20,
       Description: "urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper",
       Offer: "normal",

      },
      {
       Name: "Litera Magix",
       Price: 2116,
       Discount: 50,
       Description: "turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean",
       Offer: "normal",

      },
      {
       Name: "Moises Pet",
       Price: 22039,
       Discount: 0,
       Description: "aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque",
       Offer: "normal",

      },
      {
       Name: "Pelota Fitness",
       Price: 2595,
       Discount: 0,
       Description: "convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo",
       Offer: "normal",

      },
      {
       Name: "Pelota Pawise",
       Price: 4278,
       Discount: 0,
       Description: "faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi",
       Offer: "normal",

      },
      {
       Name: "Rascador",
       Price: 731,
       Discount: 0,
       Description: "vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis",
       Offer: "normal",

      },
      {
       Name: "Shampoo Antiparasitario",
       Price: 4278,
       Discount: 0,
       Description: "faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi",
       Offer: "normal",

      }
     ]
    )},
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});

  }
};
