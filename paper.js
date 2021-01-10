class Paper{
constructor(x,y,angle,radius){
    var options={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
         }
         this.body = Bodies.circle(x,y,angle,radius,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      Matter.Body.setAngle(this.body,angle)
      
    }
    display(){
        var position=this.body.position
        var angle=this.body.angle
        push();
        translate(position.x,position.y)
        rotate(angle)
        fill("purple")
        ellipseMode(RADIUS);
        ellipse(0,0,20,20)
        pop();
      
    
    }
}