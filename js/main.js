// MENU SHOW
const navMenu = document.getElementById('nav-menu');
const showMenu = (toggleId, navId) => {
    const toogle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

    if(toogle && nav){
        toogle.addEventListener('click', ()=>{
            nav.classList.toggle('show');
            body.classList.add('disabledScroll');
        })
    }
}
showMenu('nav-toggle', 'nav-menu');

// ACTIVE AND REMOVE MENU
const navLink = document.querySelectorAll('.nav__link');
const cancelBtn = document.querySelector('.cancel-btn');
const body = document.querySelector('body');

function linkAction(){
    //active link
    navLink.forEach(n => n.classList.remove('nav__active'));
    this.classList.add('nav__active');

    //Remove menu mobile
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

//CLOSE MENU
function closeAction () {
    //Remove menu mobile
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
    body.classList.remove('disabledScroll');
}

cancelBtn.addEventListener('click', closeAction);
