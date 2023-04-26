import { CGFscene, CGFcamera, CGFaxis, CGFappearance, CGFshader, CGFtexture } from "../lib/CGF.js";
import { MySphere } from "./MySphere.js";

export class MyBird extends CGFobject {
    constructor(scene) {
        super(scene);
        this.scene = scene;
      // Cria o corpo da ave
      this.body = new MyCylinder(5, 20, 0, 0.5, 1);
  
      // Cria a cabeça da ave
      this.head = new MySphere(5, 5, 0.5);
  
      // Cria os olhos da ave
      this.eye = new MySphere(5, 5, 0.1);
  
      // Cria o bico da ave
      this.beak = new MyCone(4, 1, 0.3);
  
      // Cria a asa superior da ave
      this.upperWing = new MyTrapezoid(1, 2, 1, 0.5, 1);
  
      // Cria a asa inferior da ave
      this.lowerWing = new MyTrapezoid(1, 2, 1, 0, 0.5);
    }
  
    display() {
      // Desenha o corpo da ave
      this.scene.pushMatrix();
      this.scene.scale(1, 1, 2);
      this.body.display();
      this.scene.popMatrix();
  
      // Desenha a cabeça da ave
      this.scene.pushMatrix();
      gl.translate(0, 0.5, 2.25);
      this.head.display();
      gl.popMatrix();
  
      // Desenha o olho esquerdo da ave
      gl.pushMatrix();
      gl.translate(-0.2, 0.6, 2.5);
      gl.scale(0.5, 0.5, 0.5);
      this.eye.display();
      gl.popMatrix();
  
      // Desenha o olho direito da ave
      gl.pushMatrix();
      gl.translate(0.2, 0.6, 2.5);
      gl.scale(0.5, 0.5, 0.5);
      this.eye.display();
      gl.popMatrix();
  
      // Desenha o bico da ave
      gl.pushMatrix();
      gl.translate(0, 0.25, 2.5);
      gl.rotate(Math.PI / 2, 1, 0, 0);
      this.beak.display();
      gl.popMatrix();
  
      // Desenha a asa superior esquerda da ave
      gl.pushMatrix();
      gl.translate(-1.25, 0.25, 1.25);
      gl.rotate(Math.PI / 2, 0, 1, 0);
      this.upperWing.display();
      gl.popMatrix();
  
      // Desenha a asa superior direita da ave
      gl.pushMatrix();
      gl.translate(1.25, 0.25, 1.25);
      gl.rotate(-Math.PI / 2, 0, 1, 0);
      this.upperWing.display();
      gl.popMatrix();
  
      // Desenha a asa inferior esquerda da ave
      gl.pushMatrix();
      gl.translate(-1.25, -0.25, 1.25);
      gl.rotate(-Math.PI / 2, 0, 1, 0);
      this.lowerWing.display();
      gl.popMatrix();
  
      // Desenha a asa inferior direita da ave
      gl.pushMatrix();
      gl.translate(1.25, -0.25, 1.25);
      gl.rotate(Math.PI / 2, 0, 1, 0);
      this.lowerWing.display();
      gl.popMatrix();
    }
  }
  