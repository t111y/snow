/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module Basics {

	export class UI_WindowA extends fairygui.GComponent {

		public m_frame:UI_WindowFrame;

		public static URL:string = "ui://9leh0eyfl6f473";

		public static createInstance():UI_WindowA {
			return <UI_WindowA><any>(fairygui.UIPackage.createObject("Basics","WindowA"));
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