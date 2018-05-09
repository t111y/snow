/**
 * 焦点目标,一旦被设置为场景焦点后可以控制场景摄像机位置
 * @author nodep
 * @version 1.0
 */
class FocusRole extends egret.DisplayObjectContainer implements IFocus, IRender, IRole {

	private static _addId: number = 0;
	public __isFocus: boolean = false;
	public id: number = 0;
	public type: number;
	public speedX: number;
	public speedY: number;
	private _ak: string;
	private mc:egret.MovieClip;
	private mcData:any;
	private mcTexture:egret.Texture;
	private _way:number = 0;
	private model:string = null;
	public isDead:boolean = false;
	public deadTime:number;
	/** 粘稠值 */
	public viscosity:number = 0;
	public reliveTime:number = 0;
	public setDead(isDead:boolean){
		this.isDead = isDead;
		if(isDead){
			this.deadTime = Globals.i().serverTime.now();
			Globals.i().killNum++;
			WinsManager.getIns().showFloatText(Globals.i().killNum + "击");
			if(this.filters == null){
				var f:Array<egret.Filter> = new Array<egret.Filter>();
				f.push(new egret.GlowFilter(0xffff00,1,10,10,100));
				this.filters = f;
			}
			this.changeAction(RoleAction.DROP);
		}else{
			this.changeAction(RoleAction.RUN);
			this.filters = null;
			this.reliveTime = Globals.i().serverTime.now();
		}
	}
	public constructor() {
		super();
		FocusRole._addId++;
		this.id = FocusRole._addId;

		// let p:egret.Shape = new egret.Shape();
		// this.addChild(p);
		// p.graphics.beginFill(0xffff00);
		// p.graphics.drawCircle(0,0,5);
		
		this.mc = new egret.MovieClip();
		this.addChild(this.mc);
		this.action = RoleAction.RUN ;
	}
	public isRelive():boolean{
		return this.isDead && Globals.i().serverTime.now()> this.deadTime + GameConfig.deadTime;
	}
	public isInvincible():boolean{
		return this.reliveTime + GameConfig.invincible_time > Globals.i().serverTime.now();
	}
	
	public setWay(way:number){
		if(way == this._way){
			return;
		}
		this._way = way;
		
		if(!this.mcData){
			this.setModel(this.model);
		}else{
			this.playMc(way);
			
			
		}
	}
	public setModel(model:string){
		if(model == null){
			return;
		}
		this.mcData = null;
		this.mcTexture = null;
		this.mcFactory = null;
		RES.getResByUrl("resource/assets/hero/nvl/"+model+".json",function(e){
			this.mcData = JSON.parse(e);
			this.playMc(this._way);
		},this,RES.ResourceItem.TYPE_TEXT);
		RES.getResByUrl("resource/assets/hero/nvl/"+model+".png",function(e){
			this.mcTexture = <egret.Texture>e;
			this.playMc(this._way);
		},this,RES.ResourceItem.TYPE_IMAGE);
	}
	private mcFactory:egret.MovieClipDataFactory;
	private playMc(way:number){
		if(this.mcData == null || this.mcTexture == null){
			return;
		}
		if(this.mcFactory == null){
			this.mcFactory = new egret.MovieClipDataFactory(this.mcData,this.mcTexture);
			this.mc.movieClipData =this.mcFactory.generateMovieClipData("run");
		}
		if(way>4){
			this.scaleX = 1;
			way = 8-way;
		}else{
			this.scaleX = -1;
		}
		this.mc.gotoAndPlay(this.action+ way,-1);
	}
	private action:string;
	public changeAction(action:string){
		this.action = action;
		this.playMc(this._way);
	}
	public moveTo(dx:number,dy:number){
		this.synWay(dx,dy);
		this.x = dx;
		this.y = dy;
	}
	protected synWay(tx:number,ty:number){
		var r:number = Math.atan2(tx - this.x,ty - this.y);
		r = (r * 180 / Math.PI + 360 ) % 360;
		var f:number = Math.round(r/45);
		this.setWay(f);
		
	}
	public renderUpdate(interval: number): void {

	}

	/**增加到世界 */
	public addToWorld(): void {
		RenderManager.getIns().registRender(this);
	}

	public dispose(){
		RenderManager.getIns().unregistRender(this);
	}

	/**设置当前焦点 */
	public setFocus(flag: boolean): FocusRole {
		this.__isFocus = flag;
		return this;
	}


	public setAreaKey(ak: string): void {
		this._ak = ak;
	}
	public getAreaKey(): string {
		return this._ak;
	}
	public removed(): void {

	}
	public added(): void {

	}
	public tryOption(px: number, py: number): number {
		return 0;
	}
	public hitTestArea(px:number,py:number):boolean{
		return false;
	}
}