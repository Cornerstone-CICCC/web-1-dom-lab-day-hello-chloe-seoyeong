const form = document.querySelector("form");
const employeesTable = document.querySelector("#employeeList");

function deleteRow(e) {
    const target = e.target.parentElement;
    const targetRow = target.parentElement;

    const sure = confirm("Are you sure want to delete this employee?");

    if (sure) {
        targetRow.remove();
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const firstName = formData.get("firstname");
    const lastName = formData.get("lastname");
    const email = formData.get("email");
    const hireDate = formData.get("hire_date");
    const photo = formData.get("photo");

    const tr = document.createElement("tr");
    const photoTd = document.createElement("img");
    photoTd.src = `./images/${photo.name}`;

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";

    tr.innerHTML = `
        <td></td>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${email}</td>
        <td>${hireDate}</td>
        <td></td>
    `;

    tr.firstElementChild.append(photoTd);
    tr.lastElementChild.append(deleteButton);

    deleteButton.addEventListener("click", deleteRow);

    employeesTable.append(tr);
    form.reset();
})

