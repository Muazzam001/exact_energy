$(document).ready(function () {

    $('.navbar-toggler').on('click', function (e) {
        e.stopPropagation();
        $(this).closest('.banner-menu').toggleClass('open-toggle');
    });

});