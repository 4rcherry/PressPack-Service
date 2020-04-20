const createError   = require('http-errors');
const express       = require('express');
const path          = require('path');
const cookieParser  = require('cookie-parser');
const logger        = require('morgan');
const bodyParser    = require('body-parser');
const cors          = require('cors');
const mongoose      = require('mongoose');


const indexRouter               = require('./routes/index');
const usersRouter               = require('./routes/users');
const supplierRouter            = require('./routes/Suppliers');
const materialRouter            = require('./routes/Materials');
const materialInventoryRouter   = require('./routes/MaterialInventories');
const materialStorageRouter     = require('./routes/MaterialStorages');
const productRouter             = require('./routes/Products');
const productInventoryRouter    = require('./routes/ProductInventories');
const productStorageRouter      = require('./routes/ProductStorages');
const customerRouter            = require('./routes/Customers');
const customerInventoryRouter   = require('./routes/CusomerInventories');
const customerStorageRouter     = require('./routes/CustomerStorage');

const app = express();
require('dotenv').config();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
        return res.status(200).json({} )
    }
    next()
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/supplier', supplierRouter);
app.use('/material', materialRouter);
app.use('/material/inventory', materialInventoryRouter);
app.use('/material/storage', materialStorageRouter);
app.use('/product', productRouter);
app.use('/product/inventory', productInventoryRouter);
app.use('/product/storage', productStorageRouter);
app.use('/customer', customerRouter);
app.use('/customer/inventory', customerInventoryRouter);
app.use('/customer/storage', customerStorageRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

mongoose.connect(
    process.env.DB_ACCESS,
    { useNewUrlParser: true, useUnifiedTopology: true},
    () => console.log('[INFO]: Database Server Connected!')
);

module.exports = app;

console.log('[INFO]: Application Server Running on ' + process.env.PORT);