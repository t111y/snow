/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module Basics {

	export class UI_PopupMenu extends fairygui.GComponent {

		public m_list:fairygui.GList;

		public static URL:string = "ui://9leh0eyfl6f46x";

		public static createInstance():UI_PopupMenu {
			return <UI_PopupMenu><any>(fairygui.UIPackage.createObject("Basics","PopupMenu"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_list = <fairygui.GList><any>(this.getChild("list"));
		}
	}
}