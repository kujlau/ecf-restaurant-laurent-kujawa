const navMobileBtn = document.getElementById('btn-menu');

const NavMobile = document.getElementById('nav-mobile');
NavMobile.style.display = 'none';

let menuIsShow = false
navMobileBtn.addEventListener('click', () => {
  menuIsShow = !menuIsShow
    NavMobile.style.display = menuIsShow ? 'flex' : 'none';
  })