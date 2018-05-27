class LoginWin extends GameWindow {
	private skin:login.UI_login;
	public constructor() {
		super();
		this.layerType = LayerType.LAYER_POP;
		this.typeName = WorWindowType.LOGIN_WINDOW;
	}
	protected onInit():void {
		this.skin = login.UI_login.createInstance();
        this.contentPane = this.skin;
		this.skin.m_txt_name.text = "user" + Math.round(Math.random()*9999999);
		this.skin.m_btn_ok.addEventListener(egret.TouchEvent.TOUCH_END,this.onTouchEnd,this);
		this.skin.m_txt_version.text = WinsManager.stageWidth+"_"+WinsManager.stageHeight;
    }

	private onTouchEnd(e:egret.TouchEvent){
		this.skin.m_btn_ok.removeEventListener(egret.TouchEvent.TOUCH_END,this.onTouchEnd,this);
		Globals.i().net.send(MessageType.createLogin(this.skin.m_txt_name.text));
		this.parent.removeChild(this);
	}
}