/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module Basics {

	export class UI_GridItem2 extends fairygui.GButton {

		public m_t3:fairygui.GTextField;
		public m_t1:fairygui.GTextField;
		public m_cb:fairygui.GButton;
		public m_mc:fairygui.GMovieClip;

		public static URL:string = "ui://9leh0eyfatih7o";

		public static createInstance():UI_GridItem2 {
			return <UI_GridItem2><any>(fairygui.UIPackage.createObject("Basics","GridItem2"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_t3 = <fairygui.GTextField><any>(this.getChild("t3"));
			this.m_t1 = <fairygui.GTextField><any>(this.getChild("t1"));
			this.m_cb = <fairygui.GButton><any>(this.getChild("cb"));
			this.m_mc = <fairygui.GMovieClip><any>(this.getChild("mc"));
		}
	}
}