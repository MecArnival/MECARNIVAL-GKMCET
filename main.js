
document.querySelector("#register-form").addEventListener("submit" , function(e){
     e.preventDefault()
     submitRegister()
 })




var firebaseConfig = {
    apiKey: "AIzaSyCagNNf5lwNF6SXL6iuetjN3w9mwLxZM7k",
    authDomain: "gkm-register.firebaseapp.com",
    databaseURL: "https://gkm-register.firebaseio.com",
    projectId: "gkm-register",
    storageBucket: "",
    messagingSenderId: "329425332352",
    appId: "1:329425332352:web:3dff9187ce029e2b"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig)


let database = firebase.database()

let ref = database.ref("users")

function submitRegister(){
  let data = {
    afirstName : document.querySelector("#firstName").value ,
    blastName : document.querySelector("#lastName").value ,
    college : document.querySelector("#college").value ,
    department : document.querySelector("#department").value,
    email : document.querySelector("#email").value ,
    dnumber : document.querySelector("#number").value 
   }
   var checkboxes = document.getElementsByName('test');
   var selected=[];
   for(var i=0; i<checkboxes.length;i++){
     if (checkboxes[i].checked){
       selected.push(checkboxes[i].value);
     }
   }
    ref.push(data)
    ref.push(selected)
  {
    alert("sucessfull register");
    }
}

 
