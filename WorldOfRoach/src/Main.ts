/**
 * 双色球计算器启动类
 */
class Main extends eui.UILayer {

    //进度加载显示
    private _loadingView: LoadingUI;
    //皮肤是否加载完成
    private _isThemeLoadEnd: boolean = false;
    //prolaod资源是否加载完成
    private _isResourceLoadEnd: boolean = false;

    /**
     * 默认的初始化程序,复写函数不需要些override
     */
    protected createChildren(): void { 
        SystemTimer.init();
        super.createChildren();
        // egret.Capabilities.isMobile
        //------------------
        egret.TextField.default_fontFamily = "Monlo";
        //------------------
        //注入自定义的素材解析器
        let assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
        //设置加载界面
        this._loadingView = new LoadingUI();
        this.stage.addChild(this._loadingView);
        //加载资源库的json配置文件,主要是图片路径的配置文件
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
        // this.stage.dirtyRegionPolicy = egret.DirtyRegionPolicy.ON;
    }
    /**
     * 配置文件加载完成,开始预加载皮肤主题资源和preload资源组。
     */
    private onConfigComplete(event: RES.ResourceEvent): void {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
        let theme = new eui.Theme("resource/default.thm.json", this.stage);
        theme.addEventListener(eui.UIEvent.COMPLETE, this.onThemeLoadComplete, this);
        //加载preload资源对应的资源包
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
        RES.loadGroup("preload");
    }
    
    /**
     * 主题文件加载完成,开始预加载
     */
    private onThemeLoadComplete(): void {
        this._isThemeLoadEnd = true;
        this.createScene();
    }
    
    /**
     * preload资源组加载完成
     */
    private onResourceLoadComplete(event: RES.ResourceEvent): void {
        if (event.groupName == "preload") {
            this.stage.removeChild(this._loadingView);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
            this._isResourceLoadEnd = true;
            this.createScene();
        }
    }

    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    private onItemLoadError(event: RES.ResourceEvent): void {
        console.warn("Url:" + event.resItem.url + " has failed to load");
    }
    /**
     * 资源组加载出错
     * Resource group loading failed
     */
    private onResourceLoadError(event: RES.ResourceEvent): void {
        //TODO
        console.warn("Group:" + event.groupName + " has failed to load");
        //忽略加载失败的项目
        //ignore loading failed projects
        this.onResourceLoadComplete(event);
    }
    /**
     * preload资源组加载进度
     * loading process of preload resource
     */
    private onResourceProgress(event: RES.ResourceEvent): void {
        if (event.groupName == "preload") {
            this._loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
        }
    }

    ///////////////////////////////////////////////////////////////////////////下面正式进入游戏流程/////////////////////////////////////////////////////////////////

    /**
     * 如果默认皮肤资源与preload资源均已加载完成
     * 则创建场景
     */
    private createScene() {
        if (this._isThemeLoadEnd && this._isResourceLoadEnd) {
            this.startCreateScene();
        }
    }

    //正式进入游戏
    private startGame():void
    {
        DelayCall.call(200,this.delayStart,this);
    }

    //延迟进入游戏
    private delayStart():void
    {
        WinsManager.getIns().openWindow(MenuWindow);
    }

    /**
     * 创建场景界面
     * Create scene interface
     */
    protected startCreateScene(): void {
        LogTrace.log("application loadcompleted...");
        WinsManager.getIns().initGame(this);
        //启动主Render
        RenderManager.getIns().startRender(this.stage);
        //初始化层级
        WinsManager.getIns().addLayer(LayerType.LAYER_GROUND, new GameLayer());
        WinsManager.getIns().addLayer(LayerType.LAYER_MENU,new GameLayer());
        WinsManager.getIns().addLayer(LayerType.LAYER_UI, new GameLayer());
        WinsManager.getIns().addLayer(LayerType.LAYER_POP,new GameLayer());
        this.startGame();
        }
   
}
