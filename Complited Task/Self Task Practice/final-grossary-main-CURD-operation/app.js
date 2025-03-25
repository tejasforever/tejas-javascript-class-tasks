let infoList = [];
let index = -1;
function addInfo() {
    let info = document.getElementById("grocery").value;
    if (index < 0) {
        infoList.push(info);
    }
    else {
        infoList[index] = info;
    }
    index = -1;
    displayInfo();
}

function displayInfo() {
    let displayList = infoList.map(function (a, index) {
        return `
        <tr>
        <td>${a}</td>
        <td><button type="button" class="add-btn" onclick="editInfo(${index})">Edit</button></td>
        <td><button type="button" class="add-btn" onclick="deletInfo(${index})">Delet</button></td>
        </tr>
        `
    }).join("");
    document.getElementById("grocery-list").innerHTML = displayList;
}

function deletInfo(index) {
    infoList.splice(index, 1);
    displayInfo();
}

function clearAll(index) {
    infoList.splice(index);
    displayInfo();
}

function editInfo(editValue) {
    index = editValue;
    document.getElementById("grocery").value = infoList[index];
}

displayInfo();