class rainDrop{
    constructor(x,y){
        this.body = Bodies.rectangle(x, y, width, height);
        this.width = width;
        this.height = height;
      World.add(world,this.body);
    }
display(){
    var pos = this.position
    var pos =this.body.position;
    rectMode(CENTER);
    fill("green");
    rect(pos.x, pos.y, this.width, this.height);
}

}