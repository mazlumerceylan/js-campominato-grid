function generateGrid() {
  const select = document.getElementById("difficolta");
  const level = parseInt(select.value);
  let gridSize = 0;
  let rows = 0;
  let cols = 0;
  
  if (level === 1) {
    gridSize = 100;
    rows = 10;
    cols = 10;
  } else if (level === 2) {
    gridSize = 81;
    rows = 9;
    cols = 9;
  } else if (level === 3) {
    gridSize = 49;
    rows = 7;
    cols = 7;
  }
  
  const gridContainer = document.getElementById("grid");
  gridContainer.innerHTML = "";
  
  for (let i = 1; i <= gridSize; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.innerText = i;
    
    cell.addEventListener("click", function() {
      cell.classList.add("blue");
      console.log("Hai cliccato sulla cella " + i);
    });
    
    gridContainer.appendChild(cell);
    
    if (i % cols === 0) {
      const breakLine = document.createElement("br");
      gridContainer.appendChild(breakLine);
    }
  }
}