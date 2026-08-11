const form = document.getElementById("studentForm");

form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const student = {
        name: document.getElementById("name").value,
        rollno: document.getElementById("roll").value,
        branch: document.getElementById("branch").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value
    };

    try {
        const response = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(student)
        });

        const result = await response.json();

        alert(result.message);

        form.reset();

    } catch (error) {
        console.error(error);
        alert("Registration failed");
    }
});