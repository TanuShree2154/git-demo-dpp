const fs = require("fs");
let passed =true ;
console.log("Registration test\n");

//tc 1
if (fs.existsSync("index.html")){
    console.log("TC-01 : index.html exists :PASS");
}
else{
    console.log("TC-01 : index.html exists :FAIL");
    passed=false;
}

//tc 2
if (fs.existsSync("style.css")){
    console.log("TC-02 : style.css exists :PASS");
}
else{
    console.log("TC-02 : style.css exists :FAIL");
    passed=false;
}

//tc 3
if (fs.existsSync("script.js")){
    console.log("TC-03 : script.js exists :PASS");
}
else{
    console.log("TC-03 : script.js exists :FAIL");
    passed=false;
}

//tc4 
if(fs.existsSync("student.json")){
    console.log("TC-04 : student.json exists :PASS");
}
else{
    console.log("TC-04 : student.json exists :FAIL");
    passed=false;
}


// Read JSON
let student;

try {

    student = JSON.parse(
        fs.readFileSync("student.json", "utf8")
    );

    // Get first student from array
    student = student[0];

    console.log("Student data loaded successfully");

}
catch (error) {

    console.log("Error reading student.json");
    passed = false;

}


// TC-05 to TC-09
if (student) {

    // TC-05
    if (student.name && student.name.trim() !== "") {
        console.log("TC-05 : Name Validation PASS");
    }
    else {
        console.log("TC-05 : Name Validation FAIL");
        passed = false;
    }


    // TC-06
    if (student.email && student.email.includes("@")) {
        console.log("TC-06 : Email Validation PASS");
    }
    else {
        console.log("TC-06 : Email Validation FAIL");
        passed = false;
    }


    // TC-07
    if (student.phone &&
        student.phone.toString().length === 10) {

        console.log("TC-07 : Phone Validation PASS");

    }
    else {

        console.log("TC-07 : Phone Validation FAIL");
        passed = false;

    }


    // TC-08
    if (student.branch && student.branch.trim() !== "") {
        console.log("TC-08 : Branch Validation PASS");
    }
    else {
        console.log("TC-08 : Branch Validation FAIL");
        passed = false;
    }


    // TC-09
    if (student.rollno && student.rollno.trim() !== "") {
        console.log("TC-09 : Roll Number Validation PASS");
    }
    else {
        console.log("TC-09 : Roll Number Validation FAIL");
        passed = false;
    }
}


// TC-10
if (passed) {

    console.log("TC-10 : Registration SUCCESS");
    process.exit(0);

}
else {

    console.log("TC-10 : Registration FAILED");
    process.exit(1);

}