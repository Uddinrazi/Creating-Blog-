const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const sequelize = require('./util/database')
const path = require('path')

const app = express()
const blogRouters = require('./routes/blogs')

app.use(cors())
app.use(bodyParser.json())

app.use('/blogs', blogRouters)

app.use(express.static(path.join(__dirname, "/public")))


sequelize.sync({force: false})
.then((result) => {
    app.listen(5000)
}).catch(err => {
    console.log(err)
})


//http://localhost:5000/blogs/get-comments/5