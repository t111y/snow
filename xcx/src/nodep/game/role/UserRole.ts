class UserRole extends FocusRole {
	public rolePath:RolePath;
	public path:Array<RolePathPoint>;
	public roleMeshs:Array<RoleMesh>;
	public pointExistTime:number = 3;
	public isSelf:boolean = false;
	/** 冰冻 */
	public frozen:boolean = false;
	public constructor() {
		super();
		this.type = RoleType.PLAYER;
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
	public updateProperty(attr:Array<Array<number>>){
		attr.forEach(o=>{
			switch(o[0]){
				case PropertyType.POINT_EXIST_TIME:
					this.pointExistTime = o[1]/1000;
				break;
				case PropertyType.frozen:
				this.frozen = o[1]>0?true:false;
				if(this.frozen){
					this.setDead(true);
				}
				break;
				case PropertyType.viscosity:
				this.viscosity = o[1];
				break;
			}
		})
	}
	public addToWorld(): void {
		super.addToWorld();

		RenderManager.getIns().registRender(this.rolePath);
	}

	public dispose(){
		super.dispose();
		RenderManager.getIns().unregistRender(this.rolePath);
	}
}