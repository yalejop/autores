const express = require("express");
const cors = require("cors");
const app = express();

//para usar json y obtener datos de URL
app.use(express.json(), express.urlencoded({ extended: true }));

//permite accesar desde un origen distinto
app.use(
    cors({
        //URL de front end
        origin: "http://localhost:3000"
    }),
);

//Inicializa DB
require("./server/config/mongoose.config");

//Importamos rutas
const misRutas = require("./server/routes/autor.routes");
misRutas(app);

//Ejecutamos server
app.listen(8000, ()=>console.log("Servidor listo !"));
