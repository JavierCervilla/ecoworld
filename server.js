const express = require('express');
const connectDB = require('./config/db');
const app = express();

// Connect Database
connectDB();

// init Middleware
app.use(express.json({extended: false}));

// home placeholder...
app.get('/', (req, res)=>{
  res.send('Hello world')
});

// define routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/products', require('./routes/products'));

// define PORT and run the app
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{console.log(`App listening on port ${PORT}`)})
