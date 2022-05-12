let db = require("../../database/models");
const { Op } = db.Sequelize;

module.exports = {
    checkoutaddress : async (req,res,next)=>{
        let addresses = await db.Adresses.findAll({where:{User_Id:req.params.addresid}})
        res.json({
            meta:{
                status: 200,
                length:addresses.length,
                link: 'userapi/user/address/:addresid'
            },
            data: addresses
          })

 }
}