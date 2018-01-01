/**
 * 焦点目标,一旦被设置为场景焦点后可以控制场景摄像机位置
 * @author nodep
 * @version 1.0
 */
class FocusRole extends egret.DisplayObjectContainer implements IFocus, IRender, IRole {

	private static _addId: number = 0;
	public __isFocus: boolean = false;
	public id: number = 0;
	public type: string;
	public speedX: number;
	public speedY: number;
	private _ak: string;

	public isDead:boolean = false;
	public setDead(isDead:boolean){
		this.isDead = isDead;
		if(isDead){
			Globals.killNum++;
			WinsManager.getIns().showFloatText(Globals.killNum + "击");
			if(this.filters == null){
				var f:Array<egret.Filter> = new Array<egret.Filter>();
				f.push(new egret.GlowFilter(0xffff00,1,10,10,100));
				this.filters = f;
			}
			
		}else{
			this.filters = null;
		}
	}
	public constructor() {
		super();
		FocusRole._addId++;
		this.id = FocusRole._addId;

		var s:egret.Shape = new egret.Shape();
		this.addChild(s);
		s.graphics.beginFill(0x0000ff);
		s.graphics.drawCircle(0,0,10);
		
		this.mc = new egret.MovieClip();
		this.addChild(this.mc);
		this.mc.x = - 430;
		this.mc.y = -400;
		this.setWay(0);
	}
	
	private mc:egret.MovieClip;
	private mcData:any;
	private _way:number = -1;
	public setWay(way:number){
		if(way == this._way){
			return;
		}
		this._way = way;
		if(way<0){
			way = Math.abs(way);
			this.scaleX = -1;
		}else{
			this.scaleX = 1;
		}
		var mcFactory:egret.MovieClipDataFactory ;
		if(!this.mcData){
			RES.getResByUrl("resource/assets/hero/Person/1003_walk_2840d952.json",function(e){
				this.mcData = JSON.parse(e);
			},this,RES.ResourceItem.TYPE_TEXT);
		}
		
		var m:egret.MovieClip = this.mc;
		var t:egret.Texture;
		RES.getResByUrl("resource/assets/hero/Person/1003_walk_4a5945e3.png",function(e){
			t = <egret.Texture>e;
			mcFactory = new egret.MovieClipDataFactory(this.mcData,t);
			m.movieClipData =mcFactory.generateMovieClipData("0_3_walk_" + way);
			m.play(-1);
		},this,RES.ResourceItem.TYPE_IMAGE);
	}

	protected synWay(tx:number,ty:number){
		var r:number = Math.atan2(tx - this.x,ty - this.y);
		r = (r * 180 / Math.PI + 360 );
		var f:number = (8 - Math.round(r/45)) % 8;
		console.log(f);
		this.setWay(f);
		
	}
	public renderUpdate(interval: number): void {

	}

	/**增加到世界 */
	public addToWorld(): void {
		RenderManager.getIns().registRender(this);
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
	public getOptType():string{
		return this.type;
	}
}