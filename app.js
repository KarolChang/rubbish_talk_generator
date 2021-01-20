// require modules
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateTalk = require('./generate_talk')
const app = express()

// require template modules
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// use bodyParser
app.use(bodyParser.urlencoded({ extended: true }))

// variables of server
const port = 3000

// req res
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const option = req.body
  const rubbishTalk = generateTalk(option)
  res.render('index', { rubbishTalk })
})



// listen the server
app.listen(port, () => {
  console.log(`The server is running on http://localhost:${port}`)
})
