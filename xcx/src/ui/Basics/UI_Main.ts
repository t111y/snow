/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module Basics {

	export class UI_Main extends fairygui.GComponent {

		public m_c1:fairygui.Controller;
		public m_container:fairygui.GComponent;
		public m_btn_Back:fairygui.GButton;
		public m_btn_Button:fairygui.GButton;
		public m_btn_Image:fairygui.GButton;
		public m_btn_Graph:fairygui.GButton;
		public m_btn_MovieClip:fairygui.GButton;
		public m_btn_Depth:fairygui.GButton;
		public m_btn_Loader:fairygui.GButton;
		public m_btn_List:fairygui.GButton;
		public m_btn_ProgressBar:fairygui.GButton;
		public m_btn_Slider:fairygui.GButton;
		public m_btn_ComboBox:fairygui.GButton;
		public m_btn_Clip_Scroll:fairygui.GButton;
		public m_btn_Controller:fairygui.GButton;
		public m_btn_Relation:fairygui.GButton;
		public m_btn_Label:fairygui.GButton;
		public m_btn_Popup:fairygui.GButton;
		public m_btn_Window:fairygui.GButton;
		public m_btn_Drag_Drop:fairygui.GButton;
		public m_btn_Component:fairygui.GButton;
		public m_btn_Grid:fairygui.GButton;
		public m_btn_Text:fairygui.GButton;
		public m_btns:fairygui.GGroup;

		public static URL:string = "ui://9leh0eyfrpmb1c";

		public static createInstance():UI_Main {
			return <UI_Main><any>(fairygui.UIPackage.createObject("Basics","Main"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_c1 = this.getController("c1");
			this.m_container = <fairygui.GComponent><any>(this.getChild("container"));
			this.m_btn_Back = <fairygui.GButton><any>(this.getChild("btn_Back"));
			this.m_btn_Button = <fairygui.GButton><any>(this.getChild("btn_Button"));
			this.m_btn_Image = <fairygui.GButton><any>(this.getChild("btn_Image"));
			this.m_btn_Graph = <fairygui.GButton><any>(this.getChild("btn_Graph"));
			this.m_btn_MovieClip = <fairygui.GButton><any>(this.getChild("btn_MovieClip"));
			this.m_btn_Depth = <fairygui.GButton><any>(this.getChild("btn_Depth"));
			this.m_btn_Loader = <fairygui.GButton><any>(this.getChild("btn_Loader"));
			this.m_btn_List = <fairygui.GButton><any>(this.getChild("btn_List"));
			this.m_btn_ProgressBar = <fairygui.GButton><any>(this.getChild("btn_ProgressBar"));
			this.m_btn_Slider = <fairygui.GButton><any>(this.getChild("btn_Slider"));
			this.m_btn_ComboBox = <fairygui.GButton><any>(this.getChild("btn_ComboBox"));
			this.m_btn_Clip_Scroll = <fairygui.GButton><any>(this.getChild("btn_Clip&Scroll"));
			this.m_btn_Controller = <fairygui.GButton><any>(this.getChild("btn_Controller"));
			this.m_btn_Relation = <fairygui.GButton><any>(this.getChild("btn_Relation"));
			this.m_btn_Label = <fairygui.GButton><any>(this.getChild("btn_Label"));
			this.m_btn_Popup = <fairygui.GButton><any>(this.getChild("btn_Popup"));
			this.m_btn_Window = <fairygui.GButton><any>(this.getChild("btn_Window"));
			this.m_btn_Drag_Drop = <fairygui.GButton><any>(this.getChild("btn_Drag&Drop"));
			this.m_btn_Component = <fairygui.GButton><any>(this.getChild("btn_Component"));
			this.m_btn_Grid = <fairygui.GButton><any>(this.getChild("btn_Grid"));
			this.m_btn_Text = <fairygui.GButton><any>(this.getChild("btn_Text"));
			this.m_btns = <fairygui.GGroup><any>(this.getChild("btns"));
		}
	}
}