import { verifyToken } from "../helpers/jwt.js";

export function checkUser(req, res, next) {
  var token = req.headers?.authorization?.split(" ")?.[1];

  const { error, decode } = verifyToken("access", token);

  req.user = decode;

  next();
}

export function checkSupperAdmin(req, res, next) {
  const userRole = {isSupperAdmin:true}
  var token = req.headers?.authorization?.split(" ")?.[1];
  
  const decode = verifyToken("access", token);

  if (!userRole.isSupperAdmin) {
    return res.status(409).send({
      message: "Uka, sen Super Admin emassan. Sur battan!!!"
    });
  }

  req.user = decode; 
  next();
}


export function checkAdmin(req, res, next) {
  var userRole = { isSupperAdmin: true, isAdmin: true };
  var token = req.headers?.authorization?.split(" ")?.[1];

  const { error, decode } = verifyToken("access", token);

  if (error) {
    return res.status(401).send({ message: "Yaroqsiz token yoki token tasdiqlanmadi" });
  }

  if (!decode || decode.isSupperAdmin !== userRole.isSupperAdmin || decode.isAdmin !== userRole.isAdmin) {
    return res.status(409).send({
      message: "Uka, sen Super Admin ham, Admin ham emassan. Sur battan!"
    });
  }

  req.user = decode;
  next();
}


// export function 