function copyMenu() {
  let dptCategory = document.querySelector('.dpt-cat');
  let dptPlace = document.querySelector('.departments');
  dptPlace.innerHTML = dptCategory.innerHTML;

  let mainNav = document.querySelector('.header-nav nav');
  let navPlace = document.querySelector('.off-canvas nav');
  navPlace.innerHTML = mainNav.innerHTML;

  let topNav = document.querySelector('.header-top');
  let topPlace = document.querySelector('.off-canvas .thetop-nav');
  topPlace.innerHTML = topNav.innerHTML;
}

copyMenu();
