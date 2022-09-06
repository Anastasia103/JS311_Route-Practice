const express = require("express");
const bodyParser = require("body-parser");
const { response } = require("express");

const contactRoutes = require("./routes/contacts");
const vehiclesRoutes = require("./routes/vehicles");
const commentRoutes = require("./routes/comments")
const productRoutes = require("./routes/products")

const app = express();
app.use(express.static("public"))
app.use(bodyParser.json())

app.use(contactRoutes)
app.use(vehiclesRoutes)
app.use(commentRoutes)
app.use(productRoutes)

const port = process.env.PORT || 4001;

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});


