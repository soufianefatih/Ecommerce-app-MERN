/* -------------------------------------------------------------------------- */
/*                               index || Server                              */
/* -------------------------------------------------------------------------- */

const app= require('./src/app');

require("dotenv").config();
require('./src/config/database')()

const {PORT} = process.env;
const PORTS = PORT || 5000;




app.listen(PORTS,()=>{
console.log(`Server is running on port ${PORT}`);
});
