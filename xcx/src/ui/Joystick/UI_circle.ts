/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module joystick {

	export class UI_circle extends fairygui.GButton {

		public m_thumb:fairygui.GImage;

		public static URL:string = "ui://co8erd7uojxk2";

		public static createInstance():UI_circle {
			return <UI_circle><any>(fairygui.UIPackage.createObject("joystick","circle"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_thumb = <fairygui.GImage><any>(this.getChild("thumb"));
		}
	}
}