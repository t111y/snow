/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module Basics {

	export class UI_Demo_Drag_Drop extends fairygui.GComponent {

		public m_a:fairygui.GButton;
		public m_b:fairygui.GButton;
		public m_c:fairygui.GButton;
		public m_d:fairygui.GButton;

		public static URL:string = "ui://9leh0eyfgx2b78";

		public static createInstance():UI_Demo_Drag_Drop {
			return <UI_Demo_Drag_Drop><any>(fairygui.UIPackage.createObject("Basics","Demo_Drag&Drop"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_a = <fairygui.GButton><any>(this.getChild("a"));
			this.m_b = <fairygui.GButton><any>(this.getChild("b"));
			this.m_c = <fairygui.GButton><any>(this.getChild("c"));
			this.m_d = <fairygui.GButton><any>(this.getChild("d"));
		}
	}
}