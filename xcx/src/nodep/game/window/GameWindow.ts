/**
 * 游戏通用的界面,继承之后可以通过GameWindow进行管理
 * 1.01:
 * 界面的缩放不影响布局效果
 * @author nodep
 * @version 1.01
 */
class GameWindow extends fairygui.Window {
    /**
     *所屬層級,需要在業務中自定義
     */
    public layerType: string = "";
    //非初次加入舞台
    public __inited: boolean = false;
    //布局方式
    private __align: string = "NONE";
    private __offsetX: number = 0;
    private __offsetY: number = 0;
    /**
     *界面的唯一命名
     */
    public typeName: string;
    /**
     * 是否有遮罩
     */
    public pop: boolean = false;


    /**
     *再次加入舞臺
     */
    public reOpen(): void {
        this.visible = true;
    }

    /**
     * 捕获到对应的通知
     */
    public update(updateType: number, updateObject: any): void {
    }

    /**
     * 关闭界面之前
     * 如果要添加关闭动画则在实现中返回false,并实现自己的关闭动画。则关闭动画完成后彻底移除。
     */
    public beforeClose(): boolean {
        return true;
    }

    public resize(){
        
    }
}