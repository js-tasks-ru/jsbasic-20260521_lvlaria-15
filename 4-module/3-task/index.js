function highlight(table) {
  const rows = table.querySelectorAll('tbody tr');

  rows.forEach((row) => {
    const cells = row.children;

    const age = cells[1].textContent;
    const gender = cells[2].textContent;
    const status = cells[3];

    const available = status.dataset.available;

    if (available === 'true') {
      row.classList.add('available');
    } else if (available === 'false') {
      row.classList.add('unavailable');
    } else {
      row.hidden = true;
    }

    if (gender === 'm') {
      row.classList.add('male');
    } else if (gender === 'f') {
      row.classList.add('female');
    }

    if (Number(age) < 18) {
      row.style.textDecoration = 'line-through';
    }
  });
}
