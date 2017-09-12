$(document).ready(function () {

    var person = prompt("Please enter your name", "Harry Potter");
    var socket = io.connect();
    console.log('connected');

    $('#btnSendMsg').click(function () {
        msg = $('#msg').val();
        socket.emit("button_clicked", { user: person, message: msg, time: new Date() });
        $('#msg').val('');
        $('#msg').focus();
    });

    socket.on('new_msg', function (data) {
        let chatLine = `<p><span title="${data.time.toLocaleString()}">${data.user}:</span> ${data.message}</p>`;
        let chatWindow = $('#chat-window');
        chatWindow.append(chatLine);
        scrollSmoothToBottom('chat-window');
    });

    function scrollSmoothToBottom(id) {
        var div = document.getElementById(id);
        $('#' + id).animate({
            scrollTop: div.scrollHeight - div.clientHeight
        }, 500);
    }

});
