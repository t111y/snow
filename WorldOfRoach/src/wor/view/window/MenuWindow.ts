/**
 * 游戏登陆
 */
class MenuWindow extends GameWindow implements eui.UIComponent {
	public constructor() {
		super();
		this.typeName = WorWindowType.MENU_WINDOW;
		this.layerType = LayerType.LAYER_UI;
	}

	protected childrenCreated(): void {
		super.childrenCreated();
		this.startNewGame(true);
		this.reOpen();
	}

	public reOpen(): void {
		this.getChildByName("newGame").visible = false;
		this.getChildByName("oldGame").visible = false;
		//请求玩家历史数据
		ProxyManager.getIns().send(ModuleType.USER, ProxyType.USER_GETHISTORY);
	}

	public update(updateType: number, updateObject: any): void {
		
	}


	//开始一个新游戏
	private startNewGame(flag:boolean):void
	{
		if(flag)
		{
			LogTrace.log("startGame for new!");
			GameManager.getIns().isNewGame = true;
			GameManager.getIns().startNewGame();
		}
	}

	//读取以前的档案
	private startOldGame():void
	{
		LogTrace.log("startGame for old");
		GameManager.getIns().isNewGame = false;
		GameManager.getIns().startOldGame();
	}
}