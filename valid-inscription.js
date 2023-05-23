const inscriptionBtn = document.getElementById('inscrire');
const validationText = document.getElementById('validation');
validationText.style.display = 'none';
const cacheForm = document.getElementById('form-inscription');

inscriptionBtn.addEventListener('click', () => {
  cacheForm.style.display = 'none';
  validationText.style.display = 'flex';
})