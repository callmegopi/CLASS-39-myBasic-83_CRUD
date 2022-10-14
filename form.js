var header1 = document.createElement("h1")
header1.innerHTML = "Basic 83"
var header2 = document.createElement("h2")
header2.innerHTML = "Free HTML5 Website Template"

header1.appendChild(header2)
document.getElementById("hgroup").appendChild(header1)


var person = {
    email: "",
    fullName: "",
    userName: "",
}

// var outPut = []
var outPut = JSON.parse(localStorage.getItem("persons"));

// =================== create =================
function getUserData(event) {
    event.preventDefault()
    for (a in person) {
        person[a] = document.getElementById(a).value
    }
    outPut.push({ ...person })
    var convertedDetailes = JSON.stringify(outPut)
    localStorage.setItem("persons", convertedDetailes)

    displayPersons()
    clearForm()
    valiDate()
}

// ============== clear ==========================
function clearForm() {
    for (a in person) {
        document.getElementById(a).value = ""
    }
}

// =================== displayperson ================
function displayPersons() {
    document.querySelector("tbody").innerHTML = ""
    outPut.forEach((person, i) => {
        var myTr = document.createElement("tr")
        var indexTd = document.createElement("td")
        indexTd.innerHTML = i + 1
        myTr.appendChild(indexTd)
        for (a in person) {
            var myTd = document.createElement("td")
            myTd.innerHTML = person[a]
            myTr.appendChild(myTd)
        }

        // ======== Edit person ==============
        var editTd = document.createElement("td")
        var editBtn = document.createElement("button")
        editBtn.setAttribute("onclick", "editPerson(" + i + ")")
        editBtn.innerHTML = "Edit"
        editTd.appendChild(editBtn)
        myTr.appendChild(editTd)


        // ========= deletePerson =================
        var deleteTd = document.createElement("td")
        var deleteBtn = document.createElement("button")
        deleteBtn.setAttribute("onclick", "deletePerson(" + i + ")")
        deleteBtn.innerHTML = "Delete"
        deleteTd.appendChild(deleteBtn)
        myTr.appendChild(deleteBtn)

        document.querySelector("tbody").appendChild(myTr)
    })
}
displayPersons();

// ============== validate ==============================
function valiDate() {
    console.log("you pressed a key")
    var formActive = true
    for (a in person) {
        let userData = document.getElementById(a).value
        if (a !== "email") {
            if (userData.length == 0) {
                formActive = false
            }
        } else {
            var emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            if (!emailPattern.test(userData)) {
                formActive = false
            }
        }
    }

    if (formActive) {
        document.querySelector("button").removeAttribute("disabled")
    } else {
        document.querySelector("button").setAttribute("disabled", true)
    }
}
var index;
// ============= editPerson ====================
function editPerson(i) {
    index = i;
    for (a in person) {
        document.getElementById(a).value = outPut[i][a]
    }
    document.getElementById("update").style.display = "block"
    document.getElementById("submit").style.display = "none"
}


// =========== deleteperson =========================
function deletePerson(i) {
    console.log("delete person " + i)
    outPut.splice(i, 1);
    localStorage.setItem("persons", JSON.stringify(outPut));
    displayPersons();
}

// ============= updateperson =========================
function updatePerson() {
    for (a in person) {
        person[a] = document.getElementById(a).value
    }
    outPut[index] = { ...person };
    displayPersons();
    localStorage.setItem("persons", JSON.stringify(outPut));
    document.getElementById("update").style.display = "none";
    document.getElementById("submit").style.display = "block";
    clearForm();
}

document.querySelector("button").onclick = getUserData