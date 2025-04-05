
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("userform").addEventListener("submit", async function (event) {
        event.preventDefault(); 

        
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let location = document.getElementById("location").value;

        
        let employeeData = {
            name: name,
            email: email,
            location: location
        };

        console.log("Sending Data:", employeeData); 

        try {
            let response = await fetch("http://localhost:8080/api/employees", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(employeeData)
            });

            if (!response.ok) {
                throw new Error("HTTP error! Status: " + response.status);
            }

            let result = await response.json();
            console.log("Success:", result);

        } catch (error) {
            console.error("Error:", error);
        }
    });
});
