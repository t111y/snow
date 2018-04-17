/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module Basics {

	export class UI_WindowB extends fairygui.GComponent {

		public m_frame:UI_WindowFrameB;
		public m_t1:fairygui.Transition;

		public static URL:string = "ui://9leh0eyf796x7a";

		public static createInstance():UI_WindowB {
			return <UI_WindowB><any>(fairygui.UIPackage.createObject("Basics","WindowB"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_frame = <UI_WindowFrameB><any>(this.getChild("frame"));
			this.m_t1 = this.getTransition("t1");
		}
	}
}