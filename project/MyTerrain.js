import {CGFobject,CGFcamera, CGFaxis, CGFappearance, CGFtexture,CGFshader} from '../lib/CGF.js';
import {MyPlane} from './MyPlane.js';

/**
* MyPlane
* @constructor
 * @param scene - Reference to MyScene object
 * @param nDivs - number of divisions in both directions of the surface
 * @param minS - minimum texture coordinate in S
 * @param maxS - maximum texture coordinate in S
 * @param minT - minimum texture coordinate in T
 * @param maxT - maximum texture coordinate in T
*/
export class MyTerrain extends CGFobject {

	constructor(scene, nrDivs, minS, maxS, minT, maxT) {
		super(scene);
		
		this.plane = new MyPlane(scene, nrDivs, minS, maxS, minT, maxT);
		

		this.terrainShader = new CGFshader(this.scene.gl, "shader/texture.vert", "shader/texture.frag");
		this.terrainShader.setUniformsValues({ altimetria: 1 });
		this.terrainShader.setUniformsValues({ texture: 2});
		this.terrainShader.setUniformsValues({ heightmap: 3});

		this.altimetria = new CGFtexture(this.scene,"images/altimetry.png");
		this.terrainTexture = new CGFtexture(this.scene,"images/terrain.jpg") 
		this.heightmap = new CGFtexture(this.scene,"images/heightmap.jpg") 
	}

	display() {
		this.scene.pushMatrix()
		this.scene.appearance.apply();
		this.scene.translate(0,-100,0);
		this.scene.scale(400,400,400);
		this.scene.rotate(-Math.PI/2.0,1,0,0);
		this.scene.setActiveShader(this.terrainShader)
		this.altimetria.bind(1);
		this.terrainTexture.bind(2);
		this.heightmap.bind(3);
		this.plane.display();
		this.scene.setActiveShader(this.scene.defaultShader)
		this.scene.popMatrix()
	  }

}


