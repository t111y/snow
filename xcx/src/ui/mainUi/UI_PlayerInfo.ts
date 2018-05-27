/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module mainUi {

	export class UI_PlayerInfo extends fairygui.GComponent {

		public m_viscosity:fairygui.GProgressBar;

		public static URL:string = "ui://co8erd7ut7lsd";

		public static createInstance():UI_PlayerInfo {
			return <UI_PlayerInfo><any>(fairygui.UIPackage.createObject("mainUi","PlayerInfo"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_viscosity = <fairygui.GProgressBar><any>(this.getChild("viscosity"));
		}
	}
}