/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module Basics {

	export class UI_Dropdown extends fairygui.GComboBox {

		public m_button:fairygui.GButton;

		public static URL:string = "ui://9leh0eyfzd9g41";

		public static createInstance():UI_Dropdown {
			return <UI_Dropdown><any>(fairygui.UIPackage.createObject("Basics","Dropdown"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_button = <fairygui.GButton><any>(this.getChild("button"));
		}
	}
}