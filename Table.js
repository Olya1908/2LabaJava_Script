let table = document.getElementById('resultTable');

function addRow(){
  const surnameРarticipant = document.getElementById('surnameРarticipant'),
        pointsFirstRound = document.getElementById('pointsFirstRound'),
        pointsSecondRound = document.getElementById('pointsSecondRound');

  if (surnameРarticipant.value!="" && pointsFirstRound.value>0 && pointsFirstRound.value<11 
      && pointsSecondRound.value>0 && pointsSecondRound.value<11) {
    let row = table.getElementsByTagName('tbody')[0].insertRow(-1);
    row.insertCell(-1).appendChild(document.createTextNode(surnameРarticipant.value));
    row.insertCell(-1).appendChild(document.createTextNode(pointsFirstRound.value));
    row.insertCell(-1).appendChild(document.createTextNode(pointsSecondRound.value));
    row.insertCell(-1).appendChild(document.createTextNode(parseInt(pointsFirstRound.value)+parseInt(pointsSecondRound.value)));
    surnameРarticipant.value = pointsFirstRound.value = pointsSecondRound.value = '';
    let delBtn = document.createElement(type = "tr");
    delBtn.innerHTML = '<input type="button" value="Удалить" name="newdlt" onclick="delRow(this.parentNode)">';
    row.insertCell(-1).appendChild(delBtn);
  } 
  else 
    alert('Ошибка! Неккоректные данные!');
}

function compareElem(rowA,rowB){
  if (rowA < rowB) 
    return -1;
  else
    if (rowA > rowB) 
      return 1;
  return 0;
}

table.addEventListener('click', (e) => {
  const et = e.target;
  const type = et.getAttribute('dataType');
  const index = et.cellIndex;
  let sortedRows = Array.from(table.rows)
      .slice(1)
      .sort((rowA, rowB) => {       
      switch (type) {
        case 'text':
          return compareElem(rowA.cells[index].innerHTML,rowB.cells[index].innerHTML);
        case 'integer':
          return rowA.cells[index].innerHTML - rowB.cells[index].innerHTML;
      }
    });
    table.tBodies[0].append(...sortedRows);
});