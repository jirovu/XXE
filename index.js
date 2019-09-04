const express = require('express');
const loginRouter = require('./route/login');
const fileUpload = require('express-fileupload');
const app = express();
const port = 3000;

app.set('view engine', 'ejs')

app.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
}));

app.use('/login', loginRouter);
app.use('*', (req, res, next) => res.render('index'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));