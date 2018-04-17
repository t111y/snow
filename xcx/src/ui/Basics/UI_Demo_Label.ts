/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module Basics {

	export class UI_Demo_Label extends fairygui.GComponent {

		public m_frame:UI_WindowFrame;

		public static URL:string = "ui://9leh0eyfw42o3j";

		public static createInstance():UI_Demo_Label {
			return <UI_Demo_Label><any>(fairygui.UIPackage.createObject("Basics","Demo_Label"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_frame = <UI_WindowFrame><any>(this.getChild("frame"));
		}
	}
}