function addField (argument) {
    var myTable = document.getElementById("receipts");
    var currentIndex = receipts.rows.length;
    var currentRow = receipts.insertRow(-1);

    var addRowBox = document.createElement("input");
    addRowBox.setAttribute("type", "button");
    addRowBox.setAttribute("value", "+");
    addRowBox.setAttribute("onclick", "addField();");
    addRowBox.setAttribute("class", "button");

    var addNumber = document.createElement("span");
    addNumber.innerHTML=currentIndex;

    var linksBox = document.createElement("input");
    linksBox.setAttribute("type", "number", "amount" + currentIndex);

    var keywordsBox = document.createElement("input");
    keywordsBox.setAttribute("text", "explain" + currentIndex);

    var violationsBox = document.createElement("input");
    violationsBox.setAttribute("text", "costcenter" + currentIndex);

    currentCell = currentRow.insertCell(-1);
    currentCell.appendChild(addRowBox);

    currentCell = currentRow.insertCell(-1);
    currentCell.appendChild(addNumber);
    
    var currentCell = currentRow.insertCell(-1);
    currentCell.appendChild(linksBox);

    currentCell = currentRow.insertCell(-1);
    currentCell.appendChild(keywordsBox);

    currentCell = currentRow.insertCell(-1);
    currentCell.appendChild(violationsBox);
}