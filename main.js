canvas= document.getElementById("can");
ctx=canvas.getContext("2d");
var mouseEvent="empty";
var lastposx, lastposy;
Color="black";
width=1;
radius=6;

canvas.addEventlistener("mousedown", mosuedwn);

function mosuedwn(e){
     mouseEvent="mousedown";
}

canvas.addEventlistener("mouseup", mosueup);

function mosueup(e){
     mouseEvent="mouseup";
}

canvas.addEventlistener("mousedown", mosuedwn);

function mosuedwn(e){
     mouseEvent="mousedown";
}

canvas.addEventlistener("mouselve", mosuelve);

function mosuelve(e){
     mouseEvent="mouselve";
}   


canvas.addEventlistener("mousemve", mosuemve);

function mosuemve(e){
     currposx=e.clientX- canvas.offsetLeft;
     currposy=e.clientY- canvas.offsetTop;

     if(mouseEvent=="mousedown"){
         ctx.beginPath();
         ctx.strokeStyle="grey";
         ctx.LineWidth=4;
         ctx.rect(150,100,40,0,2);
         ctx.stroke();

         ctx.beginPath();
         ctx.strokeStyle=Color;
         ctx.LineWidth=width;
         ctx.rect(200,200,40,2* Math.PI);
         ctx.stroke();


         console.log("last Postions of x and y coordinates=");
         console.log("x="+lastposx+",y="+ lastposy);
         ctx.moveTo(lastposy, lastposx)

         console.log("Current Postions of x and y coordinates=");
         console.log("x="+lastmusx+",y="+ lastpmusy);
         ctx.lineTo(currposx,currposy);
         ctx.stroke();
     }

     lastposx= currposx;
     lastposy=currposy;
}