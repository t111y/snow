/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module Basics {

	export class UI_GridItem extends fairygui.GButton {

		public m_t0:fairygui.GTextField;
		public m_t1:fairygui.GTextField;
		public m_t2:fairygui.GTextField;
		public m_star:fairygui.GProgressBar;

		public static URL:string = "ui://9leh0eyfa7vt7n";

		public static createInstance():UI_GridItem {
			return <UI_GridItem><any>(fairygui.UIPackage.createObject("Basics","GridItem"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_t0 = <fairygui.GTextField><any>(this.getChild("t0"));
			this.m_t1 = <fairygui.GTextField><any>(this.getChild("t1"));
			this.m_t2 = <fairygui.GTextField><any>(this.getChild("t2"));
			this.m_star = <fairygui.GProgressBar><any>(this.getChild("star"));
		}
	}
}