$(document).ready(
    function(){
    $("#social").hover(function(){
        $("#title").addClass("social");
    },
    function(){
        $("#title").removeClass("social");
    });
    $("#about").hover(function(){
        $("#title").addClass("about");
    },
    function(){
        $("#title").removeClass("about");
    })});