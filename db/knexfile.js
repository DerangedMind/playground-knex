module.exports = {
  client: 'pg',
  connection:'postgres://localhost/desserts',
  migrations: {
    directory: './db/migrations'
  },
  seeds: {
    directory: './db/seeds'
  },
  useNullAsDefault: true
}
