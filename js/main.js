// MENU SHOW
const showMenu = (toggleId, navId) => {
    const toogle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

    if(toogle && nav){
        toogle.addEventListener('click', ()=>{
            nav.classList.toggle('show');
        })
    }
}
showMenu('nav-toggle', 'nav-menu');

// ACTIVE AND REMOVE MENU
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    //active link
    navLink.forEach(n => n.classList.remove('nav__active'));
    this.classList.add('nav__active');

    //Remove menu mobile
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

/* REMOVE FIXED MEDIA-ICONS */
window.addEventListener('scroll', function() {
   
      let socialIconsHome =  document.getElementById('home__social-icons');     
      if (window.scrollY >= 900) {
        socialIconsHome.classList.remove('fixed');
        socialIconsHome.classList.add('media__icons-footer');       
      } else {
        socialIconsHome.classList.add('fixed');
        socialIconsHome.classList.remove('media__icons-footer');        
      }
    });

  