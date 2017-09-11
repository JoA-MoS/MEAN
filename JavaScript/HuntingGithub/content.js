document.addEventListener('DOMContentLoaded', function () {
    $.get("https://api.github.com/users/JoA-MoS", displayName)
}, false);


function displayName(data) {
    document.write(data.name);
}
