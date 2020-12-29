class Bob {
    constructor(x,y,radius) {

      var options = {

          isStatic: false,
          density: 0.1,
          friction: 0.1

      }

      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      
      World.add(world, this.body);

    }
    display(){

      var pos =this.body.position;
      ellipseMode(RADIUS);
      fill("Gray");
      ellipse(pos.x, pos.y, this.radius, this.radius);

    }

  };