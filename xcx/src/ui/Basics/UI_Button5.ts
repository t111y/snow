/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module Basics {

	export class UI_Button5 extends fairygui.GButton {

		public m_bg:fairygui.GImage;

		public static URL:string = "ui://9leh0eyfrpmb13";

		public static createInstance():UI_Button5 {
			return <UI_Button5><any>(fairygui.UIPackage.createObject("Basics","Button5"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_bg = <fairygui.GImage><any>(this.getChild("bg"));
		}
	}
}