import { CGFscene, CGFcamera, CGFaxis, CGFappearance, CGFshader, CGFtexture } from "../lib/CGF.js";
import { MySphere } from "./MySphere.js";

export class MyPanorama extends CGFscene {
    constructor(scene,texture){
        super(scene);
        this.scene = scene;
        this.sphere = new MySphere(scene,200,32,64,texture, false);
  
      // Cria um material com componente emissiva e a textura associada
      
      //this.material.setEmissive([1, 1, 1, 1]); // define a cor emissiva como branco
  
      // Inverte as normais da esfera
      //this.sphere.invertNormals();
    }
  
    display() {

      this.scene.pushMatrix();
      this.scene.rotate(Math.PI,1,0,0);
      this.sphere.display();
      this.scene.popMatrix();
    }
  }
  