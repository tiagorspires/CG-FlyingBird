export class MyNest extends CGFobject{
    constructor(scene, x, y, z) {
      this.scene = scene;
      this.x = x;
      this.y = y;
      this.z = z;
  
      this.material = new CGFappearance(this.scene);
      this.material.setAmbient(0.1, 0.1, 0.1, 1);
      this.material.setDiffuse(0.9, 0.9, 0.9, 1);
      this.material.setSpecular(0.1, 0.1, 0.1, 1);
      this.material.setShininess(10);
  
      this.texture = new CGFtexture(this.scene, 'textures/nest.png');
  
      this.nest = new MyCylinder(scene, 0.2, 1, 1, 8, 1);
      this.stick1 = new MyCylinder(scene, 0.05, 0.05, 1.5, 8, 1);
      this.stick2 = new MyCylinder(scene, 0.05, 0.05, 1.5, 8, 1);
  
      this.stick1.setPosition(0, 0.75, 0);
      this.stick2.setPosition(0, 0.75, 0);
  
      this.nest.setMaterial(this.material);
      this.nest.setTexture(this.texture);
      this.stick1.setMaterial(this.material);
      this.stick2.setMaterial(this.material);
    }
  
    display() {
      this.scene.pushMatrix();
      this.scene.translate(this.x, this.y, this.z);
  
      this.stick1.display();
      this.stick2.display();
      this.nest.display();
  
      this.scene.popMatrix();
    }
  }
  