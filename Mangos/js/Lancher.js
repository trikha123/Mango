class Lancher{
    constructor(body, anchor){
        var options = {
            bodyA: body,
            pointB: anchor,
            stiffness:0.01,
            length: 5 
    }
    this.bodyA = body;
    this.pointB = anchor;
this.Lancher = Constraint.create(options);
World.add(world, this.Lancher);



}
fly(){
    this.Lancher.bodyA = null
}
attach(body){
    this.Lancher.bodyA = body
}

display(){
if(this.Lancher.bodyA){
    var pointA = this.Lancher.bodyA.position
    var pointB = this.pointB
    strokeWeight(3);
    line(pointA.x, pointA.y, pointB.x, pointB.y)    
}

}
} 





