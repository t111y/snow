/**
 * 游戏总流程管理器
 */
class GameManager {
	private static _ins: GameManager;
	public isNewGame:boolean = false;

	public static getIns(): GameManager {
		if (GameManager._ins == null)
			GameManager._ins = new GameManager();
		return GameManager._ins;
	}

	/**
	 * 正常流程开始新游戏
	 */
	public startNewGame(): void {
		WinsManager.getIns().openWindow(GameMainLoaderWindow);//打开游戏主加载界面
		this.buildEnter();
		// DelayCall.call(100,this.buildEnter,this)
	}

	//游戏创建的方式进入游戏
	private buildEnter():void
	{
		this.enterGame();
		// ProxyManager.getIns().send(ModuleType.USER,ProxyType.USER_CREATE,"{\"posX\":"+1000+",\"posY\":"+1000+"}");
	}


	//进入游戏
	public enterGame():void
	{
		WinsManager.getIns().gameStage().addChildAt(Tiled_Ground.getIns(),0);
		//初始化游戏界面->实际开发中需要加入初始化进度条
		Tiled_Ground.getIns().initWorld();//初始化世界的宽度和高度
		WinsManager.getIns().openWindow(JoystickModule);//初始化摇杆到界面
		WinsManager.getIns().closeWin(GameMainLoaderWindow);//关闭加载
		WinsManager.getIns().openWindow(PlayerInfoWin);
	}



	/**
	 * 开启业务窗口,判断互斥
	 */
	public openGameUI(cls: any): void {
		//关闭与之互斥的窗口,保留同步的窗口
		//之后则打开窗口
		WinsManager.getIns().openWindow(cls);
	}

	/**
	 * 改变主加载界面的文本
	 */
	public setMainLoadingInfo(infoStr:string):void{
		WinsManager.getIns().updateWin(UpdateType.MAIN_LOADING_SET,[WorWindowType.MAIN_LOADING],infoStr);
	}
}