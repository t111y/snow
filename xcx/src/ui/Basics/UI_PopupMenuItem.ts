/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module basics {

	export class UI_PopupMenuItem extends fairygui.GButton {

		public m_checked:fairygui.Controller;

		public static URL:string = "ui://9leh0eyfl6f46z";

		public static createInstance():UI_PopupMenuItem {
			return <UI_PopupMenuItem><any>(fairygui.UIPackage.createObject("basics","PopupMenuItem"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_checked = this.getController("checked");
		}
	}
}