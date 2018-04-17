/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module Basics {

	export class UI_WindowFrame extends fairygui.GLabel {

		public m_closeButton:fairygui.GButton;
		public m_dragArea:fairygui.GGraph;
		public m_contentArea:fairygui.GGraph;

		public static URL:string = "ui://9leh0eyfrt103l";

		public static createInstance():UI_WindowFrame {
			return <UI_WindowFrame><any>(fairygui.UIPackage.createObject("Basics","WindowFrame"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_closeButton = <fairygui.GButton><any>(this.getChild("closeButton"));
			this.m_dragArea = <fairygui.GGraph><any>(this.getChild("dragArea"));
			this.m_contentArea = <fairygui.GGraph><any>(this.getChild("contentArea"));
		}
	}
}