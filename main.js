Status="";
objects=[];
function setup()
{
    canvas=createCanvas(500,450);
    canvas.center();
     
}
img="";
 function preload()
 {
    img=loadImage("download.jpg");
 }

 function draw()
 {
    image(img,0,0,500,450);
    if(Status !="")
    {
       for(i=0;i<objects.length;i++)
       {
         document.getElementById("Status").innerHTML="Status:Object Detected";

         fill("FF0000");
         percent=floor(objects[i].confidence * 100);
         text(objects[i].lable+""+percent+"%",objects[i].x +15,objects[i].y +15);
         noFill();
         stroke("FF000");
         rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);

       }
    }
 }