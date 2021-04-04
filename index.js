window.onload = function () {
    document.getElementById('btn').addEventListener('click', function () {
        validate()
    });

    function validate() {
        var names = document.forms["sendMessage"]["name"].value;
        var email = document.forms["sendMessage"]["email"].value;
        var message = document.forms["sendMessage"]["message"].value;
        atposition = email.indexOf("@");
        dotposition = email.lastIndexOf(".");

        if (email == "" || names == "" || message == "") {
            alert("Please fill out all fields");
            return false;
        } else if (atposition < 1 || (dotposition - atposition < 2)) {
            alert("Please enter correct email")
            email.focus();
            return false;
        } else if (names.length < 3 || names.length > 35 || names.match(/^[0-9]+$/)) {
            alert("Please enter correct name");
            names.focus();
            return false;
        } else {
            alert('Message Sent')
            reset();
        }
        return true;
    }

    function reset() {
        location.reload();
    }


}