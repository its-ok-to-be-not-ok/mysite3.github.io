const Inputsv = document.getElementById("Inputsv");
const Displaysv = document.getElementById("Btn2");
const inputField = document.getElementById("inputField");
const outputField = document.getElementById("outputField");

var svs = [];

class Sv{
    constructor(id, name, dob, classroom, gpa)
    {
        this.id = id;
        this.name = name;
        this.dob = dob;
        this.classroom = classroom;
        this.gpa = gpa;
    }
}

function submit()
{
    console.log("hello");
    inputField.innerHTML = '';
    var slsv = Number(Inputsv.value);
    for(let i = 1; i <= slsv; ++i)
    {
        var stuDiv = document.createElement("div");

        var idLabel = document.createElement("label"); idLabel.textContent = "Mã SV " + i + ": ";
        var idInput = document.createElement("input");
        idInput.type = "text";
        idInput.name = "idInput" + i;

        var nameLabel = document.createElement("label"); nameLabel.textContent = "   Họ và tên: ";
        var nameInput = document.createElement("input");
        nameInput.type = "text";
        nameInput.name = "nameInput" + i;

        var dobLabel = document.createElement("label"); dobLabel.textContent = "   Ngày sinh: ";
        var dobInput = document.createElement("input");
        dobInput.type = "date";
        dobInput.name = "dobInput" + i;

        var classroomLabel = document.createElement("label"); classroomLabel.textContent = "   Lớp: ";
        var classroomInput = document.createElement("input");
        classroomInput.type = "text";
        classroomInput.name = "classroomInput" + i;


        var gpaLabel = document.createElement("label"); gpaLabel.textContent = "   gpa: ";
        var gpaInput = document.createElement("input");
        gpaInput.type = "number";
        gpaInput.name = "gpaInput" + i;

        stuDiv.appendChild(idLabel);
        stuDiv.appendChild(idInput);
        stuDiv.appendChild(nameLabel);
        stuDiv.appendChild(nameInput);
        stuDiv.appendChild(dobLabel);
        stuDiv.appendChild(dobInput);
        stuDiv.appendChild(classroomLabel);
        stuDiv.appendChild(classroomInput);
        stuDiv.appendChild(gpaLabel);
        stuDiv.appendChild(gpaInput);

        
        inputField.appendChild(stuDiv);
        inputField.appendChild(document.createElement("br"));

        inputField.style.display = "block";
    }
    var submitBtn = document.createElement("button");
    submitBtn.textContent = "Submit";
    submitBtn.onclick = "submitStudents()";
    inputField.appendChild(submitBtn);

}

function submitStudents() {
    var slsv = Inputsv.value;

    for (var i = 1; i <= slsv; i++) {
        var id = document.getElementsByName("idInput" + i)[0].value;
        var name = document.getElementsByName("nameInput" + i)[0].value;
        var dob = document.getElementsByName("dobInput" + i)[0].value;
        var className = document.getElementsByName("classroomInput" + i)[0].value;
        var gpa = document.getElementsByName("gpaInput" + i)[0].value;

        var sv = new Sv(id, name, dob, classroom, gpa);
        svs.push(sv);
    }
    console.log(svs.length);

    var displayArea = document.getElementById("outputField");
    displayArea.innerHTML = ""; 

    for (var j = 0; j < svs.length; j++) {
        var studentInfo = document.createElement("p");
        studentInfo.innerHTML = "Student " + (j + 1) + ": <br>" +
            "ID: " + students[j].id + "<br>" +
            "Name: " + students[j].name + "<br>" +
            "DOB: " + students[j].dob + "<br>" +
            "Class: " + students[j].className + "<br>" +
            "GPA: " + students[j].gpa;
        displayArea.appendChild(studentInfo);
    }
}
function displayStudentInfo() {
    var displayArea = document.getElementById("outputField");
    displayArea.innerHTML = ""; 

    var slsv = Inputsv.value;
    var studentsInfo = "";
    for (var i = 1; i <= slsv; i++) {
        var id = document.getElementsByName("idInput" + i)[0].value;
        var name = document.getElementsByName("nameInput" + i)[0].value;
        var dob = document.getElementsByName("dobInput" + i)[0].value;
        var className = document.getElementsByName("classroomInput" + i)[0].value;
        var gpa = document.getElementsByName("gpaInput" + i)[0].value;

        studentsInfo += "Sinh viên " + i + ":<br>" +
            "ID: " + id + "<br>" +
            "Họ và tên: " + name + "<br>" +
            "Ngày sinh: " + dob + "<br>" +
            "Lớp: " + className + "<br>" +
            "GPA: " + gpa + "<br><br>";
    }

    displayArea.innerHTML = studentsInfo;
}

function update()
{
    var updateField = document.getElementById("updateField") ;
    var label1 = document.createElement("label");
    label1.textContent = "Nhập mã sinh viên cập nhật: ";
    var input1 = document.createElement("input");
    input1.type = "text";
    var Btn1 = document.createElement("button");
    Btn1.textContent = "Tìm kiếm";

    updateField.appendChild(label1);
    updateField.appendChild(input1);
    updateField.appendChild(Btn1);
    



    var updateCard = document.createElement("div");

    var nameLabel = document.createElement("label"); nameLabel.textContent = "Họ và tên: ";
    var nameInput = document.createElement("input");
    nameInput.type = "text";
    

    var dobLabel = document.createElement("label"); dobLabel.textContent = "   Ngày sinh: ";
    var dobInput = document.createElement("input");
    dobInput.type = "date";
        

    var classroomLabel = document.createElement("label"); classroomLabel.textContent = "   Lớp: ";
    var classroomInput = document.createElement("input");
    classroomInput.type = "text";
        

    var gpaLabel = document.createElement("label"); gpaLabel.textContent = "   gpa: ";
    var gpaInput = document.createElement("input");
    gpaInput.type = "number";

    var updateBtn = document.createElement("button");
    updateBtn.textContent = "Update";

    updateCard.appendChild(document.createElement("br"));
    updateCard.appendChild(nameLabel);
    updateCard.appendChild(nameInput);
    updateCard.appendChild(dobLabel);
    updateCard.appendChild(dobInput);
    updateCard.appendChild(classroomLabel);
    updateCard.appendChild(classroomInput);
    updateCard.appendChild(gpaLabel);
    updateCard.appendChild(gpaInput);
    updateCard.appendChild(updateBtn);
    updateCard.appendChild(document.createElement("br"));

    


    Btn1.onclick = function OpenUpdateCard()
    {
        slsv = Inputsv.value;
        var id = input1.value;
        var check = false;
        for(i = 1; i <= slsv ; ++i)
        {
            if(id === document.getElementsByName("idInput" + i)[0].value)
            {
                updateField.appendChild(updateCard);
                check = true;
                updateBtn.onclick = function submit()
                {
                    document.getElementsByName("nameInput" + i)[0].value = nameInput.value;
                    document.getElementsByName("dobInput" + i)[0].value = dobInput.value;
                    document.getElementsByName("classroomInput" + i)[0].value = classroomInput.value;
                    document.getElementsByName("gpaInput" + i)[0].valu = gpaInput.value;
                }

            }
        }
        if(!check) window.alert("Không tìm thấy sinh viên");
    }
}