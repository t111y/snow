/**
 * 平铺世界的基础容器
 */
class Tiled_Ground extends egret.DisplayObjectContainer implements IRender {
	
	private static _ins: Tiled_Ground;
	private _self:PlayerRole;//自己
	private _focus:FocusRole;
	public roleMap:Object;//场景中受管理的角色对象
	public groud:GroundLayer;
	private monsterManager:MonsterManager;
	//世界只有一个
	public static getIns(): Tiled_Ground {
		if (null == Tiled_Ground._ins)
			Tiled_Ground._ins = new Tiled_Ground();
		return Tiled_Ground._ins;
	}

	public constructor(){
		super();
		// this.scaleX = WinsManager.scaleX;
		// this.scaleY = WinsManager.scaleY;
	}

	/**刷新函数 */
	public renderUpdate(interval:number) {
		this.groud.synPositionTo(this._focus.x,this._focus.y);
		this.checkMesh();
	}
	private hitPoint:egret.Point = new egret.Point();
	/**判断是否有玩家掉坑 */
	private checkMesh(){
		for (var key in this.roleMap) {
			if (this.roleMap.hasOwnProperty(key)) {
				var role:UserRole = this.roleMap[key];
				if(role.type == RoleType.NPC || role.isDead){
					if(role.isDead && Globals.i().serverTime.now()> role.deadTime + GameConfig.deadTime){
						role.setDead(false);
					}
					continue;
				}
				for(let i:number = 0;i<PlayerRole.self.roleMeshs.length;i++){
					var e:RoleMesh = PlayerRole.self.roleMeshs[i];
					role.localToGlobal(0,0,this.hitPoint);
					var isHit:boolean = e.hitTest(this.hitPoint.x,this.hitPoint.y);
					if(isHit){
						role.setDead(isHit);
						MessageType.sendRoleDrop(e.id,role.name,role.type,Globals.i().serverTime.now())
						break;
					}
				}

			}
		}

	}

	/**设置当前焦点对象 */
	public setFocus(roleId:string):void
	{
		if(this._focus!=null)
			this._focus.__isFocus = false;
		this._focus = this.roleMap[roleId];
		this._focus.__isFocus = true;
	}
	public removeRole(roleId:string){
		let role:FocusRole = this.roleMap[roleId];
		if(role==null){
			return;
		}
		role.dispose();
	}

	/**添加一个焦点显示对象 */
	public addFocusRole(role:FocusRole):void
	{
		this.roleMap[role.name]=role;
		this.groud.addRole(role);
		role.addToWorld();
	}

	public getUserRole(playerId:string):UserRole{
		return this.roleMap[playerId];
	}

	//初始化地图
	public initWorld():void {
		this.roleMap = {};
		this.groud = new GroundLayer(GameConfig.WORD_W,GameConfig.WORD_H);
		this.addChild(this.groud);

		this.createSelf();
		this.monsterManager = new MonsterManager();
		RenderManager.getIns().registRender(this);
		RenderManager.getIns().registRender(this.monsterManager);
	}

	/**将自己添加到场景*/
	private createSelf():void
	{
		this._self = new PlayerRole();
		this._self.pointExistTime = Globals.i().enterScene.pointExistTime;
		this._self.name = Globals.i().playerId;
		this._self.viscosity = Globals.i().enterScene.viscosity;
		this._self.setModel("nvl");
		this._self.x = Globals.i().enterScene.pos[0];
		this._self.y = Globals.i().enterScene.pos[1];
		this.addFocusRole(this._self);
		this.setFocus(this._self.name);
	}
}