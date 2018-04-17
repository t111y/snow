/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module Basics {

	export class UI_ComboBoxPopup extends fairygui.GComponent {

		public m_list:fairygui.GList;

		public static URL:string = "ui://9leh0eyfrt103y";

		public static createInstance():UI_ComboBoxPopup {
			return <UI_ComboBoxPopup><any>(fairygui.UIPackage.createObject("Basics","ComboBoxPopup"));
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