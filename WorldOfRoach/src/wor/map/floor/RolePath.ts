class RolePath extends egret.DisplayObjectContainer implements IRender {
	
	private _shape: egret.Shape;
	public constructor() {
		super();
		this._shape = new egret.Shape();
		this.addChild(this._shape);
	}
	public renderUpdate(interval: number): void {
		this.drawPath(PlayerRole.self.path);
		this.removeOvertimePoint(PlayerRole.self.path);
		for(var i:number = PlayerRole.self.roleMeshs.length-1;i>=0;i--){
			var roleMesh:RoleMesh = PlayerRole.self.roleMeshs[i];
			if(egret.getTimer() - roleMesh.time<GameConfig.trapTime){
				this.drawMesh(roleMesh);
			}else{
				if(roleMesh.shape.parent!=null){
					this.removeChild(roleMesh.shape);
				}
				PlayerRole.self.roleMeshs.splice(i,1);
			}
		}
		
	}
	//画面
	private drawMesh(roleMesh:RoleMesh){
		if(roleMesh.shape.parent==null){
			this.addChild(roleMesh.shape);
		}
		roleMesh.shape.graphics.clear();
		roleMesh.shape.graphics.beginFill(0x00ff00,1-(egret.getTimer() - roleMesh.time) / GameConfig.trapTime);
		var point:Point2D = roleMesh.points[0].point;
		roleMesh.shape.graphics.moveTo(point.x,point.y);
		for(var i:number =1;i<roleMesh.points.length;i++){
			roleMesh.shape.graphics.lineTo(roleMesh.points[i].point.x,roleMesh.points[i].point.y);
		}
		roleMesh.shape.graphics.endFill();
	}
	//画线
	private drawPath(path:Array<RolePathPoint>){
		if(!path || path.length<2){
			return;
		}
		this._shape.graphics.clear();
		this._shape.graphics.lineStyle(2,0xff0000);
		var point:Point2D = path[0].point;
		this._shape.graphics.moveTo(point.x,point.y);
		for(var i:number =1;i<path.length;i++){
			this._shape.graphics.lineTo(path[i].point.x,path[i].point.y);
		}
		
		this._shape.graphics.endFill();
	}
	//删除超时的点
	private removeOvertimePoint(path:Array<RolePathPoint>){
		if(path.length>0 && egret.getTimer() -  path[0].time>GameConfig.pointOvertime){
			path.shift();
		}
	}
}