/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module mainUi {

	export class UI_ActorPoint extends fairygui.GComponent {

		public m_point:fairygui.GImage;

		public static URL:string = "ui://co8erd7ut7lse";

		public static createInstance():UI_ActorPoint {
			return <UI_ActorPoint><any>(fairygui.UIPackage.createObject("mainUi","ActorPoint"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_point = <fairygui.GImage><any>(this.getChild("point"));
		}
	}
}