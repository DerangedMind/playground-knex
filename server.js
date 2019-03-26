const http = require('http')
const path = require('path')
const express = require('express')
const knexConfig = require('./db/knexfile');
const knex = require('knex')(knexConfig);
const app = express()

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'))


app.get(['/', '/pastries'], (req, res) => {
  knex('pastries').asCallback((err, rows) => {
    if (err) console.error(err)

    res.render('index', { pastries: rows })
  })
})

app.get('/pastries/:id', (req, res) => {
  knex('pastries').where('id', req.params.id).asCallback((err, rows) => {
    if (err) console.error(err)

    res.render('show', { pastry: rows[0] })
  })
})

app.listen(process.env.PORT || 3000, () =>
  console.log('Server listening on port ' + (process.env.PORT || 3000))
)
