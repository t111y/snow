/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module Basics {

	export class UI_Dropdown2 extends fairygui.GComponent {

		public m_list:fairygui.GList;

		public static URL:string = "ui://9leh0eyfzd9g47";

		public static createInstance():UI_Dropdown2 {
			return <UI_Dropdown2><any>(fairygui.UIPackage.createObject("Basics","Dropdown2"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_list = <fairygui.GList><any>(this.getChild("list"));
		}
	}
}