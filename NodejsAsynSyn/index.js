// Ayschronous and Synchronous Programming

// console.log("hello");
// console.log("Muzamil");
// console.log("How are you");
// console.log("something");

let x;

function getUser(id, callback) {
  setTimeout(() => {
    console.log("Reading data from database....")
    // console.log({userid: 2, firstName: "muzamil", lastName: "Reshi"})
    callback({userid: 2, firstName: "muzamil", lastName: "Reshi"});
  }, 5000);
}


console.log("hello");
getUser(2, (userdata) => {
  console.log(userdata);
});
console.log("something");



