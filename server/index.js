const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/Users');

const corsOptions = {
  origin: "http://localhost:5173/",
  methods:[ "GET", "POST", "DELETE"],
  credentials: true,
}

const app = express();
app.use(cors(corsOptions)); 
app.use(express.json());


main()
    .then(() => {
        console.log("connection sucessfull");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/crud');
}

app.get('/', (req, res) => {
  UserModel.find({})
  .then(users => res.json(users))
  .catch(err => res.json(err))
})

app.post('/createUser', async (req, res) => {
  try {
    const user = await UserModel.create(req.body);
    res.status(201).json(user); 
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(3000, () => {
  console.log('Server is Running 3000');
});
