$(function () {

    var isUserAuthenticated = false;

    //startFilling
    var actionButtonText = $("#startFilling");
    actionButtonText.text("Start");
    var screenValue;


    var authDiv = $('#auth');
    var notAuthDiv = $('#not-auth');
    notAuthDiv.css("display", "block");


    $("#rfid").on('input', function () {
        console.log("fired");
        var rfidValue = $(this).val();
        if (rfidValue == '#12345') {
            $(this).val('');
            // alert("authenicated");
            setTimeout(function () {

                screenValue = $("#screen-value");
                screenValue.text("Authenticated");

                authDiv.css("display", "block");
                notAuthDiv.css("display", "none");
            }, 500);
        }
    });

    $("#logout").on('click', logout);
    $("#startFilling").on('click', startFilling);

    var i;
    var interval = null;
    function startFilling() {

        if (actionButtonText.text() == 'Start') {
            i = 100;
            actionButtonText.text("Stop");
            interval = setInterval(function () {
                console.log(i);
                screenValue.text('');
                screenValue.text(++i);
            }, 1000);
        } else {
            clearInterval(interval);
            actionButtonText.text("Start");
            screenValue.text(i);
        }


    }

    function logout() {
        isUserAuthenticated = false;
        authDiv.css("display", "none");
        notAuthDiv.css("display", "block");


    }
});


