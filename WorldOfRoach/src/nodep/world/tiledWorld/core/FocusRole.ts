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

	public constructor() {
		super();
		FocusRole._addId++;
		this.id = FocusRole._addId;
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