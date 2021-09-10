const form = document.querySelector("#caleb");
var male = ['Kwasi', 'Kwandwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
var female = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];


form.addEventListener("submit", function(x){
    x.preventDefault();
    const jsform = new FormData(form);  
    console.log(jsform.get("gender"));
    const day = new Date(jsform.get("dob")).getDate()
    console.log(day);
    if (jsform.get("gender") == "male"){
        alert("Your Akan name is " + male[day -1]);
    
    }
    else{
      alert("Your Akan name is " + female[day -1]);

    }

    })



