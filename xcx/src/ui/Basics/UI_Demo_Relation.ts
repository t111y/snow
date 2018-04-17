/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module Basics {

	export class UI_Demo_Relation extends fairygui.GComponent {

		public m_c1:fairygui.Controller;

		public static URL:string = "ui://9leh0eyfwa8u2x";

		public static createInstance():UI_Demo_Relation {
			return <UI_Demo_Relation><any>(fairygui.UIPackage.createObject("Basics","Demo_Relation"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_c1 = this.getController("c1");
		}
	}
}