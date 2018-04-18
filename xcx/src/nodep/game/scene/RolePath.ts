class RolePath extends egret.DisplayObjectContainer implements IRender {
	public role:UserRole;
	private _shape: egret.Shape;
	public constructor() {
		super();
		this._shape = new egret.Shape();
		this.addChild(this._shape);
	}
	public renderUpdate(interval: number): void {
		this.drawPath(this.role.path);
		this.removeOvertimePoint(this.role.path);
		for(var i:number = this.role.roleMeshs.length-1;i>=0;i--){
			var roleMesh:RoleMesh = this.role.roleMeshs[i];
			if(Globals.i().serverTime.now() - roleMesh.time<this.role.pointExistTime){
				
				if(roleMesh.shape.parent==null){
					this.addChild(roleMesh.shape);
				}
				roleMesh.drawMesh();
			}else{
				
				roleMesh.dispose();
				this.role.roleMeshs.splice(i,1);
				break;
			}
		}
		
	}

	//画线
	private drawPath(path:Array<RolePathPoint>){
		if(!path || path.length<2){
			return;
		}
		this._shape.graphics.clear();
		this._shape.graphics.lineStyle(4,0xfff49f);
		var point:egret.Point = path[0].point;
		this._shape.graphics.moveTo(point.x,point.y);
		for(var i:number =1;i<path.length;i++){
			this._shape.graphics.lineTo(path[i].point.x,path[i].point.y);
		}
		
		this._shape.graphics.endFill();
	}
	//删除超时的点
	private removeOvertimePoint(path:Array<RolePathPoint>){
		if(path.length>0 && Globals.i().serverTime.now() -  path[0].time>this.role.pointExistTime){
			path.shift();
		}
	}
}