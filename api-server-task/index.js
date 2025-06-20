const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://richakumarirk03:1aMjveSJ1TSUFMBH@cluster0.yootsq8.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))

// Define Mongoose model
const User = mongoose.model('User', {
  name: String,
  email: String,
  age: Number
})

// GET all users
app.get('/api/users', async (req, res) => {
  const users = await User.find()
  res.json(users)
})

// POST a new user
app.post('/api/users', async (req, res) => {
  const user = new User(req.body)
  await user.save()
  res.status(201).json(user)
})

// PUT update user
app.put('/api/users/:id', async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
  res.json(user)
})

// DELETE user
app.delete('/api/users/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id)
  res.json({ message: 'User deleted' })
})

app.listen(3000, () => console.log("Server running on http://localhost:3000"))
