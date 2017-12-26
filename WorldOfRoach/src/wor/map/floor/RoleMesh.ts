class RoleMesh {
	public points:Array<Point2D>;
	public time:number;
	public constructor() {
	}

	public check(path:Array<Point2D>){
		var l:number = 5;
		if(path.length<5){
			return;
		}

		for(var i:number = 0;i<path.length;i++){
			for(var j:number = i + l;j<path.length;j++){
				if(Point2D.distance(path[i],path[j])<10){
					this.points = path.slice(i,j);
					this.time = egret.getTimer();
					break;
				}
			}
		}
	}
}