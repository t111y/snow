/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module Basics {

	export class UI_Button52 extends fairygui.GButton {

		public m_grayed:fairygui.Controller;
		public m_bg:fairygui.GImage;

		public static URL:string = "ui://9leh0eyfdyz47i";

		public static createInstance():UI_Button52 {
			return <UI_Button52><any>(fairygui.UIPackage.createObject("Basics","Button52"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_grayed = this.getController("grayed");
			this.m_bg = <fairygui.GImage><any>(this.getChild("bg"));
		}
	}
}