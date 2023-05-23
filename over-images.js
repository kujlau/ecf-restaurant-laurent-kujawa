const overPlatOne = document.getElementById('texte_plat_1');
overPlatOne.style.display = 'none';
const overPlatTwo = document.getElementById('texte_plat_2');
overPlatTwo.style.display = 'none';
const overPlatThree = document.getElementById('texte_plat_3');
overPlatThree.style.display = 'none';
const overPlatFour = document.getElementById('texte_plat_4');
overPlatFour.style.display = 'none';
const overPlatFive = document.getElementById('texte_plat_5');
overPlatFive.style.display = 'none';
const overPlatSix = document.getElementById('texte_plat_6');
overPlatSix.style.display = 'none';

const imagePlatOne = document.getElementById('plat_1');
const mouseTarget = document.getElementById('mouseTarget');
const imagePlatTwo = document.getElementById('plat_2');
const imagePlatThree = document.getElementById('plat_3');
const imagePlatFour = document.getElementById('plat_4');
const imagePlatFive = document.getElementById('plat_5');
const imagePlatSix = document.getElementById('plat_6');

imagePlatOne.addEventListener('mouseenter', () => {
  overPlatOne.style.display = 'flex';

  setTimeout(function() {
    overPlatOne.style.display = 'none';
  }, 5000);
}, false);

imagePlatTwo.addEventListener('mouseenter', () => {
  overPlatTwo.style.display = 'flex';

  setTimeout(function() {
    overPlatTwo.style.display = 'none';
  }, 5000);
}, false);

imagePlatThree.addEventListener('mouseenter', () => {
  overPlatThree.style.display = 'flex';

  setTimeout(function() {
    overPlatThree.style.display = 'none';
  }, 5000);
}, false);

imagePlatFour.addEventListener('mouseenter', () => {
  overPlatFour.style.display = 'flex';

  setTimeout(function() {
    overPlatFour.style.display = 'none';
  }, 5000);
}, false);

imagePlatFive.addEventListener('mouseenter', () => {
  overPlatFive.style.display = 'flex';

  setTimeout(function() {
    overPlatFive.style.display = 'none';
  }, 5000);
}, false);

imagePlatSix.addEventListener('mouseenter', () => {
  overPlatSix.style.display = 'flex';

  setTimeout(function() {
    overPlatSix.style.display = 'none';
  }, 5000);
}, false);




























