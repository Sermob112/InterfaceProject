const rows = document.querySelectorAll('.clickable-row');

rows.forEach(row => {
  const workerTable = row.nextElementSibling.querySelector('.WorkersBlock');

  row.addEventListener('click', () => {
    if (workerTable) {
      workerTable.classList.toggle('hidden');
    }
  });
});