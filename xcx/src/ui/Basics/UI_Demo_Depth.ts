/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module Basics {

	export class UI_Demo_Depth extends fairygui.GComponent {

		public m_btn0:fairygui.GButton;
		public m_btn1:fairygui.GButton;

		public static URL:string = "ui://9leh0eyffou97q";

		public static createInstance():UI_Demo_Depth {
			return <UI_Demo_Depth><any>(fairygui.UIPackage.createObject("Basics","Demo_Depth"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_btn0 = <fairygui.GButton><any>(this.getChild("btn0"));
			this.m_btn1 = <fairygui.GButton><any>(this.getChild("btn1"));
		}
	}
}