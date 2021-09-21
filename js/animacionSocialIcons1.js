/* REMOVE FIXED MEDIA-ICONS (INDEX - NOSOTROS - TYC)*/
window.addEventListener('scroll', function() {
   
    let socialIconsHome =  document.getElementById('home__social-icons');     
    if (window.scrollY >= 900) {
      socialIconsHome.classList.remove('fixed-1');
      socialIconsHome.classList.add('media__icons-footer-1');       
    } else {
      socialIconsHome.classList.add('fixed-1');
      socialIconsHome.classList.remove('media__icons-footer-1');        
    }
  });