// synchronous
// console.log("hello");
// console.log("Muzamil");
// console.log("How are you");
// console.log("something");

// Asynchronous
// Event Queue


// ####################################### Callback Based

// function getStudent(studentId, callback) {
//   setTimeout(() => {
//     console.log("Reading Student from database...")
//     callback({studentId: 1, firstName: "Muzamil", regNumber: "23"});
//   }, 5000);
// }


// function getCourses(regNumber, callback) {
//   setTimeout(() => {
//     console.log("Reading Courses from database...")
//     callback({courseid: 1, courseName: "MCA"});
//   }, 5000);
// }

// function getCourseSubjects(courseName, callback) {
//   setTimeout(() => {
//     console.log("Reading Courses from database...")
//     callback(['DS', 'Alogrithms', 'JAVA']);
//   }, 5000);
// }

// getStudent(2, (user) => {
//   getCourses(user.regNumber, (courses) => {
//     getCourseSubjects(courses.courseName, (subjects) => {
//       console.log(subjects)
//     })
//   })
// });





// ####################################### Promise Based
function getStudent(studentId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Reading Student from database...")
      resolve({studentId: 1, firstName: "Muzamil", regNumber: "23"});
    }, 5000);
  })
}


function getCourses(regNumber) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Reading Courses from database...")
      resolve({courseid: 1, courseName: "MCA"});
    }, 5000);
  })
}

function getCourseSubjects(courseName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Reading Courses from database...")
      resolve(['DS', 'Alogrithms', 'JAVA']);
    }, 5000);
  })
}


getStudent(2)
  .then((user) => getCourses(user.regNumber))
  .then((courses) => getCourseSubjects(courses.courseName))
  .then((subjects) => console.log(subjects))
  .catch((error) => console.log(error));








// Promises

// it is an object

// const p=new Promise((resolve,reject)=>{
//   setTimeout(() => {
//     console.log("Reading Courses from database...")
//     // resolve(['DS', 'Alogrithms', 'JAVA']);
//     reject(new Error)
//   }, 5000);
// })


// nested callbacks

// callback hell

// callback
// promises
// async/await




// output
// hello
// {studentId: 1, firstName: "Muzamil"}
// something



