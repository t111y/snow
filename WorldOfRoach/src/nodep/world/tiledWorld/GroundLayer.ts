/**
 * 地图基础容器
 * @author nodep
 * @version 1.0
 */
class GroundLayer extends egret.DisplayObjectContainer{
	private _stage:StageLayer;
	private _rolePath:RolePath;
	private _mapBackground:MapBackground;
	private mapW:number;
	private mapH:number;
	/**舞台宽度,舞台高度,世界宽度,世界高度 */
	public constructor(worldW:number,worldH:number) {
		super();
		this.mapW = worldW;
		this.mapH = worldH;
		this._mapBackground = new MapBackground();
		this._stage = new StageLayer();
		this._rolePath = new RolePath();
		this.addChild(this._mapBackground);
		this.addChild(this._rolePath);
		this.addChild(this._stage);

		RenderManager.getIns().registRender(this._rolePath);
	}


	/**同步到当前位置 */
	public synPositionTo(cx:number,cy:number):void
	{
		var hw = this.stage.stageWidth/2;
		var hh = this.stage.stageHeight/2;
		
		if(hw>cx){
			this.x = 0;
		}else if(this.mapW - hw < cx){
			this.x = this.mapW-cx;
		}else if(hh<cx){
			this.x = hw-cx;
		}
		if(hh>cy){
			this.y = 0;
		}else if(this.mapH - hh < cy){
			this.x = this.mapH-cy;
		}else if(hh<cy){
			this.y = hh-cy;
		}
		this._stage.trySynArea(cx,cy);
		this._mapBackground.render(cx,cy);
	}

	/**添加一个演员 */
	public addRole(dis:egret.DisplayObject):void
	{
		this._stage.addRole(dis);
	}
}