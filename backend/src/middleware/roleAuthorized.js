
const userRole = function(role){
  return (req, res, next) => {
    console.log('Expected roles:', role);
    console.log('User roles:', req.user.role);
      // if (!role.includes(req.user.role)) {
        if (!req.user || !req.user.role || !role.includes(req.user.role)) {
        console.log('Access denied!');

         return res.status(401).json({ message: 'you dont have access to this route!' })
      }
       console.log('Access granted!');
      next();  
  }
} 

module.exports = userRole