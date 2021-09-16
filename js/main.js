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
window.addEventListener('scroll', function(e) {
    e.preventDefault();
      let socialIcons =  document.getElementById('social-icons');
      if (window.scrollY >= 1000) {
        socialIcons.classList.remove('fixed');
        socialIcons.classList.add('media__icons-footer');
      } else {
        socialIcons.classList.add('fixed');
        socialIcons.classList.remove('media__icons-footer');
      }
    });

    window.onbeforeunload = function () {
     window.scrollTo(0, 20);
      }