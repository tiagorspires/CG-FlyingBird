import { CGFappearance, CGFtexture, CGFobject } from "../lib/CGF.js";
import { MyBillboard } from "./MyBillboard.js";

export class MyTreeGroupPatch extends CGFobject {
  constructor(scene) {
    super(scene);

    this.billboards = [];

    for (let i = 0; i < 9; i++) {
      const billboard = new MyBillboard(scene);
      this.billboards.push(billboard);
    }
  }

  display() {
    this.scene.pushMatrix();

    for (let i = 0; i < this.billboards.length; i++) {
      const x = (i % 3) * 2 - 2;
      const z = Math.floor(i / 3) * 2 - 2;

      this.billboards[i].display(x,0,z);
      
    }

    this.scene.popMatrix();
  }
}