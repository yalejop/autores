const  moongoose = require("mongoose");

moongoose.connect("mongodb://localhost/autores", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("conectado a DB"))
    .catch(err => console.log(err))