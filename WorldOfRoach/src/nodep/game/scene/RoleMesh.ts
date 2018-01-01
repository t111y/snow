class RoleMesh {
	public points:Array<RolePathPoint> = new Array<RolePathPoint>();
	public time:number;
	public shape:egret.Shape;
	private x1:number=9999999;
	private x2:number=-9999999;
	private y1:number=9999999;
	private y2:number=-9999999;
	private rect:egret.Rectangle = new egret.Rectangle();
	public constructor() {
		this.shape = new egret.Shape();
		WinsManager.getIns().gameStage().addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onStageTouch,this);
	}
	private onStageTouch(e:egret.TouchEvent){
		console.log(e.stageX,e.stageY);
		console.log("点中了吗 " +this.shape.hitTestPoint(e.stageX,e.stageY));
	}
	public hitTest(x:number,y:number):boolean{
		if((x<this.x1 && x > this.x2) || (y < this.y1 && y>this.y2)){
			return false;
		}
		var s:boolean = this.shape.hitTestPoint(x,y,false);
		return s;
	}
	public addPoints(points:Array<RolePathPoint>){
		for(var i:number = 0;i<points.length;i++){
			var point:RolePathPoint = points[i];
			if(this.x1>point.point.x){
				this.x1 = point.point.x;
			}
			if(this.x2<point.point.x){
				this.x2 = point.point.x;
			}
			if(this.y1>point.point.y){
				this.y1 = point.point.y;
			}
			if(this.y2<point.point.y){
				this.y2 = point.point.y;
			}
			point.isUsed = true;
			this.time = egret.getTimer();
			this.points.push(point);
		}
		
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
				if(!path[j].isUsed && egret.Point.distance(path[i].point,path[j].point)<6){
					var roleMesh:RoleMesh = new RoleMesh();
					var points:Array<RolePathPoint> = path.slice(i,j);
					roleMesh.addPoints(points);
					return roleMesh;
				}
			}
		}
		return null;
	}
	//画面
	public drawMesh(){
		this.shape.graphics.clear();
		this.shape.graphics.beginFill(0x00ff00,1-(egret.getTimer() - this.time) / GameConfig.trapTime);
		var point:egret.Point = this.points[0].point;
		this.shape.graphics.moveTo(point.x,point.y);
		for(var i:number =1;i<this.points.length;i++){
			this.shape.graphics.lineTo(this.points[i].point.x,this.points[i].point.y);
		}
		this.shape.graphics.endFill();
	}
	public dispose(){
		if(this.shape.parent!=null){
			this.shape.parent.removeChild(this.shape);
		}
		WinsManager.getIns().gameStage().removeEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onStageTouch,this);
	}
}