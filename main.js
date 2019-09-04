
document.querySelector("#register-form").addEventListener("submit" , function(e){
     e.preventDefault()
     submitRegister()
 })

 
 // Your web app's Firebase configuration
 var firebaseConfig = {
   apiKey: "AIzaSyDUZqdwFefl8S8eifCcUDFTudLKNH3Zg2k",
   authDomain: "gkmcet-mecarnival.firebaseapp.com",
   databaseURL: "https://gkmcet-mecarnival.firebaseio.com",
   projectId: "gkmcet-mecarnival",
   storageBucket: "",
   messagingSenderId: "746057816953",
   appId: "1:746057816953:web:933f6398faf97e58"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);


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
    alert("your entry has been registed successfully");
    }
}

 
