 bar = document.querySelector('.fa-bars');
 navBar = document.querySelector('.nav-bar')
 navMenu = document.querySelector('.nav-bar-links');
 navButtons = document.querySelector('.nav-bar-buttons');


bar.addEventListener('click', () => {
   navBar.classList.toggle('active');
   navMenu.classList.toggle('active');
   navButtons.classList.toggle('active');
},)



// bar.addEventListener('click', () => {
//    if (navMenu.style.display === "none" && navButtons.style.display === "none") {
//     navMenu.style.display = "block"
//     navButtons.style.display = "block"
//    } else {
//     navMenu.style.display = "none"
//     navButtons.style.display = "none"
//    }
// } )

// hamburger = document.querySelector(".hamburger");
// hamburger.onclick = function () {
//    navBar = document.querySelector('.nav-bar');
//    navBar.classList.toggle("active");
// }

// bar = document.querySelector(".fa-bars");
// bar.onclick = function () {
//    navMenu = document.querySelector('.nav-bar');
//    navBar.classList.toggle("active");
// }

