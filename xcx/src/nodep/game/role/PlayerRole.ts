/**
 * 玩家控制的角色
 * @author nodep
 * @version 1.0
 */
class PlayerRole extends UserRole {

	public static self: PlayerRole;
	
	public constructor() {
		super();
		PlayerRole.self = this;
		this.type = RoleType.ROLE_PLAYER;
	}



	//角色的移动处理,这里的移动优化应该还可以继续优化
	public renderUpdate(interval: number): void {
		if (JoystickModule.offset == 0)
			return;
		//在这里检查某个点是否可以到达
		var tox: number = this.x + JoystickModule.multX * this.speedX;
		var toy: number = this.y + JoystickModule.multY * this.speedY;
		var standType: number = StandType.LAND;
		var canMove:boolean = false;
		if (standType == StandType.LAND) {
			if (!Tiled_Ground.getIns().groud.hitTestRole(tox, toy)) {
				canMove = true;
			}
			else {//优化移动
				tox = this.x;
				toy = this.y + JoystickModule.multY * this.speedY;
				if (!Tiled_Ground.getIns().groud.hitTestRole(tox, toy)) {
					canMove = true;
				}
				else {
					tox = this.x + JoystickModule.multX * this.speedX;
					toy = this.y;
					if (!Tiled_Ground.getIns().groud.hitTestRole(tox, toy)) {
						canMove = true;
					}
				}
			}
			if(canMove)
			{
				this.moveTo(tox,toy);
				var point:RolePathPoint = new RolePathPoint(new egret.Point(tox,toy));
				this.path.push(point);
				Globals.i().net.send(MessageType.createMove([point]));
				var mesh:RoleMesh = RoleMesh.check(this.path);
				if(mesh!=null){
					this.roleMeshs.push(mesh);
					Globals.i().net.send(MessageType.createCirclePath(mesh));
				}
			}
		}
		
	}

}