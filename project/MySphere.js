import {CGFobject,CGFtexture,CGFappearance} from '../lib/CGF.js';

/**
* MySphere
* @constructor
 * @param scene - Reference to MyScene object
 * @param nDivs - number of divisions in both directions of the surface
 * @param minS - minimum texture coordinate in S
 * @param maxS - maximum texture coordinate in S
 * @param minT - minimum texture coordinate in T
 * @param maxT - maximum texture coordinate in T
*/

export class MySphere extends CGFobject {

    constructor(scene, radius, slices, stacks, textureFile, isSphere) {
      // call the CGFobject constructor
      super(scene);
      this.isSphere = isSphere;
      // set default values for missing arguments
      this.radius = radius || 1;
      this.slices = slices || 16;
      this.stacks = stacks || 8;
  
      // load the texture
      this.texture = new CGFtexture(this.scene, textureFile);
  
      // create the appearance
      this.appearance = new CGFappearance(this.scene);
      this.appearance.setTexture(this.texture);
      this.appearance.setDiffuse(0.9, 0.9, 0.9, 1);
      this.appearance.setSpecular(0.1, 0.1, 0.1, 1);
      this.appearance.setShininess(10.0);
  
      // create the sphere geometry
      this.initBuffers();
    }
  
    initBuffers() {
      this.vertices = [];
      this.indices = [];
      this.normals = [];
      this.texCoords = [];
  
      // create the sphere
      for (let stack = 0; stack <= this.stacks; stack++) {
        const theta = stack * Math.PI / this.stacks;
        const sinTheta = Math.sin(theta);
        const cosTheta = Math.cos(theta);
  
        for (let slice = 0; slice <= this.slices; slice++) {
          const phi = slice * 2 * Math.PI / this.slices;
          const sinPhi = Math.sin(phi);
          const cosPhi = Math.cos(phi);
          
          const x = cosPhi * sinTheta;
          const y = cosTheta;
          const z = sinPhi * sinTheta;
          const u = 1 - slice / this.slices;
          const v = 1 - stack / this.stacks;
          
          if (this.isSphere) {
            this.normals.push(-x, -y, -z);
            this.vertices.push(-this.radius * x, -this.radius * y, -this.radius * z);
          } else {
            this.normals.push(x, y, z);
            this.vertices.push(this.radius * x, this.radius * y, this.radius * z);
          }
          this.texCoords.push(u, v);
        }
      }
  
      // create the sphere indices
      for (let stack = 0; stack < this.stacks; stack++) {
        for (let slice = 0; slice < this.slices; slice++) {
          const first = (stack * (this.slices + 1)) + slice;
          const second = first + this.slices + 1;
  
          this.indices.push(first, second, first + 1);
          this.indices.push(second, second + 1, first + 1);
        }
      }
  
      // create the vertex buffer object
      this.primitiveType = this.scene.gl.TRIANGLES;
      this.initGLBuffers();
    }
  
    // method to set the texture file
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

    setPosition(x,y,z){

    }
  
    // method to display the sphere
    display() {
      this.appearance.apply();
      super.display();
    }
  }