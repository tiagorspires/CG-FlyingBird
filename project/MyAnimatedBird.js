/*
import { MyBird } from "./MyBird.js";

export class MyAnimatedBird
{
    constructor(scene, s=0, e=5, st=0, d=2)
    {
        this.scene=scene;
        this.bird = new MyBird(scene);

        this.startVal=s;
        this.endVal=e;
        this.animStartTimeSecs=st;
        this.animDurationSecs=d;
        this.length=(this.endVal-this.startVal);

        this.animVal=this.startVal;
    }

    tween(x)
    {
        const c4 = (2 * Math.PI) / 3;

        return x === 0
            ? 0
            : x === 1
            ? 1
            : -Math.pow(2, 10 * x - 10) * Math.sin((x * 10 - 10.75) * c4);
    }


    update(timeSinceAppStart)
    {
        // Animation based on elapsed time since animation start
        var elapsedTimeSecs = timeSinceAppStart - this.animStartTimeSecs;

        // Calculate the current loop time
        var loopTime = elapsedTimeSecs % (2 * this.animDurationSecs);

        if (loopTime >= 0 && loopTime <= this.animDurationSecs) {
        // Going up
            this.animVal = this.startVal + (loopTime / this.animDurationSecs) * this.length;
        } else {
        // Coming down
            this.animVal = this.endVal - ((loopTime - this.animDurationSecs) / this.animDurationSecs) * this.length;
        }

        //this.bird.update(timeSinceAppStart);
    }

    display()
    {
        this.scene.pushMatrix();
        this.scene.translate(0,this.animVal,0);
        this.bird.display();

        this.scene.popMatrix();
    }
}