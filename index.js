const app = require('./app');
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function () {
    console.log('El servidor esta arrancando en el puerto: 3000');
})