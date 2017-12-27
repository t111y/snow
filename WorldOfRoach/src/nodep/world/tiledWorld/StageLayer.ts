/**
 * 舞台层级,包括一切地标以上的物件与角色
 * 主要包括人物,npc,生物,敌人,植被,矿物
 * 植被:循环计数法创建植被
 * @author nodep
 * @version 1.0
 */
class StageLayer extends egret.DisplayObjectContainer {

	public static __xGridCount: number;//世界横向格子总数
	public static __yGridCount: number;//世界纵向格子总数
	public static self: StageLayer;

	private _startX: number = -100000;
	private _startY: number = -100000;
	//----------------当前显示的格子范围------------------
	private _gridX_from: number = -1;
	private _gridX_to: number = -1;
	private _gridY_from: number = -1;
	private _gridY_to: number = -1;

	public constructor() {
		super();
		StageLayer.self = this;
	}

	public addRole(dis:egret.DisplayObject){
		this.addChild(dis);
	}
	public hitTestRole(sx: number, sy: number){
		return false;
	}
	/**
	 * 尝试同步区域
	 * 屏幕左上角坐标
	 */
	public trySynArea(sx: number, sy: number): void {
		//检查是否要滚动
	}


}