 const colorCells = document.querySelectorAll('.color-cell');
  const textElement = document.querySelector('.text');
    colorCells.forEach(cell => {
     cell.addEventListener('click', function() {
      const color = this.getAttribute('data-color');
       textElement.style.color = color;
            });
        });