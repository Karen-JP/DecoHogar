const form = document.querySelector("#info")
const email = document.querySelector("#email")
const emailHelp = document.querySelector("#emailHelp")
const name = document.querySelector("#name")
const nameHelp = document.querySelector("#nameHelp")

form.addEventListener("submit" , (event) => {
 event.preventDefault()
 if(name.value === "" || email.value === ""){
     if(name.value === ""){
         nameHelp.innerText = "Por favor completar este campo"
     }
     if(email.value === ""){
         emailHelp.innerText = "Por favor completar este campo"
     }
 }else {
     form.submit();
 } 
 

})