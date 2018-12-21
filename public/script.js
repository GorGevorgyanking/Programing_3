var side = 10;
var socket = io.connect('http://localhost:3000/');
var guyn = '';
var matrix = [];
function setup(){
    createCanvas(50 * side,50 * side);
    background('gray');
}
function draw(){
    socket.on('refresh',function(data){
        matrix = data;
    });
    for(var i = 0;i<matrix.length;++i)
    {
        for(var j = 0;j<matrix[i].length;++j)
        {
            if(matrix[i][j] == 0)
            {
                fill("gray");
                rect(i * side,j * side, side, side);
            }
            else if(matrix[i][j] == 1)
            {
                fill(guyn);
                rect(i * side,j * side, side, side);
            }
            else if(matrix[i][j] == 2)
            {
                fill("yellow");
                rect(i * side,j * side, side, side);
            }
            else if(matrix[i][j] == 3,6)
            {
                fill("red");
                rect(i * side,j * side, side, side);
            }
            else if(matrix[i][j] == 4)
            {
                fill("black");
                rect(i * side,j * side, side, side);
            }
        }
    }
}
$(document).ready(function(){
        $('<h1></h1>').attr('class','h1_text').appendTo('body');
        $('<div></div>').attr({
            'id':'statica',
        }).appendTo('body').css({
            'width':'500px',
            'height':'500px',
            'position':'absolute',
            'left':'600px',
            'top':'0px',
            'border':'solid black',
            'overflow':'scroll'
        });
        socket.on('obj',function(data){
            $('#statica').empty();
            if(data != [])
            {
                for(var i = 0;i<data.length;++i){
                    var anun = data[i].anun;
                    var patjar = data[i].patjar;
                    $('<p></p>').attr({
                        'class':'text',
                    }).appendTo('#statica').text(anun + '////////////' + patjar);
                }
            }
        });
        socket.on('number',function(data){
            if(data == 0)
            {
                guyn = 'green';
                $(document).ready(function(){
                    $(".h1_text").text('Գարուն');
                });
            }
            else if(data == 1)
            {
                guyn = 'lightgreen';
                $(document).ready(function(){
                    $(".h1_text").text('Ամառ');
                });
            }
            else if(data == 2)
            {
                guyn = 'lightyellow';
                $(document).ready(function(){
                    $(".h1_text").text('Աշուն');
                });
            }
            else if(data == 3)
            {
                guyn = 'lightblue';
                $(document).ready(function(){
                    $(".h1_text").text('Ձմեռ');
                });
            }
        });
    });