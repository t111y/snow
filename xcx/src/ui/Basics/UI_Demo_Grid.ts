/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module Basics {

	export class UI_Demo_Grid extends fairygui.GComponent {

		public m_list1:fairygui.GList;
		public m_list2:fairygui.GList;

		public static URL:string = "ui://9leh0eyfc2z47l";

		public static createInstance():UI_Demo_Grid {
			return <UI_Demo_Grid><any>(fairygui.UIPackage.createObject("Basics","Demo_Grid"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_list1 = <fairygui.GList><any>(this.getChild("list1"));
			this.m_list2 = <fairygui.GList><any>(this.getChild("list2"));
		}
	}
}