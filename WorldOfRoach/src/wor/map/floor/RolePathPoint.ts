class RolePathPoint {
	public point:Point2D;
	public time:number;
	public constructor(point:Point2D) {
		this.time = egret.getTimer();
		this.point = point;
	}
}