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
