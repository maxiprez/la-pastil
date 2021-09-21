/* REMOVE FIXED MEDIA-ICONS (CONTACTO - CORPORATIVO - PRODUCTOS - PROMOS - TUTORIALPEDIDOS)*/
window.addEventListener('scroll', function() {
   
    let socialIconsHome =  document.getElementById('scroller__social-icons');     
    if (window.scrollY >= 300) {
      socialIconsHome.classList.remove('fixed-2');
      socialIconsHome.classList.add('media__icons-footer-2');       
    } else {
      socialIconsHome.classList.add('fixed-2');
      socialIconsHome.classList.remove('media__icons-footer-2');        
    }
  });