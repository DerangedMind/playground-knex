const knexConfig = require('./db/knexfile')
const knex = require('knex')(knexConfig)


// 1) Retrieve all pastries from DB and print all results

// a) using asCallback

knex('pastries').asCallback((err, rows) => {
  console.log('Requested all pastries...')

  if (err) console.error(err)

  console.log(rows)
  knex.destroy()
})

// b) using Promises

knex('pastries').then(rows => {
  console.log(rows)
  knex.destroy()
}).catch(err => {
  console.error(err)
}).finally(() => {
  console.log('Requested all pastries...')
})

// 2) Retrieve one pastry from DB, where name === "Danish"

// a) using asCallback

// b) using Promises

// 3) Insert new pastry into table

// a) using asCallback

// b) using Promises

// 4) Render pastries on a page

// a) using asCallback

// b) using Promises
