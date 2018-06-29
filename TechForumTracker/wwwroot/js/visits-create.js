var createCookie = function (name, value, days) {
    var expires;
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    else {
        expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}

$(document).ready(function () {
    var prevVal;

    $("#visit-date-input").val(new Date().toISOString());
    prevVal = getCookie("visit-location-input");
    if (prevVal.length > 0) {
        $("#visit-location-input").val(prevVal);
    }
    prevVal = getCookie("password-input");
    if (prevVal.length > 0) {
        $("#password-input").val(prevVal);
    }

    $("#create-button").click(function () {
        //createCookie("visitor-badge-number-input", $("#visitor-badge-number-input").val());
        //createCookie("visit-date-input", $("#visit-date-input").val());
        createCookie("visit-location-input", $("#visit-location-input").val(),4);
        createCookie("password-input", $("#password-input").val(),4);
    });
});
