/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module Basics {

	export class UI_Demo_Button extends fairygui.GComponent {

		public m_RadioGroup:fairygui.Controller;
		public m_tab:fairygui.Controller;

		public static URL:string = "ui://9leh0eyfrpmb1b";

		public static createInstance():UI_Demo_Button {
			return <UI_Demo_Button><any>(fairygui.UIPackage.createObject("Basics","Demo_Button"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_RadioGroup = this.getController("RadioGroup");
			this.m_tab = this.getController("tab");
		}
	}
}