function Circle(radius){
    this.radius=radius;
    this.getArea=function(){
        return Math.PI*radius*radius;
    };
    this.getPerimeter=function(){
        return 2*Math.PI*radius;
    };
    
}
const Myobject=new Circle(11);
console.log(Myobject.getArea());
console.log(Myobject.getPerimeter())
const object=new Circle(4.4);
console.log(object.getArea())
console.log(object.getPerimeter())

