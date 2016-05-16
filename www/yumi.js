function distance(x1, x2, y1, y2, z1, z2){
   return Math.sqrt(Math.pow(x1-x2, 2)+Math.pow(y1-y2, 2)+Math.pow(z1-z2, 2));
}
function radians(deg){
    return deg * (Math.PI/180);
}
function equationCalculator(joint_max, max, joint_min, min){
    var avg = (max + min) / 2.0;
    var A = max - avg;
    var phase = joint_max;

    return A + " * Math.cos(rad + radians(" + (-phase) +")) + " + avg;
}

class Joint{
    constructor(home, min, max){
        this.home = home;
        this.curr = this.home;
        self.min = min
        self.max = max;
    }
}

class Position{
    constructor(x, y, z){
        this.x = x;
        this.y = y;
        this.z = z;
    }

    toString(){
        return "(" + this.x + ", " + this.y + ", " + this.z + ")";
    }
}

class LeftArm{
    constructor(){
        this.links = {};
        this.links[1] = new Joint(0.00, -168.50, 169.50);
        this.links[2] = new Joint(-130.00, 143.50, 43.50);
        this.links[3] = new Joint(135.00, -168.50, 168.50);
        this.links[4] = new Joint(30.00, -123.50, 80.00);
        this.links[5] = new Joint(0.00, -290.00, 290.00);
        this.links[6] = new Joint(40.00, -88.00, 138.00);
        this.links[7] = new Joint(0.00, -229.00, 229.00);
    }

    GetLinkBasePosition(which){
        if (which === 1) return new Position(27.67, 61.63, 399.97);
        if (which === 2) return this.GetLinkTwoBasePosition();
        if (which === 3) return this.GetLinkThreeBasePosition();
    }

    GetLinkTwoBasePosition(){
        var rad = radians(this.links[1].curr);
        var x = 25.08 * Math.cos(rad + radians(124)) + 135.1;
        var y = 40.32 * Math.cos(rad + radians(3.0)) + 107.01;
        var z = 38.1 * Math.cos(rad + radians(-98.00)) + 462.00;
        return new Position(x, y, z);
    }

    GetLinkThreeBasePosition(){

    }
}

leftArm = new LeftArm();
