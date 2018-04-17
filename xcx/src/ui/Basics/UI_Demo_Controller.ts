/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module Basics {

	export class UI_Demo_Controller extends fairygui.GComponent {

		public m_c1:fairygui.Controller;
		public m_c2:fairygui.Controller;
		public m_switchBtn:fairygui.GButton;

		public static URL:string = "ui://9leh0eyfwa8u2v";

		public static createInstance():UI_Demo_Controller {
			return <UI_Demo_Controller><any>(fairygui.UIPackage.createObject("Basics","Demo_Controller"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_c1 = this.getController("c1");
			this.m_c2 = this.getController("c2");
			this.m_switchBtn = <fairygui.GButton><any>(this.getChild("switchBtn"));
		}
	}
}