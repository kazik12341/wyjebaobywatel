const editBtn = document.getElementById('editBtn');
const modal = document.getElementById('editModal');
const saveBtn = document.getElementById('saveBtn');
const cancelBtn = document.getElementById('cancelBtn');

editBtn.addEventListener('click', () => {
  document.getElementById('editFirstName').value = document.getElementById('firstName').textContent;
  document.getElementById('editLastName').value = document.getElementById('lastName').textContent;
  document.getElementById('editPesel').value = document.getElementById('pesel').textContent;
  document.getElementById('editIdNumber').value = document.getElementById('idNumber').textContent;
  modal.classList.remove('hidden');
});

cancelBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
});

saveBtn.addEventListener('click', () => {
  document.getElementById('firstName').textContent = document.getElementById('editFirstName').value;
  document.getElementById('lastName').textContent = document.getElementById('editLastName').value;
  document.getElementById('pesel').textContent = document.getElementById('editPesel').value;
  document.getElementById('idNumber').textContent = document.getElementById('editIdNumber').value;
  modal.classList.add('hidden');
});
