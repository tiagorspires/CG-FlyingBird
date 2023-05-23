import {CGFobject,CGFtexture,CGFappearance} from '../lib/CGF.js';

export class MyDonut extends CGFobject{
    constructor(scene,outerRadius,innerRadius,height,numSegs,texture){
        super(scene);
        
        this.scene = scene;
        this.texture = new CGFtexture(this.scene, texture);
        
        this.outerRadius = outerRadius;
        this.innerRadius = innerRadius;
        this.height = height;
        this.numSegments = numSegs;
        this.texCoords = [];
        this.vertices = [];
        this.indices = [];

        this.material = new CGFappearance(this.scene);
        this.material.setAmbient(0.2, 0.2, 0.2, 1);
        this.material.setDiffuse(0.9, 0.9, 0.9, 1);
        this.material.setSpecular(0.1, 0.1, 0.1, 1);
        this.material.setShininess(10.0);
        this.material.setTexture(this.texture);

        this.generateDonut();
    }

    generateDonut() {
        const angleIncrement = (2 * Math.PI) / this.numSegments;
      
        for (let i = 0; i < this.numSegments; i++) {
          const angle = i * angleIncrement;
      
          const outerX = Math.cos(angle) * this.outerRadius;
          const outerY = Math.sin(angle) * this.outerRadius;
          const innerX = Math.cos(angle) * this.innerRadius;
          const innerY = Math.sin(angle) * this.innerRadius;
      
          this.vertices.push(outerX, outerY, this.height / 2);
          this.vertices.push(innerX, innerY, this.height / 2);
          this.vertices.push(outerX, outerY, -this.height / 2);
          this.vertices.push(innerX, innerY, -this.height / 2);
      
          const u = i / this.numSegments;
          const vTop = 0.5;
          const vBottom = -0.5;
      
          this.texCoords.push(u, vTop);
          this.texCoords.push(u, vBottom);
          this.texCoords.push(u, vTop);
          this.texCoords.push(u, vBottom);
        }
      
        // Create indices for triangles
        for (let i = 0; i < this.numSegments; i++) {
          const currentIndex = i * 4;
          const nextIndex = (i + 1) % this.numSegments * 4;
      
          // Top face
          this.indices.push(currentIndex, nextIndex, currentIndex + 1);
          // Bottom face
          this.indices.push(currentIndex + 2, currentIndex + 3, nextIndex + 2);
          // Side faces
          this.indices.push(currentIndex, currentIndex + 2, nextIndex);
          this.indices.push(nextIndex, currentIndex + 2, nextIndex + 2);
          this.indices.push(nextIndex + 1, currentIndex + 3, currentIndex + 1);
          this.indices.push(nextIndex + 1, currentIndex + 1, nextIndex + 3);
        }

        this.primitiveType = this.scene.gl.TRIANGLE_STRIP;
	    this.initGLBuffers();
    }


    display() {
        this.material.apply();
        super.display();
    }
}