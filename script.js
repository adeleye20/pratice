const names =document.getElementById("name")
const  email= document.getElementById("email")
const password=document.getElementById("password")
const passwordRegEx = new RegExp("^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$")
const phoneNumber=document.getElementById("phoneNumber")
const phoneRegEx = new RegExp("^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$")






names.addEventListener('change', function(){
    if (names.value.length<5){
        alert("Name must be at least 5 character");
        names.setAttribute('class','form-control is-invalid');
        names.focus();
    }
})

email.addEventListener('change',function(){
    if (!email.value.includes('@')){
        alert("Email must be valid");
        email.setAttribute('class','from-control is-invalid');
        email.focus();
    }
});


password.addEventListener('change',function(){
    if (password.value.length<9){
        alert("password too short");
        password.setAttribute('class','from-control is-invalid');
        password.focus();
    }
    if (!password.value.includes("passwordRegEx")){
        alert("password must contain at least one special charater e.g & #")
    }
})
 

phoneNumber.addEventListener('change',function(){
    if (password.value.length<12){
        alert("phonenumber incorrect");
        phoneNumber.setAttribute('class','from-control is-invalid');
        phoneNumber.focus();
    }
})