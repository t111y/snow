/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module login {

	export class UI_login extends fairygui.GComponent {

		public m_txt_name:fairygui.GTextInput;
		public m_txt_version:fairygui.GTextField;
		public m_btn_ok:fairygui.GButton;

		public static URL:string = "ui://eh1vqx9df1nd6";

		public static createInstance():UI_login {
			return <UI_login><any>(fairygui.UIPackage.createObject("login","login"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_txt_name = <fairygui.GTextInput><any>(this.getChild("txt_name"));
			this.m_txt_version = <fairygui.GTextField><any>(this.getChild("txt_version"));
			this.m_btn_ok = <fairygui.GButton><any>(this.getChild("btn_ok"));
		}
	}
}