class Paddle {

 constructor(x,y,width,height);
 

 BottomPaddle=Bodies(400,600,200,20);

 SidePaddle1=Bodies(395,600,20,100);

 SidePaddle2=Bodies(405,600,20,100);

 World;add(world,BottomPaddle,SidePaddle1,SidePaddle2);

 display(){

var pos =this.BottomPaddle.position;
pos=this.SidePaddle1.position;
pos=this.SidePaddle2.position;
 rectMode=CENTER;
 fil("red");

 Matter.Body.setStatic(this.BottomPaddle,false);
 Matter.Body.setStatic(this.SidePaddle1,false);
 Matter.Body.setStatic(this.SidePaddle2,false);
 }

}