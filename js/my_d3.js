$(Document).ready(function () {
    $("#A").click(function () {
        $("svg").animate({ left: '550px' });
    });
    $("#B").click(function () {
        $("svg").animate({ top: '250px' });
    });
});