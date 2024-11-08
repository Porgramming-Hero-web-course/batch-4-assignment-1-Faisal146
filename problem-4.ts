{
  //


  type Circle = {
    shape: "circle";
    radius: number;
  };
  
  type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
  };
  
  type Shape = Circle | Rectangle;
  
  function calculateShapeArea(shape: Shape): number {

    if (shape.shape === "circle") {

       return Math.PI * shape.radius * shape.radius

    } else if (shape.shape === "rectangle") {

       return shape.width * shape.height

    } else {

      return 0

    }
  }
  
//   console.log(calculateShapeArea({ shape: "circle", radius: 5 }))
  
//   console.log(calculateShapeArea({ shape: "rectangle", width: 4, height: 6 }))
  



  //
}