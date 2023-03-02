var selectedRow = null;

//show Alerts
function showAlert(message, className){
    const div = document.createElement("dic");
    div.className = "alert alert-${className}";

    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div, main);

    setTimeout(() => document.querySelector(".alert").remove(), 3000);
}

//delete Data

document.querySelector("#student-list").addEventListener("click", (e) =>{
    target = e.target;
    if(target.classList.container("delete")){
        target.parentElement.parentElement.remove();
        showAlert("student Data Deleted", "danger");
    }
});