$(document).ready(function () {
    $('#submit').click(function () {

        var value = parseInt($('#value').val());
        if (!isNaN(value))
    {
        window.location = `/page/${value}`;
    }
        else {
        alert("Value must be needed")
    }
});
});