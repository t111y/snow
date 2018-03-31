/**
 * 地图基础容器
 * @author nodep
 * @version 1.0
 */
class GroundLayer extends egret.DisplayObjectContainer{
	
	private _mapBackground:MapBackground;
	private mapW:number;
	private mapH:number;
	/**舞台宽度,舞台高度,世界宽度,世界高度 */
	public constructor(worldW:number,worldH:number) {
		super();
		this.mapW = worldW;
		this.mapH = worldH;
		this._mapBackground = new MapBackground();
		this.addChild(this._mapBackground);
	}
	public hitTestRole(sx: number, sy: number){
		return sx <0 || sy <0 || sx >GameConfig.WORD_W || sy >GameConfig.WORD_H;
	}
	/**同步到当前位置 */
	public synPositionTo(cx:number,cy:number):void
	{
		var hw = this.stage.stageWidth/2;
		var hh = this.stage.stageHeight/2;
		
		if(hw>cx){
			this.x = 0;
		}else if(this.mapW - cx < hw){
			this.x = -(this.mapW-this.stage.stageWidth);
		}else{
			this.x = hw-cx;
		}
		if(hh>cy){
			this.y = 0;
		}else if(this.mapH - cy < hh){
			this.y = -(this.mapH-this.stage.stageHeight);
		}else{
			this.y = hh-cy;
		}
		this._mapBackground.render(cx,cy);
		// this.x = 0;
		// this.y = 0;
	}

	/**添加一个演员 */
	public addRole(dis:FocusRole):void
	{
		this.addChild(dis);
		var role:UserRole = dis as UserRole;
		if(role != null && role.rolePath!=null){
			this.addChildAt(role.rolePath,1);
			RenderManager.getIns().registRender(role.rolePath);
		}
	}
}