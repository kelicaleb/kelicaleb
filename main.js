var CC = window.prompt("Enter the first two digits of the century your born in For example 1989 has CC = 19");
var YY = window.prompt("Enter the  year of the digits for example 1989 = 89:");
var MM = window.prompt("Enter the month in digits ");
var DD = window.prompt("Enter the day of the month:");
var week =  ( ( ( (parseInt(CC)/4) -2*parseInt(CC)-1) + ((5*parseInt(YY)/4) ) + ((26*(parseInt(MM)+1)/10)) + parseInt(DD) ) % 7);
var gender = window.prompt('Enter your gender male or female ');
var male = ['Kwasi', 'Kwandwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
var female = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
if (week == -2.5500000000000007 && gender == "female"  ){
    document.body.innerHTML = ("You were born on a Saturday " +  "therefore, the name " + female[0]  + " is given ");    
}
else if (week == -0.5500000000000007 && gender == "female"){
    document.body.innerHTML = ("You were born on a monday . Therefore, the name " + female[1] + " is given");
}
else if (week == -6.550000000000001 && gender == "female"){
    document.body.innerHTML = ("You were born on a Tuesday . Therefore, the name " + female[2] + " is given");
}
else if (week == -5.550000000000001 && gender == "female"){
    document.body.innerHTML = ("You were born on a Wednesday . Therefore, the name " + female[3] + " is given");
}
else if (week == -4.550000000000001 && gender == "female"){
    document.body.innerHTML = ("You were born on a Thursday . Therefore, the name " + female[4] + " is given");
}
else if (week == -3.5500000000000007 && gender == "female"){
    documnet.body.innerHTML = ("You were born on a Friday . Therefore, the name " + female[5] + " is given");
}
else if (week == -1.5500000000000007 && gender == "female"){
    document.body.innerHTML = ("You were born on a Sunday. Therefore, the name " + female[6] + " is given");
}
else{
    document.body.innerHTML = ('invalid format please try again');
}


if (week == -2.5500000000000007 && gender == "male"  ){
    document.body.innerHTML = ("You were born on a Saturday " +  "therefore, the name " + male[0]  + " is given ");    
}
else if (week == -0.5500000000000007 && gender == "male"){
    document.body.innerHTML = ("You were born on a monday . Therefore, the name " + male[1] + " is given");
}
else if (week == -6.550000000000001 && gender == "male"){
    document.body.innerHTML = ("You were born on a Tuesday . Therefore, the name " + male[2] + " is given");
}
else if (week == -5.550000000000001 && gender == "male"){
    document.body.innerHTML = ("You were born on a Wednesday . Therefore, the name " + male[3] + " is given");
}
else if (week == -4.550000000000001 && gender == "male"){
    document.body.innerHTML = ("You were born on a Thursday . Therefore, the name " + male[4] + " is given");
}
else if (week == -3.5500000000000007 && gender == "male"){
    documnet.body.innerHTML = ("You were born on a Friday . Therefore, the name " + male[5] + " is given");
}
else if (week == -1.5500000000000007 && gender == "male"){
    document.body.innerHTML = ("You were born on a Sunday. Therefore, the name " + male[6] + " is given");
}
