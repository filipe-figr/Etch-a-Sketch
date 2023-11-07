const gridContainer = document.getElementById('gridContainer');

for (let i = 0; i < 16; i++) {
  const row = document.createElement('div');
  row.classList.add('row', 'row-cols-30', 'mx-0', 'px-0');
  for (let j = 0; j < 30; j++) {
    const col = document.createElement('div');
    col.classList.add('col','mx-0', 'border', 'border-0','hover');
    col.style.height = '30px';
    row.appendChild(col);
  }
  gridContainer.appendChild(row);
}

const ll = document.querySelectorAll('.hover');

ll.forEach(ee => {
  ee.addEventListener('mouseover', function (e) {
    e.target.style.backgroundColor = 'black';
  });
});

document.getElementById('btn-clear').addEventListener('click', ()=> {
  document.querySelectorAll('.hover').forEach(ee => {
    ee.style.backgroundColor = "white";
  })
})