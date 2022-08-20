# Frontend Mentor - Interactive card details form

![Design preview for the Interactive card details form coding challenge](./design/desktop-preview.jpg)

# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 


## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

![](./assets/screenshots/screenshot1.png)
![](./assets/screenshots/screenshot2.png)
![](./assets/screenshots/screenshot3.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- HTML Assessibility tags
- Flexbox
- Desktop-first workflow
- [jQuery](https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js/) - jQuery
- [jQuery Validation Plugin](https://cdn.jsdelivr.net/npm/jquery-validation@1.19.5/dist/jquery.validate.js/) - jQuery Plugin
- [Google Fonts](https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500&display=swap) - For Fonts

### What I learned

I learnt a lot through this project. Among what i learnt is how to use regExpression.  For example how to add a value after at certain interval
```js
pin.keyup(function(){
    let pinSpace = pin.val().replace(/(.{4})/g, '$1 ');
    cardPin.text(pinSpace);
});
```

## Author

- GitHub - [Udeh Ifeanyi](https://github.com/Ifescohub)
- Frontend Mentor - [@ifescohub](https://www.frontendmentor.io/profile/Ifescohub)
- Twitter - [@UdehIfeanyi10](https://twitter.com/UdehIfeanyi10)