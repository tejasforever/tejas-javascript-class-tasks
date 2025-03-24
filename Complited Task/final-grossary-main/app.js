let infoList = [];

function addInfo() {
    let info = document.getElementById("grocery").value;
    if (info == "") {
        alert("Please enter a grocery item");
    }
    else if (!infoList.includes(info)) {
        infoList.push(info);
    }
    else {
        alert("This item is already in the list!");
    }
    document.getElementById("grocery").value = "";
    displayInfo();
}

function displayInfo() {
    let displayList = infoList.map(function (a) {
        return `
        <tr>
        <td>${a}</td>
        <td><button type="button" class="add-btn" onclick="editInfo()">Edit</button></td>
        <td><button type="button" class="add-btn" onclick="deletInfo()">Delet</button></td>
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

displayInfo();