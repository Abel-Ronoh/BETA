//START ...........................................................................................
// Script for the Toast Notification Section
// Variables
const showBtn = document.querySelector("#button"),
      toast = document.querySelector(".toast"),
      closeBtn = document.querySelector(".close"),
      progressBar = document.querySelector(".progress");

// To show the Popup Toast
function showToast(){
    // Shows the popup and progress bar
    toast.classList.add("active");
    progressBar.classList.add("active");

    // TimeOut to remove the popup toast 
    setTimeout(function(){
        toast.classList.remove("active");
    }, 5000);

    // TimeOut to remove the progressbar
    setTimeout(function(){
        progressBar.classList.remove("active");
    }, 5300);
}
// To close the Popup Toast
function closeToast(){
    // Removes the popup toast
    toast.classList.remove("active");

    // TimeOut to remove the progressbar
    setTimeout(function(){
        progressBar.classList.remove("active");
    }, 300);
}
// Event Listeners to initiate functions on click
closeBtn.addEventListener('click', closeToast); //END..............................................

//START ...........................................................................................
 // Script for sending email to the client
 const full_name = document.getElementById("name");
 const email = document.getElementById("email-add");
 const message = document.getElementById("message");
 const submit = document.getElementsByClassName("form")[0];
 let popup = document.getElementById("popup");

 submit.addEventListener("submit", (e) =>{
     e.preventDefault();
     let ebody = `
         <b>Name: </b>${full_name.value}
         <br>
         <b>Email Address: </b>${email.value}
         <br>
         <b>Message: </b>${message.value}
         <br>
         `;
     Email.send({
        SecureToken: "27e27fa9-f0bb-40bf-991e-a1916b409b87",
        To: "betageoconsultants@gmail.com",
        From: "betageoconsultants@gmail.com",
         Subject: "New Message From " + full_name.value,
         Body: ebody,
     }).then(
         function openPopup(){
            showToast();
             document.getElementById("name").value = "";
             document.getElementById("email-add").value = "";
             document.getElementById("message").value = "";
         }
     );
 }) //END .........................................................................................