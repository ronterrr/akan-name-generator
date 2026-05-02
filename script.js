const infoForm = document.getElementById("infoForm");
const dateOfBirth = document.getElementById("dateOfBirth");
const maleGender = document.getElementById("male-button");
const femaleGender = document.getElementById("female-button");
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const currentDate = new Date(); //CURRENT DATE OBJECT
const maleAkanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
const resultDiv = document.getElementById("result");

function onSubmit(event){
    event.preventDefault();
    const dobValue = dateOfBirth.value;
    let userGender = undefined;

    if (maleGender.checked){
        userGender = "Male";
    } else if (femaleGender.checked){
    userGender = "Female";
    }

    console.log(`DOB: ${dobValue}, GENDER: ${userGender}`);

    let date = new Date(dobValue); //USER DATE OBJECT
    console.log(date);

    // Validating entered data

    const dayOfWeek = days[date.getDay()];
    console.log(dayOfWeek);

    if (date > currentDate){
        console.log("Date is in the future");
        alert("We aren't there yet... Please enter a valid date!");
    } 
    else if (date.getFullYear() < 1900){
        console.log("Date is way too far in the past");
        alert("You can't be that old!! Please enter a valid date!");
    }   
    else{ //Valid
        console.log("Date is in the past");
        let userAkanName = undefined;

        if (userGender === "Male"){
            userAkanName = maleAkanNames[date.getDay()];
        } else if (userGender === "Female"){
            userAkanName = femaleAkanNames[date.getDay()];
        }
        console.log(`User's Akan name is: ${userAkanName}`);
        infoForm.classList.add("hideForms");
        resultDiv.textContent = `Your Akan name is: ${userAkanName}!!`;
    }

}

infoForm.addEventListener('submit', onSubmit);


