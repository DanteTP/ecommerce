module.exports = function (req,res,next){
if(req.cookies.Usercookie){
    req.user = req.cookies.Usercookie
    next()
}else if(req.session.Userdata){
    req.user = req.session.Userdata
    next()
  }else{
    req.user =''
    next()
}
}
