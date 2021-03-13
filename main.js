const btnHamburger = document.getElementById('btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overLay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');


btnHamburger.addEventListener('click', function () {
      body.classList.remove('noscroll')
      if (header.classList.contains('open')) {
        //   close hamburger menu
          header.classList.remove('open');
        // overlay animation 
        fadeElems.forEach(element => {
          element.classList.add('fade-out');
          element.classList.remove('fade-in');
        })
      } else {
        //   open hamburger menu
        body.classList.add('noscroll')
        header.classList.add('open');
        // overlay animatio
        fadeElems.forEach(element => {
          element.classList.remove('fade-out');
          element.classList.add('fade-in');
        })
        
        
        
    }
})