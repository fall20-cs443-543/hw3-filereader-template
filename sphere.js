//  Sphere
//
//  This class is a skeleton code for Sphere object
//
//  Author: Xueheng Wan

class Sphere {
	constructor(...args) {
		this.type = "sphere";
		this.center = new Vec3(0,0,0);
		this.radius = 0;
		this.ambient = [0,0,0]; // NOTE: ambient is RGB color, not a 3D vector
		// input parameter is an array containing all parameters
		if(args.length == 1){
			this.center = new Vec3(args[0].center);
			this.radius = args[0].radius;
			this.ambient = args[0].ambient;
		}else{
			// input parameters are center coordinate radius and ambient color
			if(args.length == 3){
				this.center = args[0];
				this.radius = args[1];
				this.ambient = args[2];
			}
			else{
  			// error
  		}
  	}
  }
  	// this function determines whether a ray vector hits the sphere
	// this function returns the value of t
	hit(o, d){

	}
}