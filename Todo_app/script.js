let tbox = document.getElementById('textbox');
let btn = document.getElementById('btn');
let usrInput = document.getElementById('userInput');
let wrongInput = document.getElementById('wrong');

btn.addEventListener('click', () => {

    let taskContainer = document.createElement("div");
    taskContainer.className = "task-container";      //creating list button ,checkbox, parent div.
    usrInput.append(taskContainer);     // apppending parent div in ul.
    let task = document.createElement('li');    // creating Li element.
    let checkbox = document.createElement('input');  // Creating check-box.
    let dltCon = document.createElement('button');

    checkbox.type = 'checkbox';
    checkbox.className = 'tick-check';
    taskContainer.append(checkbox);        // Appending checkbox
    checkbox.addEventListener('click', function () {
        task.classList.toggle("newC");  // Toggling class in li element.
    });
    dltCon.addEventListener('click', function () {
        this.parentElement.remove();  // Removing parent element of dltCon.
    });

    dltCon.innerText = "Delete";
    taskContainer.append(dltCon);  // appending delete btn
    task.innerHTML = tbox.value;
    taskContainer.append(task);
    usrInput.style.listStyle = "none";
    usrInput.style.textAlign = "center";
    usrInput.style.fontSize = "3rem";
});


