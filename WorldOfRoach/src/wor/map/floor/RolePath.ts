class RolePath extends egret.DisplayObjectContainer implements IRender {
	
	private _shape: egret.Shape;
	public constructor() {
		super();
		this._shape = new egret.Shape();
		this.addChild(this._shape);
	}
	public renderUpdate(interval: number): void {
		this.drawPath(PlayerRole.self.path);
	}
	private drawPath(path:Array<RolePathPoint>){
		if(!path || path.length<2){
			return;
		}
		this._shape.graphics.clear();
		this._shape.graphics.lineStyle(2,0xff0000);
		this._shape.graphics.beginFill(0x00ff00,1);
		var point:Point2D = path[0].point;
		this._shape.graphics.moveTo(point.x,point.y);
		for(var i:number =1;i<path.length;i++){
			this._shape.graphics.lineTo(path[i].point.x,path[i].point.y);
		}
		this._shape.graphics.endFill();
	}
}