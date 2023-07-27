class Shape{
constructor(shapeColor){
    this.shapeColor = shapeColor;
    }
createShape(){
    throw new Error("Create shape method must be implimented by subclass");

}
}
class Circle extends Shape{
 createShape() {
    return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`
 }
}

class Triangle extends Shape{
createShape(){
    return `<polygon height="100%" width="100%" points="0,200 300, 200 150,0" fill="${this.shapeColor}"`
}
}

class Square extends Shape{
createShape(){
    return `<rect x="50" height="50" width="200" fill="${this.shapeColor}"`
}

};
module.exports = {Circle, Square, Triangle}
