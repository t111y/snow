class UserRole extends FocusRole {
	public rolePath:RolePath;
	public path:Array<RolePathPoint>;
	public roleMeshs:Array<RoleMesh>;
	public constructor() {
		super();
		this.type = RoleType.USER_PLAYER;
		this.rolePath = new RolePath();
		this.rolePath.role = this;
		this.speedX = 8;
		this.speedY = 4;
		this.path = new Array<RolePathPoint>();
		this.roleMeshs = new Array<RoleMesh>();
	}
	public renderUpdate(interval: number): void {
		super.renderUpdate(interval);
	}
}