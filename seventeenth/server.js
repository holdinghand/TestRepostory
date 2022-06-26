const express = require('express');
const mysql = require('mysql')
const app = express();

app.use(express.json());


const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'crudapplication'
})

conn.connect((err) => {
  if (err) throw err
  console.log("Database connected successfully");
})

const users = [
  {id: 1, firstName: "Muzamil"},
  {id: 2, firstName: "Mudasir"},
  {id: 3, firstName: "Muneeb"}
]

// RestFul
// api/users   get  Retrieving all users from database
//api/users/:id  get    any particular user  
//api/users    post    {user details}   create new user
//api/users/:id  put   {id, userdetails }  update a user
// api/users/:id  delete 
// api/users    delete  




app.get('/', (req, res) => {
  res.send("Hello client, I am listening your requests")
})
app.get('/api/users', (req, res) => {
  let sqlQuery = "SELECT * FROM `users";
  let query = conn.query(sqlQuery, (err, result) => {
    // console.log(result)
    res.send(result)
  })
})
app.get('/api/users/:id', (req, res) => {
  // console.log(req.body)
  // console.log(req.params.id)
  let sqlQuery = `SELECT * FROM users WHERE id=${req.params.id}`;
  console.log(sqlQuery)
  let query = conn.query(sqlQuery, (err, result) => {
    console.log(result)
    res.send(result)
  })
  // const user = users.find((user) => user.id === parseInt(req.params.id))
  // res.send(user)
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





