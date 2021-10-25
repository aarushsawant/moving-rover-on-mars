canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

rover_width=100;
rover_height=90;
rover_X=240;
rover_Y=180;
rover_image="rover.png";
background_image="mars.jpg";

function add()
{
    background_imgtag=new Image();
    background_imgtag.onload=uplaodBackground;
    background_imgtag.src=background_image;

    rover_imgtag=new Image();
    rover_imgtag.onload=uplaodRover;
    rover_imgtag.src=rover_image;
}
function uplaodBackground()
{
    ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
}
function uplaodRover()
{
    ctx.drawImage(rover_imgtag,rover_X,rover_Y,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=='38')
    {
        up();
        console.log("up");
    }

    if(keyPressed=='40')
    {
        down();
        console.log("down");
    }

    if(keyPressed=='37')
    {
        left();
        console.log("left");
    }

    if(keyPressed=='39')
    {
        right();
        console.log("right");
    }
}

function up()
{
    if (rover_Y>=0)
    {
        rover_Y=rover_Y -10;
        console.log("when up arrow is pressed,x="+rover_X+" y="+rover_Y);
        uplaodBackground();
        uplaodRover();
    }
}

function down()
{
    if (rover_Y<=500)
    {
        rover_Y=rover_Y +10;
        console.log("when down arrow is pressed,x="+rover_X+" y="+rover_Y);
        uplaodBackground();
        uplaodRover();
    }
}

function left()
{
    if (rover_X>=0)
    {
        rover_X=rover_X -10;
        console.log("when left arrow is pressed,x="+rover_X+" y="+rover_Y);
        uplaodBackground();
        uplaodRover();
    }
}

function right()
{
    if (rover_X<=700)
    {
        rover_X=rover_X +10;
        console.log("when right arrow is pressed,x="+rover_X+" y="+rover_Y);
        uplaodBackground();
        uplaodRover();
    }
}