
// Synchronous

// console.log("hello");
// console.log("Muzamil");
// console.log("How are you");
// console.log("something");


// Asynchronous(Non Blocking)

function getStudent(studentId, callback) {
  setTimeout(() => {
    console.log("Reading data from database....")
    // console.log({userid: 1, firstName: "Muzamil"})
    callback({studentId: 1, firstName: "Muzamil"})
  }, 2000);
}

// console.log("hello");
// const users = getUsers(1)
// console.log(users)
// console.log("something");
console.log("hello");
getStudent(1, (user) => {
  console.log(user)
})
console.log("something");




// hellocls
// Muzamil
// How are you
// something

// hello
// something
// Muzamil
// How are you


// Event Queue