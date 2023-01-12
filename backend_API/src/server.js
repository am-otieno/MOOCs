if (process.env.NODE_ENV) {
  require('dotenv').config({ path: `${__dirname}/.env.${process.env.NODE_ENV}` })
} else {require('dotenv').config({path: `${__dirname}/.env`})}

console.log(__dirname)
const { MONGO_URI, PORT } = require('./utils/config')

const app = require('./app')

const connectDatabase = require('./db/connectDB')

async function start() {
  try {
    await connectDatabase(MONGO_URI)

    app.listen(PORT, function () {
      console.log(`Server is running on port ${PORT}....`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
