class Paper
{
    constructor(x,y,radius)
  {
 var  options= 
    {
        restitution:0.3,
        friction:0.5,
        density:1.2
    }
    this.body = Bodies.circle(x, y,radius,options);
    //this.x = x;
    //this.y = y;
    this.radius = radius;
    World.add(world, this.body);
  }
    display()
    {
        fill("white");
        ellipseMode(CENTER);
        ellipse(this.body.position.x,this.body.position.y,this.radius);
    }
}
