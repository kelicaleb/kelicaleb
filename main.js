const a = document.querySelector("#caleb");
var male = ['Kwasi', 'Kwandwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
var female = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];


a.addEventListener("submit", function(x){
  x.preventDefault();
  const jsform = new FormData(a);
  const b = new Date(jsform.get("dob")).getDay()
  console.log(jsform.get("gender"))
  if(jsform.get("gender") == "male"){
    alert("your Akan name is " + male[b -1]);
  }
  else{
    alert("Your Akan name is " + female[b -1 ]);
  }

})