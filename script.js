const form = document.getElementById("studentForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const roll = document.getElementById("roll").value;
    const branch = document.getElementById("branch").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    alert(
        "Registration Successful!\n\n" +
        "Name: " + name + "\n" +
        "Roll No: " + roll + "\n" +
        "Branch: " + branch + "\n" +
        "Email: " + email + "\n" +
        "Phone: " + phone
    );

    form.reset();
});