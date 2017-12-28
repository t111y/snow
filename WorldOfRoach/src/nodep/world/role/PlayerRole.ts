/**
 * 玩家控制的角色
 * @author nodep
 * @version 1.0
 */
class PlayerRole extends FocusRole {

	public static self: PlayerRole;
	public path:Array<RolePathPoint>;
	public roleMeshs:Array<RoleMesh>;
	public constructor() {
		super();
		PlayerRole.self = this;
		this.type = RoleType.ROLE_PLAYER;
		this.speedX = 8;
		this.speedY = 4;
		this.path = new Array<RolePathPoint>();
		this.roleMeshs = new Array<RoleMesh>();
	}



	//角色的移动处理,这里的移动优化应该还可以继续优化
	public renderUpdate(interval: number): void {
		if (RockBarContorller.offset == 0)
			return;
		//在这里检查某个点是否可以到达
		var tox: number = this.x + RockBarContorller.multX * this.speedX;
		var toy: number = this.y + RockBarContorller.multY * this.speedY;
		var standType: number = StandType.LAND;
		var canMove:boolean = false;
		if (standType == StandType.LAND) {
			if (!StageLayer.self.hitTestRole(tox, toy)) {
				canMove = true;
			}
			else {//优化移动
				tox = this.x;
				toy = this.y + RockBarContorller.multY * this.speedY;
				if (!StageLayer.self.hitTestRole(tox, toy)) {
					canMove = true;
				}
				else {
					tox = this.x + RockBarContorller.multX * this.speedX;
					toy = this.y;
					if (!StageLayer.self.hitTestRole(tox, toy)) {
						canMove = true;
					}
				}
			}
			if(canMove)
			{
				this.x = tox;
				this.y = toy;
				var point:RolePathPoint = new RolePathPoint(new egret.Point(tox,toy));
				this.path.push(point);
				var mesh:RoleMesh = RoleMesh.check(this.path);
				if(mesh!=null){
					this.roleMeshs.push(mesh);
				}
			}
		}
		
	}

	//错误位置修正
	public amendPosition(): void {
		while (StageLayer.self.hitTestRole(this.x, this.y))//如果位置不合法
			this.y += 20;
	}
}