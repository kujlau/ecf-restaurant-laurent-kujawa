const reservBtn = document.getElementById('valider');
const validationText = document.getElementById('validation');
validationText.style.display = 'none';
const cacheForm = document.getElementById('cachee');

reservBtn.addEventListener('click', () => {
  cacheForm.style.display = 'none';
  validationText.style.display = 'flex';
})