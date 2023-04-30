const { writeFileSync } = require("fs");
const express = require("express")
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
const adminRouter = require("./routes/admin")
const shopRouter = require('./routes/shop');
const path = require('path')

app.use('/admin', adminRouter)
app.use(shopRouter)
app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', 'pageNotFound.html'))

})
app.listen(3001)    