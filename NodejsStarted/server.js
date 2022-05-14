const http = require('http')
const os = require('os')
const express = require('express')  //npm
const app = express()

const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


let userdata = [
  {firstName: "Muzamil", lastName: "reshi", email: "muzamil@gmail.com"}
];
app.get('/', (req, res) => {
  res.render('index', {
    data: 'demo data'
  })
})
const printX = (x, callback) => {
  setTimeout(() => {
    // console.log(x)
    callback(x)
  }, 2000);

}
console.log("test");
printX(2, function (x) {
  console.log(x)
})

console.log("wiekd");



app.post('/api/users', (req, res) => {
  console.log(req.body);
  // res.send(req)
})
app.get('/api/test', (req, res) => {
  res.send("we are creating routes")
})


app.listen(3000, () => console.log("I am listening at port 3000"))

// const server = http.createServer((req, res) => {
//   if (req.url == '/') {
//     res.write("Hello i have create localhost");
//     res.end();
//   }
//   if (req.url == '/api/myarray') {
//     res.write(JSON.stringify([1, 2, 3]));
//     res.end();
//   }
// })

// server.listen(3000, console.log("server is listing at port 3000"))













// const index = require('./index');



// function useIndexfile() {
//   console.log("we have to include index.js here");
// }
// useIndexfile();

// index.IntorduceWorld()


