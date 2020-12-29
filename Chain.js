class Chain{

 constructor(body1,body2,offsetX,offsetY){

   this.offsetX = offsetX;
   this.offsetY = offsetY;

    var options = {

        bodyA : body1,
        bodyB : body2,
        pointB:{x:this.offsetX,y:offsetY},
        stiffness : 0.5,
        length : 10
    }

  this.chain = Constraint.create(options);
    World.add(world, this.chain);

 }

display(){

    rod.body.position = rpos;
    ball.body.position = bpos;
 
    strokeWeight(4)
    line(body1.y, body1.x,rpos.y,this.offsetX,this.offsetY);
} 

  
}
