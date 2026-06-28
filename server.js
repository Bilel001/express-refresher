require('dotenv').config();

const cors = require('cors');

const express = require('express');

const productsRouter = require('./products');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors({
    origin: ['http://localhost:5500', 'http://127.0.0.1:5500']
}));

app.use((req, res, next) => {
    console.log(req.method, req.path);
    next();
})

app.use(express.json());   //tells express to parse the request json format and put it in the req.body obj
// otherwise req.body will be unndefined

app.use('/products', productsRouter);

app.get('/', (req, res) => {
    res.send('Express is working well');
});



app.get('/message', (req, res) => {
    res.json({message: 'hello from the backend'});
});

app.post('/message', (req, res) => {
    const {name, message} = req.body;
    console.log('new message: ', name, message);
    res.json({message: 'Thank you for your message'});
})

app.listen(PORT, () => {
    console.log(`The server is running on Port ${PORT}`);
});