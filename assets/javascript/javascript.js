// Initialize Firebase
  var config = {
    apiKey: “AIzaSyD3IzAjFPs-G2tphHRm7j65sQH0BVKK_Xk”,
    authDomain: “fir-practice-fd929.firebaseapp.com”,
    databaseURL: “https://fir-practice-fd929.firebaseio.com“,
    projectId: “fir-practice-fd929”,
    storageBucket: “fir-practice-fd929.appspot.com”,
    messagingSenderId: “825317651246”
  };
  
  firebase.initializeApp(config);

$(“#addEmployee”).on(“click”, function (event){
    event.preventDefault();

    var employeeName = $(“#new-emp-name”).val().trim();
    var employeeRole = $(“#new-emp-role”).val().trim();
    var employeeDate = $(“#new-emp-date”).val().trim();
    var employeeRate = $(“#new-emp-rate”).val().trim();
})
    console.log(employeeName);
    console.log(employeeRole);
    console.log(employeeDate);
    console.log(employeeRate);

    dataRef.ref().on(“click”)