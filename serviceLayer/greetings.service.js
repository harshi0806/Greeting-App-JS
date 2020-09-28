// const username = process.argv[2].split('=')[1]
// console.log(`Hello, ${username}`) 
const connectionString = 'mongodb://localhost:27017/test'
const mongoose = require('mongoose')
const userSchema = require('../models/greetings.model.js')
const User = mongoose.model('user', userSchema)

async function createUser(firstName, lastName, greeting) {
  return new User({
    firstName,
    lastName,
    greeting
  }).save()
}

async function findUser(firstName, lastName, greeting) {
  return await User.findOne({ firstName, lastName, greeting })
}

;(async () => {
  const connector = mongoose.connect(connectionString)
  const firstName = process.argv[2].split('_')[1]
  const lastName = process.argv[2].split('_')[2]
  const greeting = process.argv[2].split('_')[3]

  let user = await connector.then(async () => {
    return findUser(firstName, lastName, greeting)
  })

  if (!user) {
    user = await createUser(firstName, lastName, greeting)
  }

  console.log(`Hello, ${user}`)
  process.exit(0)
})()