import {CGFobject} from '../lib/CGF.js';
import { MyDiamond } from "./MyDiamond.js";
import { MyParallelogram } from "./MyParallelogram.js";
import { MyTriangle } from "./MyTriangle.js";
import { MyBigTriangle } from "./MyBigTriangle.js";
import { MySmallTriangle } from "./MySmallTriangle.js";

export class MyTangram extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initBuffers();
    }
    initBuffers() {
        //INITIALIZING OBJECTS
        this.scene.diamond = new MyDiamond(this.scene);
        this.scene.triangle = new MyTriangle(this.scene);
        this.scene.parallelogram = new MyParallelogram(this.scene);
        this.scene.bigTriangle = new MyBigTriangle(this.scene);
        this.scene.smallTriangle = new MySmallTriangle(this.scene);
    }
    display() {

        //TRANSFORMATIONS    
        var diamondT = [
        0.5, 0.5, 0.0, 0.0,
        -0.5, 0.5, 0.0, 0.0,
        0.0, 0.0, 1.0, 0.0, 
        -1.5, 0.5, 0.0, 1.0,
        ]
    

       //DIAMOND
       this.scene.pushMatrix();
       this.scene.multMatrix(diamondT);
       
       this.scene.diamond.display();
       this.scene.popMatrix();

        //TRIANGLE
        this.scene.pushMatrix();
        this.scene.scale(0.707,0.707,0)
        this.scene.translate(0,1.414,0)
        this.scene.rotate(Math.PI/4, 0, 0, 1); 
        this.scene.triangle.display();
        this.scene.popMatrix();
        
        //PARALLELOGRAM
        this.scene.pushMatrix();
        
        this.scene.translate(1,0,0)
        this.scene.scale(-0.707,0.707,0)
        this.scene.rotate(3*Math.PI/4, 0, 0, 1);
        this.scene.parallelogram.display();
        this.scene.popMatrix();
        //SMALL TRIANGLE PURPLE
        this.scene.pushMatrix();
        this.scene.scale(0.707,0.707,0)
        this.scene.translate(-0.707,0.707,0)
        this.scene.rotate(3*Math.PI/4, 0, 0, 1); 
        this.scene.smallTriangle.display();
        this.scene.popMatrix();

        //SMALL TRIANGLE RED
        this.scene.pushMatrix();
        this.scene.scale(0.707,0.707,0)
        this.scene.translate(1.414,2.414,0)
        this.scene.rotate(-Math.PI/2, 0, 0, 1); 
        this.scene.smallTriangle.display();
        this.scene.popMatrix();
        
        //BIG TRIANGLE BLUE

        this.scene.pushMatrix();
        this.scene.translate(2,2,0)
        this.scene.scale(-0.707,-0.707,0)
        this.scene.rotate(Math.PI/4, 0, 0, 1);
        this.scene.bigTriangle.display();
        this.scene.popMatrix();

        //BIG TRIANGLE ORANGE
        this.scene.pushMatrix();
        this.scene.translate(0,2,0)
        this.scene.scale(-0.707,-0.707,0)
        this.scene.rotate(Math.PI/4, 0, 0, 1);
        this.scene.bigTriangle.display();
        this.scene.popMatrix();
    }
}