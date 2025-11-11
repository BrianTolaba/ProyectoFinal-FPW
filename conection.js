const mongoose = require('mongoose');
mongoose.connect

    ("mongodb+srv://sebagariki_db_user:6QyStlg11Njq7TFz@cluster0.kyhjjp3.mongodb.net/tudivj?appName=Cluster0");

const objeto = mongoose.connection;

objeto.on('connected', () => {
    console.log("Conectado a la BD Mongo FPW 2025...")
});
objeto.on('error', () => {
    console.log("Se produho un erro en la conexion con Mongo BD")
})

module.exports = mongoose; 
