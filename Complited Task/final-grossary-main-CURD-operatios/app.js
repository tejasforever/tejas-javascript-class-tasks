let infoList = [];
let index = -1;
function addInfo() {
    let info = document.getElementById("grocery").value;
    if (index < 0 && !infoList.includes(info)) {
        infoList.push(info);
    }
    else {
        infoList[index] = info;
    }
    document.getElementById("grocery").value = "";
    index = -1;
    displayInfo();
}

function displayInfo() {
    let displayList = infoList.map(function (a, t) {
        return `
        <tr>
        <td>${a}</td>
        <td><button type="button" class="add-btn" onclick="editInfo(${t})">Edit</button></td>
        <td><button type="button" class="add-btn" onclick="deletInfo(${t})">Delet</button></td>
        </tr>
        `
    }).join("");
    document.getElementById("grocery-list").innerHTML = displayList;
}

function deletInfo(t) {
    infoList.splice(t, 1);
    displayInfo();
}

function clearAll(t) {
    infoList.splice(t);
    displayInfo();
}

function editInfo(h) {
    index = h;
    document.getElementById("grocery").value = infoList[h];
}

displayInfo();