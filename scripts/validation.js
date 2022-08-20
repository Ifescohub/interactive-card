
const cardForm = $("form");
const article = $("article");

const submitBtn = $("#submit");
const completeBtn = $("#complete");


//Validating inputs error behaviour, rules and messages
cardForm.validate({
   
    errorPlacement: function (error, element) {
        error.insertAfter(element);
        if (element.hasClass('input')) {
            element.addClass('red')
            element.next().removeClass('passValid').addClass('passError');
        }
    },
    success: function (div) {
        if (div.prev().hasClass('input')) {
            div.prev().removeClass('red');
        }
    },
    highlight: function (element, errorClass, validClass) {
        if ($(element).hasClass('input')) {
            $(element).next().removeClass('passValid').addClass('passError');
        } else {
            $(element).addClass(errorClass).removeClass(validClass);
        }
    },
    unhighlight: function (element, errorClass, validClass) {
        if ($(element).hasClass('input')) {
            $(element).next().removeClass('passError').addClass('passValid');
        } else {
            $(element).removeClass(errorClass).addClass(validClass);
        }
    },
  // Specify validation rules
  rules: {
    // The key name on the left side is the name attribute
    // of an input field. Validation rules are defined
    // on the right side
    name: "required",
    pin: {
        required: true,
        minlength: 16
    },
    month: {
        required: true,
        min: 1,
        max: 12
      },
    year: {
        required: true,
        minlength: 2,
        min: 22
      },
    cvc: {
        required: true,
        minlength: 3
      }
  },
  // Specify validation error messages
  messages: {
    name: "Card Name cannot be empty",
    pin: {
        required: "Card Number cannot be empty",
        minlength: "Your card number must be 16 characters long"
    },
    month: {
        required: "Can't be blank",
        min: "Month can not be 0",
        max: "Month can not be above 12"
      },
    year: {
        required: "Can't be blank",
        min: "Your card has expired"
      },
    cvc: {
        required: "Can't be blank",
        minlength: "Your CVC must be 3 characters long",
      },

  //Submit handler
  submitHandler: function(form) {
    form.submit();
  },
}
});

//Preventing default submit behavour so as to flip pages
cardForm.on('submit', function(e){
    let isValid = cardForm.valid();
    if (isValid){
        e.preventDefault();
        flipPage();
    }
});


// Function to flip page to the complete page
function flipPage(){
    cardForm.attr("hidden", "true");
    article.removeAttr("hidden");
};

//Refreshing the page and fliping back to the form
completeBtn.click(()=>{
    cardForm.removeAttr("hidden");
    article.attr("hidden", "true");
    location.reload(true);
});
