class RoleMesh {
	public points:Array<RolePathPoint>;
	public time:number;
	public shape:egret.Shape;
	public constructor() {
		this.shape = new egret.Shape();
	}

	public static check(path:Array<RolePathPoint>):RoleMesh {
		var l:number = 5;
		if(path.length<5){
			return;
		}

		for(var i:number = 0;i<path.length;i++){
			if(path[i].isUsed){
				continue;
			}
			for(var j:number = i + l;j<path.length;j++){
				if(!path[j].isUsed && Point2D.distance(path[i].point,path[j].point)<6){
					var roleMesh:RoleMesh = new RoleMesh();
					roleMesh.points = path.slice(i,j);
					roleMesh.time = egret.getTimer();
					roleMesh.points.forEach(element => {
						element.isUsed = true;
					});
					return roleMesh;
				}
			}
		}
		return null;
	}
}