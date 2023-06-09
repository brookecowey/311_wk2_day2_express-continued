const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const contacts = require("./routes/contacts");
const products = require("./routes/products");
const comments = require("./routes/comments");
const vehicles = require("./routes/vehicles");
app.use(express.static('public'))
app.use(bodyParser.json());
const port = process.env.PORT || 4000;
//`router.get('/contacts')`
//GET

app.use(contacts)

app.use(vehicles)

app.use(comments)

app.use(products)




app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
