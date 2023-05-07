import {CGFobject,CGFtexture,CGFappearance} from '../lib/CGF.js';
import { MySphere } from "./MySphere.js";
import { MyCone } from "./MyCone.js";
import { MyTrapezoid } from "./MyTrapezoid.js";

export class MyBird extends CGFobject {
    constructor(scene) {
        super(scene);
        this.scene = scene;
      // Cria o corpo da ave
      this.body = new MyCone(scene, 20, 2.3, 0.5, "images/body.jpg");
  
      // Cria a cabeça da ave
      this.head = new MySphere(scene, 0.5, 30, 30,"images/body.jpg", true);
  
      // Cria os olhos da ave
      this.eye = new MySphere(scene, 0.1, 5, 5,"images/eye.png", true);
  
      // Cria o bico da ave
      this.beak = new MyCone(scene, 4, 0.75, 0.3,"images/beak.jpg");
  
      // Cria o rabo
      this.tail = new MyTrapezoid(scene, 0.2, 1, 1, 0.2,"images/body.jpg");

      // Cria a asa inferior da ave
      this.wing = new MyTrapezoid(scene,2.5,3,1,0.2,"images/body.jpg")

      // Cria a asa inferior da ave
      this.lowerWing = new MyTrapezoid(scene, 1, 1, 1, 0.2,"images/body.jpg");
    }
  
    display() {
      // Desenha o corpo da ave
      this.scene.pushMatrix();
      this.scene.rotate(-Math.PI/10,1,0,0)
      this.scene.translate(0,0,2.3)
      this.scene.rotate(Math.PI,0,1,0)
      this.body.display();
      this.scene.popMatrix();
  
      // Desenha a cabeça da ave
      this.scene.pushMatrix();
      this.scene.rotate(-Math.PI/10,1,0,0)
      this.scene.translate(0, 0, 2.3);
      this.head.display();
      this.scene.popMatrix();
  
      // Desenha o olho esquerdo da ave
      this.scene.pushMatrix();
      this.scene.rotate(-Math.PI/10,1,0,0)
      this.scene.translate(-0.25, 0.1, 2.7);
      this.eye.display();
      this.scene.popMatrix();
  
      // Desenha o olho direito da ave
      this.scene.pushMatrix();
      this.scene.rotate(-Math.PI/10,1,0,0)
      this.scene.translate(0.25, 0.1, 2.7);
      this.eye.display();
      this.scene.popMatrix();
  
      // Desenha o bico da ave
      this.scene.pushMatrix();
      this.scene.rotate(-Math.PI/12,1,0,0)
      this.scene.translate(0, 0, 2.3);
      this.scene.scale(1,0.5,1)
      this.beak.display();
      this.scene.popMatrix();
  
      // Desenha o rabo
      this.scene.pushMatrix();
      //this.scene.translate(-1.25, 0.25, 1.25);
      this.scene.rotate(-Math.PI/10,1,0,0)
      this.scene.rotate(-Math.PI / 2, 1, 0, 0);
      this.tail.display();
      this.scene.popMatrix();

      //desenha a asa direita
      this.scene.pushMatrix();
      this.scene.translate(1.35,0.4,1.2);
      this.scene.rotate(-Math.PI/10,1,0,0)
      this.scene.rotate(-Math.PI / 2, 1, 0, 0);
      this.wing.display();
      this.scene.popMatrix();
      
      //desenha a asa esquerda
      this.scene.pushMatrix();
      this.scene.rotate(Math.PI,0,0,1)
      this.scene.translate(1.35,-0.4,1.2);
      this.scene.rotate(Math.PI/10,1,0,0)
      this.scene.rotate(-Math.PI / 2, 1, 0, 0);
      this.wing.display();
      this.scene.popMatrix();

      /*
      
      // Desenha a asa inferior esquerda da ave
      this.scene.pushMatrix();
      this.scene.translate(-1.25, -0.25, 1.25);
      this.scene.rotate(-Math.PI / 2, 0, 1, 0);
      this.lowerWing.display();
      this.scene.popMatrix();
      */
  
      // Desenha a asa inferior direita da ave
      this.scene.pushMatrix();
      this.scene.translate(3, 0.25, 1.35);
      this.scene.rotate(Math.PI / 3, 0, 0, 1);
      this.scene.rotate(-Math.PI / 8, 1, 0 , 0);
      this.scene.rotate(Math.PI / 2, 0, 1 , 0);
      this.lowerWing.display();
      this.scene.popMatrix();

      //Desenha a asa inferior esquerda da ave
      
      this.scene.pushMatrix();
      this.scene.translate(-3, 0.25, 1.35);
      this.scene.rotate(-Math.PI / 3, 0, 0, 1);
      this.scene.rotate(-Math.PI / 8, 1, 0 , 0);
      this.scene.rotate(-Math.PI / 2, 0, 1 , 0);
      this.lowerWing.display();
      this.scene.popMatrix();
    }
  }
  