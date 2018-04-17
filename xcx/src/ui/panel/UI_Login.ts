/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module panel {

	export class UI_Login extends fairygui.GComponent {

		public m_txt_name:fairygui.GTextInput;
		public m_btn_ok:fairygui.GButton;

		public static URL:string = "ui://5alcomxvwaht0";

		public static createInstance():UI_Login {
			return <UI_Login><any>(fairygui.UIPackage.createObject("panel","Login"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_txt_name = <fairygui.GTextInput><any>(this.getChild("txt_name"));
			this.m_btn_ok = <fairygui.GButton><any>(this.getChild("btn_ok"));
		}
	}
}