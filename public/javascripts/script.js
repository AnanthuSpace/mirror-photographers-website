// const toggleThemeBtn = document.querySelector('.header__theme-button');
// // ===================================
// // DARK/LIGHT THEME
// // Set initial theme from LocalStorage
// console.log(toggleThemeBtn);
// document.onload = setInitialTheme(localStorage.getItem('theme'));
// function setInitialTheme(themeKey) {
//   if (themeKey === 'dark') {
//     document.documentElement.classList.add('darkTheme');
//   } else {
//     document.documentElement.classList.remove('darkTheme');
//   }
// }

// // Toggle theme button
// toggleThemeBtn.addEventListener('click', () => {
//   // Toggle root class
//   document.documentElement.classList.toggle('darkTheme');

//   // Saving current theme on LocalStorage
//   if (document.documentElement.classList.contains('darkTheme')) {
//     localStorage.setItem('theme', 'dark');
//   } else {
//     localStorage.setItem('theme', 'light');
//   }
// });
var body=document.querySelector('.body');
document.onload = setInitialTheme(localStorage.getItem('theme'));
function setInitialTheme(themeKey) {
   
    if (themeKey === 'light') {
        body.classList.toggle("light")
    } else {
       body.classList.remove("light")
    }
  }
themeChanger=document.querySelector('.logintheme-btn');

themeChanger.addEventListener('click', () =>{
    body.classList.toggle('light');
    if(body.classList.contains("light")){
        
        localStorage.setItem('theme', 'light');
    }
    else{
        localStorage.setItem('theme', 'dark');
    }
})
