/**
 * 平铺世界的基础容器
 * @author nodep qq623440028
 * @version 1.0
 */
class Tiled_Ground extends egret.DisplayObjectContainer implements IRender {
	
	private static _ins: Tiled_Ground;
	private _self:PlayerRole;//自己
	private _focus:FocusRole;
	public roleMap:Map<number,FocusRole>//场景中受管理的角色对象
	private _groud:GroundLayer;
	private monsterManager:MonsterManager;
	//世界只有一个
	public static getIns(): Tiled_Ground {
		if (null == Tiled_Ground._ins)
			Tiled_Ground._ins = new Tiled_Ground();
		return Tiled_Ground._ins;
	}

	public constructor(){
		super();
		this.scaleX = WinsManager.scaleX;
		this.scaleY = WinsManager.scaleY;
	}

	/**刷新函数 */
	public renderUpdate(interval:number) {
		this._groud.synPositionTo(this._focus.x,this._focus.y);
	}


	/**设置当前焦点对象 */
	public setFocus(roleId:number):void
	{
		if(this._focus!=null)
			this._focus.__isFocus = false;
		this._focus = this.roleMap.get(roleId);
		this._focus.__isFocus = true;
	}

	/**添加一个焦点显示对象 */
	public addFocusRole(role:FocusRole):void
	{
		this.roleMap.set(role.id,role);
		this._groud.addRole(role);
		role.addToWorld();
	}

	//初始化地图
	public initWorld():void {
		this.roleMap = new Map<number,FocusRole>();
		this._groud = new GroundLayer(GameConfig.WORD_W,GameConfig.WORD_H);
		this.addChild(this._groud);

		this.createSelf();
		this.monsterManager = new MonsterManager();
		RenderManager.getIns().registRender(this);
		RenderManager.getIns().registRender(this.monsterManager);
	}

	/**将自己添加到场景*/
	private createSelf():void
	{
		this._self = new PlayerRole();
		this._self.x = 1000;// GameData.playerData.posX * this.cf_X;
		this._self.y = 1000;//GameData.playerData.posY * this.cf_Y;
		this.addFocusRole(this._self);
		this.setFocus(this._self.id);
		this._self.amendPosition();
	}
}