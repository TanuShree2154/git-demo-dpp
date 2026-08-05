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

//read json 
const student = JSON.parse(
    fs.readFileSync("student.json")
);
