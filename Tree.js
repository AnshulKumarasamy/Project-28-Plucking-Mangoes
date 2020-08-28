class Tree {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,options);
      this.image= loadImage("tree.png");
      console.log(this.body);
     //World.add(world, this.body);
    }

    display(){
      imageMode(CENTER);
      var pos =this.body.position;
      fill("brown");
      image(this.image, pos.x, pos.y, 500, 500);
    }
  }