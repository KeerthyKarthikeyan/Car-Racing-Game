canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

rover_width=120;
rover_height=90;
background_image="racing.jpg";
rover_image="car1.png";

rover1_width=120;
rover1_height=90;
rover1_image="car2.png";


rover_x=10;
rover_y=35;

rover1_x=10;
rover1_y=130;

function add() {
    background_imgtag=new Image();
    background_imgtag.onload=uploadbackground;
    background_imgtag.src=background_image;

    rover_imgtag=new Image();
    rover_imgtag.onload=uploadrover;
    rover_imgtag.src=rover_image;

    rover1_imgtag=new Image();
    rover1_imgtag.onload=uploadcar;
    rover1_imgtag.src=rover1_image;
}

function uploadbackground() {
  ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);

}

function uploadrover() {
    ctx.drawImage(rover_imgtag,rover_x,rover_y,rover_width,rover_height);
    
  }

  function uploadcar() {
    ctx.drawImage(rover1_imgtag,rover1_x,rover1_y,rover1_width,rover1_height);
    
  }

  window.addEventListener("keydown",my_keydown);
  function my_keydown(e){
   keypress=e.keyCode;
   console.log(keypress);
   if(keypress=="38"){
       up();
       console.log("up");
   }
   if(keypress=="39"){
    right();
    console.log("right");
}
if(keypress=="37"){
    left();
    console.log("left");
}
if(keypress=="40"){
    down();
    console.log("down");
}
  }
  window.addEventListener("keydown",my_keydown);
  function my_keydown(e){
   keypress=e.keyCode;
   console.log(keypress);
   if(keypress=="87"){
       up();
       console.log("up");
   }
   if(keypress=="68"){
    right();
    console.log("right");
}
if(keypress=="65"){
    left();
    console.log("left");
}
if(keypress=="83"){
    down();
    console.log("down");
}
  }