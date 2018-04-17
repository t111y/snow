/**
 * nodep
 * 游戏等待界面
 */
class GameMainLoaderWindow extends GameWindow {

	private _bgShape: egret.Shape;

	public constructor() {
		super();
		this.layerType = LayerType.LAYER_POP;
		this.typeName = WorWindowType.MAIN_LOADING;
	}

	protected childrenCreated(): void {
	}


	/**
     * 捕获到对应的通知
     */
	public update(updateType: number, updateObject: any): void {
		switch (updateType) {
			case UpdateType.MAIN_LOADING_SET:
				this.text = updateObject;
				break;
		}
	}

}