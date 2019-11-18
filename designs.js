function hightlightCell(evt) {
  const colorPicker = document.getElementById('colorPicker');
  evt.target.style.backgroundColor = colorPicker.value;
}

function makeGrid() {
  const width = document.getElementById('inputWidth').value;
  const height = document.getElementById('inputHeight').value;
  const table = document.getElementById('pixelCanvas');
  const rows = table.rows.length;
  if (rows > 0) {
    table.firstChild.remove();
  }
  for (var x = 0; x < height; x++) {
    const row = table.insertRow(x);
    for (var y = 0; y < width; y++) {
      const cell = row.insertCell(y);
      cell.addEventListener('click', hightlightCell);
    }
  }
}

const submit = document.getElementById('sizePickerSubmit');
submit.addEventListener('click', function (evt) {
  evt.preventDefault();
  makeGrid();
});
