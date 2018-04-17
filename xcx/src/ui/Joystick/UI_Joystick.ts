/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module Joystick {

	export class UI_Joystick extends fairygui.GComponent {

		public m_joystick_center:fairygui.GImage;
		public m_joystick:UI_circle;
		public m_joystick_touch:fairygui.GGraph;

		public static URL:string = "ui://co8erd7ustal0";

		public static createInstance():UI_Joystick {
			return <UI_Joystick><any>(fairygui.UIPackage.createObject("Joystick","Joystick"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_joystick_center = <fairygui.GImage><any>(this.getChild("joystick_center"));
			this.m_joystick = <UI_circle><any>(this.getChild("joystick"));
			this.m_joystick_touch = <fairygui.GGraph><any>(this.getChild("joystick_touch"));
		}
	}
}