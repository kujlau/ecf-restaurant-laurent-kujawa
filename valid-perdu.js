const validBtn = document.getElementById('valide');
const validationText = document.getElementById('validation');
validationText.style.display = 'none';
const cacheForm = document.getElementById('form-perdu');

validBtn.addEventListener('click', () => {
  cacheForm.style.display = 'none';
  validationText.style.display = 'flex';
})
