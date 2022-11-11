$(window).load(function() {
    console.log("talking");

    fetch('my_fetch_url') {
        if (Response.status != 200) {
            window.alert('oopsie daisy, you done messed up!');
            return;
        }

        Response.json().then(function(data) {
            let api = data;
            let isLoaded = document.getElementsByClassName('.isLoaded');
            
        }
    }
}