class LoginWin extends GameWindow implements  eui.UIComponent {
	public constructor() {
		super();
		this.layerType = LayerType.LAYER_POP;
		this.typeName = WorWindowType.LOGIN_WINDOW;
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}

	private btn_ok:egret.DisplayObject;
	protected childrenCreated():void
	{
		super.childrenCreated();
		(this.getChildByName("txt_name") as eui.TextInput).text = "user" + Math.round(Math.random()*9999999);
		this.btn_ok = this.getChildByName("btn_ok");
		this.btn_ok.addEventListener(egret.TouchEvent.TOUCH_END,this.onTouchEnd,this);
	}
	private onTouchEnd(e:egret.TouchEvent){
		this.btn_ok.removeEventListener(egret.TouchEvent.TOUCH_END,this.onTouchEnd,this);
		let txt_name:eui.TextInput = this.getChildByName("txt_name") as eui.TextInput;
		Globals.i().net.send(MessageType.createLogin(txt_name.text));
		this.parent.removeChild(this);
	}
}