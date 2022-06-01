// config.js
const dotenv = require('dotenv');
let PORT = 0
if (process.env.NODE_ENV == 'development')
{
    PORT = 5000;
}
else if (process.env.NODE_ENV == 'production')
{
    PORT = 8080;
}
module.exports = {        
    PORT: PORT
  }