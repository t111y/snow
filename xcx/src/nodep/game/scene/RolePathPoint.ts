class RolePathPoint {
	public point:egret.Point;
	public time:number;
	public isUsed:boolean=false;
	public constructor(point:egret.Point) {
		this.time = Globals.i().serverTime.now();
		this.point = point;
	}
}