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


    let date = new Date(dobValue); //USER DATE OBJECT

    // Validating entered data

    const dayOfWeek = days[date.getDay()];

    if (date > currentDate){
        alert("We aren't there yet... Please enter a valid date!");
    } 
    else if (date.getFullYear() < 1900){
        alert("You can't be that old!! Please enter a valid date!");
    }   
    else{ //Valid
        let userAkanName = undefined;

        if (userGender === "Male"){
            userAkanName = maleAkanNames[date.getDay()];
        } else if (userGender === "Female"){
            userAkanName = femaleAkanNames[date.getDay()];
        }
        infoForm.classList.add("hideForms");
        resultDiv.textContent = `Your Akan name is: ${userAkanName}!!`;
    }

}

infoForm.addEventListener('submit', onSubmit);


