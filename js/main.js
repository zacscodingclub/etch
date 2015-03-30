//

function createGrid(n){
    var squareSize = $("#container").width()/n - 2;    
    for (var i=0; i<=n; i++){
        for (var j=0; j<n; j++){
            $("#sketch").append('<div class="block"></div>');
        }
    $("<div></div>").css("clear","both").appendTo("#sketch");
    }
    $(".block").css('width',squareSize)
    $(".block").css('height',squareSize)
}

function clearGrid(){
    $('.lead').addClass("block").removeClass("lead");
    $('.purple').addClass("block").removeClass("purple");
}
var gridSize = prompt("How many squares on your grid?")
$(document).ready(createGrid(gridSize));

$(".block").hover(
    function(){
        $(this).addClass("lead");
    }, function(){
        $(this).removeClass("block");
});

$('#clear').click(clearGrid);

$('#purple').click(function(){
    $('.lead').addClass("purple").removeClass("lead");
});