const infoForm = document.getElementById("infoForm");
const dateOfBirth = document.getElementById("dateOfBirth");
const maleGender = document.getElementById("male-button");
const femaleGender = document.getElementById("female-button");


function infoPrint(event){
    let userGender = undefined;
    if (maleGender.checked){
        userGender = "Male";
    } else if (femaleGender.checked){
    userGender = "Female";
    }
    console.log(`DOB: ${dateOfBirth.value}, GENDER: ${userGender}`);
    event.preventDefault();
}

infoForm.addEventListener('submit', infoPrint);


