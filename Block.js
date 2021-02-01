class Block
{
    constructor(x,y)
    {
        var options={
            
            restitution:0.3,
            friction:0.5,
            density:1.2



        }
        this.x= x ;
        this.y= y;
        this.width=50;
        this.height = 50;
        this.body=Bodies.rectangle(this.x, this.y,50,50,options);
            World.add(world,this.body);
      
        }
        display()
         {
             var paperpos=this.body.position;
             var angle = this.body.angle;
             push()
             translate(paperpos.x,paperpos.y);
             rotate(angle);
            
             strokeWeight(3);
             fill(255,0,255);
                rect(0,0,this.width,this.height);
                pop()

             }
            }