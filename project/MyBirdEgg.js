import {CGFobject,CGFcamera, CGFaxis, CGFappearance, CGFtexture,CGFshader} from '../lib/CGF.js';
import { MySphere } from "./MySphere.js";
/**
 * MyBirdEgg
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyBirdEgg extends CGFobject {
    constructor(scene, texture,heightmap) {
        
        super(scene);
        this.scene = scene;
        this.x = Math.random() * 50 - 10;
        this.y = -30;
        this.z = Math.random() * 50 - 10;
        this.angle = Math.random() * Math.PI * 2;
        this.texture = new CGFtexture(this.scene, texture);
        this.sphere = new MySphere(this.scene,5,40, 8,texture,true);
            
        this.material = new CGFappearance(this.scene);
        this.material.setAmbient(0.2, 0.2, 0.2, 1);
        this.material.setDiffuse(0.9, 0.9, 0.9, 1);
        this.material.setSpecular(0.1, 0.1, 0.1, 1);
        this.material.setShininess(10.0);
        this.material.setTexture(this.texture);
    }
    

    display() {
        this.scene.pushMatrix();
        this.material.apply();
        this.scene.translate(this.x,this.y,this.z);
        this.scene.rotate(this.angle,0,1,0);
        this.scene.scale(1.0,1.2,1.0);
        this.sphere.display();
        this.scene.popMatrix();
    }

}
