const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {

    // Serve form.html
    if (req.method === "GET" && req.url === "/") {

        const file = fs.readFileSync("form.html");

        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        res.end(file);
    }

    // Serve CSS
    else if (req.method === "GET" && req.url === "/style.css") {

        const file = fs.readFileSync("style.css");

        res.writeHead(200, {
            "Content-Type": "text/css"
        });

        res.end(file);
    }

    // Serve JavaScript
    else if (req.method === "GET" && req.url === "/script.js") {

        const file = fs.readFileSync("script.js");

        res.writeHead(200, {
            "Content-Type": "application/javascript"
        });

        res.end(file);
    }

    // Save registration
    else if (req.method === "POST" && req.url === "/register") {

        let body = "";

        req.on("data", chunk => {
            body += chunk;
        });

        req.on("end", () => {

            try {

                const student = JSON.parse(body);

                let students = [];

                if (fs.existsSync("student.json")) {

                    const data = fs.readFileSync(
                        "student.json",
                        "utf8"
                    );

                    if (data.trim() !== "") {
                        students = JSON.parse(data);
                    }
                }

                students.push(student);

                fs.writeFileSync(
                    "student.json",
                    JSON.stringify(students, null, 2)
                );

                res.writeHead(200, {
                    "Content-Type": "application/json"
                });

                res.end(JSON.stringify({
                    message: "Student registered successfully!"
                }));

            } catch (error) {

                res.writeHead(500, {
                    "Content-Type": "application/json"
                });

                res.end(JSON.stringify({
                    message: "Error saving student"
                }));
            }
        });
    }

    else {
        res.writeHead(404);
        res.end("Not Found");
    }
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});