// https://github.com/github/fetch

document.querySelector(".submit").addEventListener("click", function(event) {
    event.preventDefault();
    fetch("https://formsubmit.co/ajax/support@carica.bg", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: document.querySelector("#name").value,
            surname: document.querySelector("#surname").value,
            phone: document.querySelector("#phone").value,
            email: document.querySelector("#email").value,
            message: document.querySelector("#message").value,
        })
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
})
