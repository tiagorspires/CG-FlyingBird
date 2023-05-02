import {CGFobject,CGFtexture,CGFappearance} from '../lib/CGF.js';

export class MyCone extends CGFobject {
    constructor(scene, slices, height, radius, textureFile) {
      super(scene);
      this.slices = slices;
      this.height = height;
      this.radius = radius;
        
      // load the texture
      this.texture = new CGFtexture(this.scene, textureFile);
      // create the appearance
      this.appearance = new CGFappearance(this.scene);
      this.appearance.setTexture(this.texture);
      this.appearance.setDiffuse(0.9, 0.9, 0.9, 1);
      this.appearance.setSpecular(0.1, 0.1, 0.1, 1);
      this.appearance.setShininess(10.0);
      this.initBuffers();
    }
  
    initBuffers() {
      const angle = (2 * Math.PI) / this.slices;
      const vertices = [];
      const normals = [];
      const texCoords = [];
      const indices = [];
  
      // vertex and normal at the tip of the cone
      vertices.push(0, 0, this.height);
      normals.push(0, 0, 1);
      texCoords.push(0.5, 0.5);
  
      // vertices and normals for the base of the cone
      for (let i = 0; i < this.slices; i++) {
        const x = this.radius * Math.cos(i * angle);
        const y = this.radius * Math.sin(i * angle);
        vertices.push(x, y, 0);
        normals.push(1, 1, 1);
        texCoords.push(i / this.slices, 1);
      }
  
      // indices for the base of the cone
      for (let i = 1; i <= this.slices; i++) {
        indices.push(0, i, i % this.slices + 1);
      }
  
      this.vertices = vertices;
      this.normals = normals;
      this.texCoords = texCoords;
      this.indices = indices;
  
      this.primitiveType = this.scene.gl.TRIANGLES;
      this.initGLBuffers();
    }
    setTexture(textureFile) {
        this.texture = new CGFtexture(this.scene, textureFile);
        this.appearance.setTexture(this.texture);
      }
    
      // method to set the appearance properties
      setAppearance(diffuseR, diffuseG, diffuseB, diffuseA, specularR, specularG, specularB, specularA, shininess) {
        this.appearance.setDiffuse(diffuseR, diffuseG, diffuseB, diffuseA);
        this.appearance.setSpecular(specularR, specularG, specularB, specularA);
        this.appearance.setShininess(shininess);
      }
    display() {
        this.appearance.apply();
        super.display();
      }
  }
  