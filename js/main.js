$(document).ready(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 0) {
            $("#homepagesect #navbarsect .navdesk").css({ "background-color": "#012d2c" });
            $("#homepagesect #navbarsect .navtab").css({ "background-color": "#012d2c" });
            $("#navbarsect .navdesk").css({ "padding": "10px 177px 10px 176px" });
            $("#navbarsect .navbar-nav").css({ "--bs-nav-link-padding-y": "0.5rem" });
            $("#navbarsect .navbar-brand .logochange").attr("src", "img/small_logo.png");
            $("#navbarsect .navtab").css({ "padding": "10px 31px 10px 113px" });
            $("#navbarsect .navtab .navbar-nav").css({ "--bs-nav-link-padding-y": "0.5rem" });
            // $("#navbarsect .navtab .logochange").attr("src", "img/small_logo.png");

            $("#aboutpagesect #navbarsect .navdesk").css({ "background-color": "#027183" });
            $("#aboutpagesect #navbarsect .navtab").css({ "background-color": "#027183" });

            $("#deploypagesect #navbarsect .navdesk").css({ "background-color": "#eea99f" });
            $("#deploypagesect #navbarsect .navtab").css({ "background-color": "#eea99f" });
            $("#deploypagesect .navbar-brand .logochange").attr("src", "img/logoblack-sm.png");

            $("#websitecasepage #navbarsect .navdesk").css({ "background-color": "#681533" });
            $("#websitecasepage #navbarsect .navtab").css({ "background-color": "#681533" });

        } else {
            $("#homepagesect #navbarsect .navdesk").css({ "background-color": "#003334" });
            $("#homepagesect #navbarsect .navtab").css({ "background-color": "#003334" });
            $("#navbarsect .navdesk").css({ "padding": "42px  150px 0 176px" });
            $("#navbarsect .navbar-nav").css({ "--bs-nav-link-padding-y": "0" });
            $("#navbarsect .navbar-brand .logochange").attr("src", "img/logo2new.png");
            $("#navbarsect .navtab").css({ "padding": "31px 30px 31px 113px" });
            $("#navbarsect .navtab .navbar-nav").css({ "--bs-nav-link-padding-y": "0" });
            $("#navbarsect .navtab .logochange").attr("src", "img/logo2new.png");

            $("#aboutpagesect #navbarsect .navdesk").css({ "background-color": "#02758f" });
            $("#aboutpagesect #navbarsect .navtab").css({ "background-color": "#02758f" });

            $("#deploypagesect #navbarsect .navdesk").css({ "background-color": "#fbb7ab" });
            $("#deploypagesect #navbarsect .navtab").css({ "background-color": "#fbb7ab" });
            $("#deploypagesect .navbar-brand .logochange").attr("src", "img/logoblack.png");


            $("#websitecasepage #navbarsect .navdesk").css({ "background-color": "#781b39" });
            $("#websitecasepage #navbarsect .navtab").css({ "background-color": "#781b39" });

        }
    });
});