
//Card elements
const cardPin = $("#card-pin");
const cardName = $("#card-name");
const cardMonth = $("#card-month");
const cardYear = $("#card-year");
const cardCVC = $("#card-cvc");

//Form elements
let pin = $("#pin");
const cname = $("#name");
const month = $("#month");
const year = $("#year");
const cvc = $("#cvc");


// Adding a whitespace to the card after every 4 digits
pin.keyup(function(){
    let pinSpace = pin.val().replace(/(.{4})/g, '$1 ');
    cardPin.text(pinSpace);
});

// Formating the form to pass its values to the card
cname.keyup(function(){         //Card Name
    cardName.text(cname.val());
});


month.keyup(function(){         //Card Month
    let monthValue = month.val();

    return monthValue.length === 1
    ? cardMonth.text("0" + monthValue + "/")
    : cardMonth.text(monthValue + "/");
});


year.keyup(function(){          //Card Year
    let yearValue = year.val();

    return yearValue.length === 1
    ? cardYear.text("0" + yearValue)
    : cardYear.text(yearValue);
});


cvc.keyup(function(){          //Card Cvc
    cardCVC.text(cvc.val());
});



// Formatting the input field to take numbers only
function numOnly(element){
    element.value = element.value.replace(/[^\d]/, "");
}