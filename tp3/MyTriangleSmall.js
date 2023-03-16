import {CGFobject} from '../lib/CGF.js';

export class MyTriangleSmall extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initBuffers();
    }

    initBuffers() {
        this.vertices = [
            -1, 0, 0, //0
            0, 1, 0, //1
            1, 0, 0, //2
            
            -1, 0, 0, //0
            0, 1, 0, //1
            1, 0, 0 //2
        ]

        this.normals=[
            0,0,1,
            0,0,1,
            0,0,1,
            0,0,-1,
            0,0,-1,
            0,0,-1,
            
        ]

        this.indices = [
            2, 1, 0,
            3,4,5
        ]
        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
}