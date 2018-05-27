class PlayerInfoWin extends GameWindow{
	private skin:mainUi.UI_PlayerInfo;
	public constructor() {
		super();
		this.layerType = LayerType.LAYER_POP;
		this.typeName = WorWindowType.LOGIN_WINDOW;
	}
	protected onInit(){
		super.onInit();
		this.skin = mainUi.UI_PlayerInfo.createInstance();
		this.contentPane = this.skin;
		this.skin.m_viscosity.value = 0;
		this.skin.x = WinsManager.stageWidth/2 - this.skin.width/2
	}
	public updateViscosity(viscosity:number):void{
		this.skin.m_viscosity.value = viscosity;
	}
}