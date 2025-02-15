import {
  CGFscene,
  CGFcamera,
  CGFaxis,
  CGFappearance,
  CGFshader,
  CGFtexture,
} from "../lib/CGF.js";
import { MyPlane } from "./MyPlane.js";
import { MySphere } from "./MySphere.js";
import { MyPanorama } from "./MyPanorama.js";
import { MyBird } from "./MyBird.js";
import { MyTerrain } from "./MyTerrain.js";
import { MyBirdEgg } from "./MyBirdEgg.js";
import { MyBillboard } from "./MyBillboard.js";
import { MyTreeGroupPatch } from "./MyTreeGroupPatch.js";
import { MyTreeRowPatch } from "./MyTreeRowPatch.js";
//import { MyAnimatedBird } from "./MyAnimatedBird.js";
import { MyNest } from "./MyNest.js";
/**
 * MyScene
 * @constructor
 */
export class MyScene extends CGFscene {
  constructor() {
    super();
  }
  init(application) {
    this.setUpdatePeriod(50); // **at least** 50 ms between animations

    this.appStartTime = Date.now(); // current time in milisecs

    super.init(application);

    this.initCameras();
    this.initLights();

    //Background color
    this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

    this.gl.clearDepth(100.0);
    this.gl.enable(this.gl.DEPTH_TEST);
    this.gl.enable(this.gl.CULL_FACE);
    this.gl.depthFunc(this.gl.LEQUAL);

    //Initialize scene objects
    this.axis = new CGFaxis(this);
    this.plane = new MyTerrain(this, 30);
    this.sphere = new MySphere(this, 20, 32, 16, "images/earth.jpg", true);
    this.panorama = new MyPanorama(this, "images/panorama4.jpg");
    this.bird = new MyBird(this);
    //this.billboard = new MyBillboard(this);
    this.treeGroupPatch = new MyTreeGroupPatch(this);
    this.treeRowPatch = new MyTreeRowPatch(this);
    this.nest = new MyNest(this,1,1,1);
    //this.animBird= new MyAnimatedBird(this);

    // create an array to hold the eggs
    this.eggs = [];

    for (let i = 0; i < 11; i++) {
      // create a new egg object
      let egg = new MyBirdEgg(this, "images/egg.jpg", "images/heightmap.jpg");
      this.eggs.push(egg);
    }

    //Objects connected to MyInterface
    this.displayAxis = true;
    this.scaleFactor = 1;

    this.displaySphere = false;
    this.displayPanorama = false;
    this.displayBird = false;
    this.displayEggs = false
    this.displayTreeRowPatch = false;
    this.displayTreeGroupPatch = false;
    this.displayNest = false;

    this.enableTextures(true);

    this.texture = new CGFtexture(this, "images/terrain.jpg");
    this.appearance = new CGFappearance(this);
    this.appearance.setTexture(this.texture);
    this.appearance.setTextureWrap("REPEAT", "REPEAT");

    this.texture2 = new CGFtexture(this, "images/earth.jpg");
    this.appearance2 = new CGFappearance(this);
    this.appearance2.setTexture(this.texture2);
    this.appearance2.setTextureWrap("REPEAT", "REPEAT");
    this.appearance2.setAmbient(0.3, 0.3, 0.3, 1.0);
    this.appearance2.setDiffuse(1.0, 1.0, 1.0, 1.0);
  }
  initLights() {
    this.lights[0].setPosition(15, 5, 5, 1);
    this.lights[0].setAmbient(1.0, 1.0, 1.0, 1.0);
    this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
    this.lights[0].enable();
    this.lights[0].update();

    this.lights[1].setPosition(0, 10, 10, 1);
    this.lights[1].setAmbient(1.0, 1.0, 1.0, 1.0);
    this.lights[1].setDiffuse(1.0, 1.0, 1.0, 1.0);
    this.lights[1].enable();
    this.lights[1].update();
  }
  initCameras() {
    this.camera = new CGFcamera(
      1.0,
      0.1,
      1000,
      vec3.fromValues(50, 10, 15),
      vec3.fromValues(0, 0, 0)
    );
  }
  setDefaultAppearance() {
    this.setAmbient(0.2, 0.4, 0.8, 1.0);
    this.setDiffuse(0.2, 0.4, 0.8, 1.0);
    this.setSpecular(0.2, 0.4, 0.8, 1.0);
    this.setShininess(10.0);
  }

 /* update(t)
  {
    // Continuous animation based on current time and app start time 
    var timeSinceAppStart = (t - this.appStartTime) / 1000.0;
    
    this.animBird.update(timeSinceAppStart);

    this.checkKeys();
  }
  */

  display() {
    // ---- BEGIN Background, camera and axis setup
    // Clear image and depth buffer everytime we update the scene
    this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
    // Initialize Model-View matrix as identity (no transformation
    this.updateProjectionMatrix();
    this.loadIdentity();
    // Apply transformations corresponding to the camera position relative to the origin
    this.applyViewMatrix();

    // Draw axis
    if (this.displayAxis) this.axis.display();

    // ---- BEGIN Primitive drawing section

    this.plane.display();
    

    this.pushMatrix();
    this.translate(0,40,0);
    
    if (this.displaySphere) this.sphere.display();
    this.popMatrix();

    if (this.displayPanorama) this.panorama.display();
    
    this.pushMatrix();
    this.scale(5, 5, 5, 1);
    this.update();
    if (this.displayBird) this.bird.display();
    this.popMatrix();

    /*
    this.pushMatrix();
    this.scale(5, 5, 5, 1);
    this.animBird.display();
    this.popMatrix();
    */

    if(this.displayEggs){
      for (var i = 0; i < 10; i++) {
        this.eggs[i].display();
      }
    }

    this.pushMatrix();
    this.translate(100,-58.5,0,1);
    this.scale(5, 5, 5, 1);
    if(this.displayNest) this.nest.display();
    this.popMatrix();

    this.pushMatrix();
    this.translate(100,-51.5,0,1);
    this.translate(-this.eggs[10].x,-this.eggs[10].y,-this.eggs[10].z);
    this.eggs[10].display();
    this.popMatrix();


    //this.billboard.display(10,10,10);
    this.pushMatrix();
    this.scale(10, 10, 10, 1);
    this.translate(-9,-5,0,1);
    if(this.displayTreeGroupPatch) this.treeGroupPatch.display();
    this.pushMatrix();
    this.translate(0,0,5,1);
    if(this.displayTreeRowPatch) this.treeRowPatch.display();
    this.popMatrix();
    this.popMatrix();
    // ---- END Primitive drawing section
    this.checkKeys();
  }
  checkKeys() {
    var text = "Keys pressed: ";
    var keysPressed = false;
    // Check for key codes e.g. in https://keycode.info/
    if (this.gui.isKeyPressed("KeyW")) {
      text += " W ";
      keysPressed = true;
    }
    if (this.gui.isKeyPressed("KeyS")) {
      text += " S ";
      keysPressed = true;
    }
    if (keysPressed) console.log(text);
  }
}
