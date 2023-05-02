import {CGFobject,CGFtexture,CGFappearance} from '../lib/CGF.js';
/**
 * MyTrapezoid
 * @constructor
 * @param scene - Reference to MyScene object
 * @param base - Length of the base of the trapezoid
 * @param top - Length of the top of the trapezoid
 * @param height - Height of the trapezoid
 * @param thickness - Thickness of the trapezoid
 */
export class MyTrapezoid extends CGFobject {
	constructor(scene, base, top, height, thickness, textureFile) {
		super(scene);

		this.base = base;
		this.top = top;
		this.height = height;
		this.thickness = thickness;

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
		this.vertices = [
			// Bottom face
			-this.base / 2, -this.height / 2, -this.thickness / 2, // 0
			this.base / 2, -this.height / 2, -this.thickness / 2, // 1
			this.base / 2, -this.height / 2, this.thickness / 2, // 2
			-this.base / 2, -this.height / 2, this.thickness / 2, // 3

			// Top face
			-this.top / 2, this.height / 2, -this.thickness / 2, // 4
			this.top / 2, this.height / 2, -this.thickness / 2, // 5
			this.top / 2, this.height / 2, this.thickness / 2, // 6
			-this.top / 2, this.height / 2, this.thickness / 2 // 7
		];

		this.indices = [
			// Bottom face
			0, 1, 2,
			2, 3, 0,

			// Side faces
			4, 5, 1,
			1, 0, 4,

			5, 6, 2,
			2, 1, 5,

			6, 7, 3,
			3, 2, 6,

			7, 4, 0,
			0, 3, 7,

			// Top face
			7, 6, 5,
			5, 4, 7
		];

		this.normals = [
			// Bottom face
			0, -1, 0,
			0, -1, 0,
			0, -1, 0,
			0, -1, 0,

			// Top face
			0, 1, 0,
			0, 1, 0,
			0, 1, 0,
			0, 1, 0
		];

		this.texCoords = [
			// Bottom face
			0, 1,
			1, 1,
			1, 0,
			0, 0,

			// Top face
			0, 1,
			1, 1,
			1, 0,
			0, 0
		];

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
