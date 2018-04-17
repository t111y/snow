/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module Basics {

	export class UI_WindowFrameB extends fairygui.GLabel {

		public m_dragArea:fairygui.GGraph;
		public m_closeButton:fairygui.GButton;

		public static URL:string = "ui://9leh0eyfniii7d";

		public static createInstance():UI_WindowFrameB {
			return <UI_WindowFrameB><any>(fairygui.UIPackage.createObject("Basics","WindowFrameB"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_dragArea = <fairygui.GGraph><any>(this.getChild("dragArea"));
			this.m_closeButton = <fairygui.GButton><any>(this.getChild("closeButton"));
		}
	}
}