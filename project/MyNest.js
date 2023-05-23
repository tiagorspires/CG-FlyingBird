import {CGFobject,CGFtexture,CGFappearance} from '../lib/CGF.js';
import { MySphere } from "./MySphere.js";
import { MyDonut } from "./MyDonut.js";

export class MyNest extends CGFobject{
  constructor(scene, radius, height, segments,texture) {

    super(scene);
    // Calculate the angle increment for each segment
  
    this.sphere = new MySphere(scene, 2, 20,20,".jpg",true);
    this.donut = new MyDonut(scene,2.3,2,0.2,300,"images/nest.jpg");

  }

  display() {
    this.scene.pushMatrix();
    this.scene.scale(1,0.1,1);
    this.sphere.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.rotate(Math.PI/2,1,0,0);
    this.scene.translate(0,0,-0.1);
    this.donut.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.scale(1.1,1,1.1);
    this.scene.rotate(Math.PI/2,1,0,0);
    this.scene.translate(0,0,-0.3);
    this.donut.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.scale(1.2,1,1.2);
    this.scene.rotate(Math.PI/2,1,0,0);
    this.scene.translate(0,0,-0.5);
    this.donut.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.scale(1.3,1,1.3);
    this.scene.rotate(Math.PI/2,1,0,0);
    this.scene.translate(0,0,-0.7);
    this.donut.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.scale(1.3,1,1.3);
    this.scene.rotate(Math.PI/2,1,0,0);
    this.scene.translate(0,0,-0.9);
    this.donut.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.scale(1.4,1,1.4);
    this.scene.rotate(Math.PI/2,1,0,0);
    this.scene.translate(0,0,-1.1);
    this.donut.display();
    this.scene.popMatrix();
  
  }
}
