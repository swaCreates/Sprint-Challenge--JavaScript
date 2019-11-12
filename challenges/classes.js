// 1. Copy and paste your prototype in here and refactor into class syntax.

// const CuboidMaker= function(length, width, height){
//     this.length= length;
//     this.width= width;
//     this.height= height;
//   }

//   CuboidMaker.prototype.volume= function(){
//     const cubeVol= this.length * this.width * this.height;
//     return cubeVol;
//   }

//   CuboidMaker.prototype.surfaceArea= function(){
//     const lw= this.length * this.width;
//     const lh= this.length * this.height;
//     const wh= this.width * this.height;
//     return 2 * (lw + lh + wh);

class CuboidMaker{
    constructor(length, width, height){
        this.length= length;
        this.width= width;
        this.height= height;
    }
    volume(){
        const cubeVol= this.length * this.width * this.height;
        return cubeVol;
    }
    surfaceArea(){
        const lw= this.length * this.width;
        const lh= this.length * this.height;
        const wh= this.width * this.height;
        return 2 * (lw + lh + wh);
    }
}

const cuboid= new CuboidMaker(4, 5, 5);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker{
    constructor(length, width, height){
        super(length, width, height)
    }
    volume(){
        cubeVol= this.length * this.width * this.height;
        return cubeVol;
    }
    surfaceArea(){
        const lw= this.length * this.width;
        const lh= this.length * this.height;
        const wh= this.width * this.height;
        return 2 * (lw + lh + wh);
    }
}

const cube= new CubeMaker(5, 5, 5);

console.log(cube.volume());
console.log(cube.surfaceArea());