const express = require('express');
const app = express();

app.use(express.json());



const users = [
  {id: 1, firstName: "Muzamil"},
  {id: 2, firstName: "Mudasir"},
  {id: 3, firstName: "Muneeb"}
]


app.get('/', (req, res) => {
  res.send("Hello client, I am listening your requests")
})
app.get('/api/users', (req, res) => {
  res.send(users)
})
app.get('/api/users/:id', (req, res) => {
  const user = users.find((user) => user.id === parseInt(req.params.id))
  res.send(user)
})

app.post('/api/users', (req, res) => {

  let newUser = {id: users.length + 1, firstName: req.body.newUser.userName}
  console.log(newUser)
  users.push(newUser);
  res.send(users)
})

app.put('/api/users/:id', (req, res) => {
  const user = users.find((user) => user.id === parseInt(req.params.id))
  user.firstName = req.body.newUser.userName
  res.send(users)

})

app.delete('/api/users/:id', (req, res) => {
  // splice or slice

})
app.listen(3000, () => console.log("Server is listening at port 3000"))





