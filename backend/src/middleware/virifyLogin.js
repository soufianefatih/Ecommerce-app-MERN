const jwt = require("jsonwebtoken");

const virifylogin =  function (req, res, next) {
  const token = req.header("Authorization");
  if (!token) {
    res.status(401).send({message: "Acess Denied"});
  }
  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    if (err) {
      res.json({ success: false, message: "Failed to authenticate token " });
    } else {
      // req.user = { _id: user.id };
      req.user = { _id: user.id, role: user.role };
      next();
    }
  });
};


module.exports = virifylogin







