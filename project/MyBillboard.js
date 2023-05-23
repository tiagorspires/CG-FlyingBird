import { CGFappearance, CGFtexture, CGFobject, CGFshader } from "../lib/CGF.js";
import { MyQuad } from "./MyQuad.js";

export class MyBillboard extends CGFobject {
    constructor(scene) {
        super(scene);
      
        this.quad = new MyQuad(scene);
        this.material = new CGFappearance(scene);

        this.textures = [
          'images/billboardtree.png',
          'images/billboardtree1.png',
          'images/billboardtree2.png'
        ];
      
        const index = Math.floor(Math.random() * this.textures.length);
        const texture = new CGFtexture(scene, this.textures[index]);
      
        this.material.setTexture(texture);
        this.material.setTextureWrap('REPEAT', 'REPEAT');
      }
      

    display(x, y, z) {
        this.scene.pushMatrix();
        this.scene.translate(x, y, z);

        const cameraPosition = this.scene.camera.position;

        const billboardToCamera = [
            cameraPosition[0] - x,
            cameraPosition[1] - y,
            cameraPosition[2] - z
        ];

        const distanceToCamera = Math.sqrt(
            billboardToCamera[0] * billboardToCamera[0] +
            billboardToCamera[1] * billboardToCamera[1] +
            billboardToCamera[2] * billboardToCamera[2]
        );

        const horizontalAngle = Math.atan2(billboardToCamera[0], billboardToCamera[2]);
        const verticalAngle = Math.asin(billboardToCamera[1] / distanceToCamera);
        
        this.scene.rotate(horizontalAngle, 0, 1, 0);
        this.scene.rotate(-verticalAngle, 1, 0, 0);

        this.material.apply();
        this.quad.display();

        this.scene.popMatrix();
        this.scene.setActiveShader(this.scene.defaultShader)

    }

          
}
