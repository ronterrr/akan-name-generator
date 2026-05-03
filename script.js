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

    // Formula

    let stringYear = (date.getFullYear()).toString();

    let mmDigit = (date.getMonth()+1);
    let ddDigit = date.getDate();

    if (mmDigit===1){
        mmDigit=13;
        stringYear = (Number(stringYear-1)).toString();
    }else if (mmDigit===2){
        mmDigit=14;
        stringYear = (Number(stringYear-1)).toString();
    }

    let ccDigits = Number(`${stringYear[0]}${stringYear[1]}`);
    let yyDigits = Number(`${stringYear[2]}${stringYear[3]}`);

    // let formulaDayOfWeek = ((((ccDigits/4)-2*ccDigits-1) + ((5*yyDigits)/4) + ((26*(mmDigit+1))/10) + ddDigit)%7);

    let firstEquation = Math.floor((ccDigits/4)-2*ccDigits-1);
    let secondEquation = Math.floor((5*yyDigits)/4);
    let thirdEquation = Math.floor((26*(mmDigit+1))/10);
    let formulaDayOfWeek = ((((firstEquation + secondEquation + thirdEquation + ddDigit)%7)+7)%7);
    console.log(formulaDayOfWeek);
    console.log(date.getDay());


    // Validating entered data

    const dayOfWeek = days[date.getDay()];

    console.log(formulaDayOfWeek == date.getDay() ? "match" : "don't match")

    

    if (date > currentDate){
        alert("We aren't there yet... Please enter a valid date!");
    } 
    else if (date.getFullYear() < 1900){
        alert("You can't be that old!! Please enter a valid date!");
    }   
    else{ //Valid
        let userAkanName = undefined;
        if (formulaDayOfWeek == date.getDay()){
            if (userGender === "Male"){
                userAkanName = maleAkanNames[date.getDay()];
            } else if (userGender === "Female"){
                userAkanName = femaleAkanNames[date.getDay()];
            }
            infoForm.classList.add("hideForms");
            resultDiv.textContent = `Your Akan name is: ${userAkanName}!!`;
        }
    }

}

infoForm.addEventListener('submit', onSubmit);


