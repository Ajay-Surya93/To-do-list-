var save = document.getElementById("save")
function update(){
        var name = document.getElementById("namevalue").value
        var age = document.getElementById("agevalue").value
        var course = document.getElementById("coursevalue").value
        var email = document.getElementById("emailvalue").value
        var gender = document.querySelector('input[name="Gender"]:checked')
        gender = gender ? gender.nextSibling.nodeValue.trim() : ""
        var rows = document.querySelectorAll(".task-container2 tr")
        for (let i = 1; i < rows.length; i++) {
            let row = rows[i];
            if (row.cells[0].textContent === "") { 
                row.cells[0].textContent = name;
                row.cells[1].textContent = age;
                row.cells[2].textContent = course;
                row.cells[3].textContent = gender;
                row.cells[4].textContent = email;
                break;
            }
        }
    }
document.addEventListener("click", function(event) {
if (event.target.classList.contains("delete")) {
    let row = event.target.closest("tr")
    let cells = row.getElementsByTagName("td")
    for (let i = 0; i < cells.length - 1; i++) {
        cells[i].textContent = ""}
    }
})
console.log("JavaScript file is loaded!");
