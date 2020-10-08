//  3D vector addition and subtraction, scalar
//
//  This class is an implementation of 3D Vector
//  The values for each dimension are stored in an internal array with size of 3
//  Basic operators: addition, subtraction, scale, dot, normalization are built.
//  Author: Xueheng Wan
class Vec3 {
  constructor(...args) {
    this.data = [0,0,0];
    if (args.length == 1) {
      // input parameter is an Vec3 typed object
      // Usage: var vec1_copy = new Vec3(vec1);
      if (Object.getPrototypeOf(args[0]) == Vec3.prototype) {
        //console.log("Copy Constructor");
        this.data[0] = args[0].data[0];
        this.data[1] = args[0].data[1];
        this.data[2] = args[0].data[2];
      // input parameter is an Array
      // Usage: var vec1 = new Vec3([1,2,3]);
      } else if (Object.getPrototypeOf(args[0]) == Array.prototype) {
        //console.log("Array Constructor");
        if (args[0].length != 3) {
          //error
        } else {
          this.data[0] = args[0][0];
          this.data[1] = args[0][1];
          this.data[2] = args[0][2];
        }
      // otherwise, the input parameter is wrong typed
      } else {
        //error
      }
    } else {
      // input parameters are three values for one 3D vector
      // Usage: var vec1 = new Vec3(1,2,3);
      if (args.length == 3) {
        this.data[0] = args[0];
        this.data[1] = args[1];
        this.data[2] = args[2];
      } else {
        //error
      }
    }
  }

  // addition
  //  (a,b,c) + (d,e,f) = (a+d, b+e, c+f)
  //  Usage: var vec3 = vec1.add(vec2);
  add(v) {
    let out = Object.create(Vec3.prototype);
    out.data = [0,0,0];
    out.data[0] = this.data[0] + v.data[0];
    out.data[1] = this.data[1] + v.data[1];
    out.data[2] = this.data[2] + v.data[2];

    return out;
  }

  // scale
  // s * (a,b,c) = (sa,sb,sc)
  //  Usage: var vec3 = vec1.scale(10);
  scale(f) {
    let out = Object.create(Vec3.prototype);
    out.data = [0,0,0];
    out.data[0] = this.data[0] * f;
    out.data[1] = this.data[1] * f;
    out.data[2] = this.data[2] * f;
    return out;
  }

  // subtract
  //  (a,b,c) + (d,e,f) = (a-d, b-e, c-f)
  //  Usage: var vec3 = vec1.sub(vec2);
  sub(v) {
    let out = Object.create(Vec3.prototype);
    out.data = [0,0,0];
    out.data[0] = this.data[0] - v.data[0];
    out.data[1] = this.data[1] - v.data[1];
    out.data[2] = this.data[2] - v.data[2];
    return out;
  }

  // calculate the length of this 3D vector
  //  Usage: var len1 = vec1.length;
  length() {
    var squared_length = this.dot(this);
    return Math.abs(Math.sqrt(squared_length));
  }

  // Dot product
  //  (a,b,c) DOT (d,e,f) = (ad, be, cf)
  //  Usage: var res = vec1.dot(vec2);
  dot(v) {
    let out = 0;
    out += this.data[0]*v.data[0];
    out += this.data[1]*v.data[1];
    out += this.data[2]*v.data[2];
    
    return out;
  }

  // Cross product
  //  (a,b,c) DOT (d,e,f) = (bf-ce, cd-af, ae-bd)
  //  Usage: var vec3 = vec1.cross_product(vec2);
  cross_product(v) {
    let out = Object.create(Vec3.prototype);
    out.data = [0,0,0];
    out.data[0] = this.data[1] * v.data[2] - this.data[2] * v.data[1];
    out.data[1] = this.data[2] * v.data[0] - this.data[0] * v.data[2];
    out.data[2] = this.data[0] * v.data[1] - this.data[1] * v.data[0];
    return out;
  }

  // Normalization in place
  //  Usage: vec1.normalize(); // NOTE: this function doesn't create a new vector.
  normalize() {
    let len = this.length();
    //console.log("LENGTH:"+len);
    this.data[0] /= len;
    this.data[1] /= len;
    this.data[2] /= len;
  }

  // return a normalized 3D vector
  //  Usage: vec1_normalized = vec1.normalized(); // NOTE: this function creates a new vector.
  normalized() {
    return this.scale(1.0/this.length());
  }

  // print out all three values on console, only for debugging
  printout(){
    console.log("[ "+this.data[0]+", "+this.data[1]+", "+this.data[2]+" ]");
  }

}