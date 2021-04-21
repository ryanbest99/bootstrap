console.log("HI");

// Random number from 1 - 10

let randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);

let randomImage = `./images/summer/${randomNumber}.jpeg`;

//Select image
const searchSection = document.querySelector(".search-section");
searchSection.style.background =
  "url('./images/summer/1.jpeg') center/cover no-repeat";
