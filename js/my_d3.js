$(Document).ready(function () {
    $("#A").click(function () {
        $("svg").animate({ left: '+=50px' });
    });
    $("#B").click(function () {
        $("svg").animate({ top: '+=50px' });
    });
});