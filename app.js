const express = require('express');
const app = express();
require('dotenv').config();
const swaggerUI = require('swagger-ui-express');
const bodyParser = require('body-parser');
const config = require('./config/config.js');
// const specs = require('./swagger.json')
// app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs))

// sequelize.authenticate().then(() => console.log("respon nodejs berhasil"));
var jsonParser = bodyParser.json({limit:"10mb", type:'application/json'}); 
var urlencodedParser = bodyParser.urlencoded({ extended:true,limit:"10mb",type:'application/x-www-form-urlencoded' });
app.use(urlencodedParser);
app.use(jsonParser);

console.log(`NODE_ENV=${config.PORT}`);
//routers
const ProductRoute = require('./routes/ProductRoute');
app.use('/Product', ProductRoute);

const AccountRoute = require('./routes/AccountRoute');
app.use('/Account', AccountRoute);

const LikeRoute = require('./routes/LikeRoute');
app.use('/Like', LikeRoute);

const PostRoute = require('./routes/PostRoute');
app.use('/Post', PostRoute);

const FollowRoute = require('./routes/FollowRoute');
app.use('/Follow', FollowRoute);

app.listen(config.PORT, () => console.log("port berjalan di " + `${config.PORT}`));