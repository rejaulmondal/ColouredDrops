class Drop4 {
    constructor(x, y, width, height) {
      var options = {
          'friction':1.0,
          'density':1.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      
    
    this.show = function(){
      var pos =this.body.position;
        var angle = this.body.angle;
        push ();
        translate(pos.x,pos.y);
        rotate(angle);
        strokeWeight(4);
        stroke("orange");
        rectMode(CENTER);
        fill(255);
        rect(0, 0, this.width, this.height);
        pop ();
    }
  }
        display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push ();
        translate(pos.x,pos.y);
        rotate(angle);
        strokeWeight(4);
        stroke("green");
        rectMode(CENTER);
        fill(255);
        rect(0, 0, this.width, this.height);
        pop ();
      }
    };
