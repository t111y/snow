var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 界面管理
 * 添加打开或关闭界面的方法:如果界面已打开,则进行关闭
 * @author nodep
 * @version 1.01;
 */
var WinsManager = (function () {
    function WinsManager() {
        if (WinsManager._ins != null)
            throw (new Error("单例"));
        this._layerMap = {};
        this._windowMap = {};
        LogTrace.log("create WinsManager!");
    }
    WinsManager.prototype.initScale = function () {
        LogTrace.log(WinsManager.stageWidth + "_" + WinsManager.stageHeight);
        WinsManager.scaleX = WinsManager.stageWidth / 1254;
        WinsManager.scaleY = WinsManager.scaleX;
    };
    /**
     * 单例
     */
    WinsManager.getIns = function () {
        if (!WinsManager._ins)
            WinsManager._ins = new WinsManager();
        return WinsManager._ins;
    };
    /**
     * 初始化
     */
    WinsManager.prototype.initGame = function (ui) {
        this._baseUi = ui;
        this._baseUi.stage.addEventListener(egret.Event.RESIZE, this.stageResizeHandler, this);
        WinsManager.stageWidth = this._baseUi.stage.stageWidth;
        WinsManager.stageHeight = this._baseUi.stage.stageHeight;
        this.initScale();
    };
    /**
     * 添加一个层级
     */
    WinsManager.prototype.addLayer = function (layerName, layer) {
        this._layerMap[layerName] = layer;
        this._baseUi.addChild(layer);
        LogTrace.log("add layer:" + layerName);
    };
    /**开启或关闭窗口 */
    WinsManager.prototype.switchWin = function (cls) {
        if (this._windowMap[cls] == null)
            this._windowMap[cls] = new cls();
        var win = this._windowMap[(cls)];
        if (win.stage == null)
            this.openWindow(cls);
        else
            this.closeWin(cls);
    };
    /**
     * 开启一个窗口
     */
    WinsManager.prototype.openWindow = function (cls) {
        if (this._windowMap[(cls)] == null)
            this._windowMap[cls] = new cls();
        var win = this._windowMap[cls];
        if (!win.stage) {
            if (this._layerMap[win.layerType]) {
                this._layerMap[(win.layerType)].addWindow(win);
                LogTrace.log("openWindow->" + win.typeName);
            }
            else {
                throw (new Error(NodepErrorType.LAYER_NO_EXISTENT));
            }
        }
    };
    /**
     * 在某個層級打開界面
     */
    WinsManager.prototype.openWindowToLayer = function (cls, layerType) {
        if (!this._windowMap[(cls)])
            this._windowMap[cls] = new cls();
        var win = this._windowMap[(cls)];
        if (!win.stage) {
            if (this._layerMap[(layerType)]) {
                this._layerMap[(layerType)].addWindow(win);
                LogTrace.log("openWindow->" + win.typeName);
            }
            else {
                throw (new Error(NodepErrorType.LAYER_NO_EXISTENT));
            }
        }
    };
    /**
     * 通过多种方式尝试关闭界面
     */
    WinsManager.prototype.closeWin = function (target) {
        if (!target)
            return;
        var win = null;
        switch (typeof target) {
            case "object":
                win = target;
                break;
            case "string"://暂时不支持
                break;
            case "function":
                win = this._windowMap[(target)];
                break;
        }
        if (!win || !win.parent)
            return;
        if (win.beforeClose())
            win.parent.removeWindow(win);
    };
    /**
     * 刷新指定的界面,只会更新在显示列表中的
     */
    WinsManager.prototype.updateWin = function (updateType, typeNames, updateData) {
        if (updateData === void 0) { updateData = null; }
        for (var key in this._windowMap) {
            var win = this._windowMap[key];
            if (typeNames.indexOf(win.typeName) >= 0 && win.stage != null)
                win.update(updateType, updateData);
        }
    };
    /**
     * 全局更新界面,只会更新在显示列表中的
     */
    WinsManager.prototype.globalUpdate = function (updateType, updateData) {
        for (var key in this._windowMap) {
            var win = this._windowMap[key];
            if (win.stage != null)
                win.update(updateType, updateData);
        }
    };
    /**
     * 屏幕尺寸变化
     */
    WinsManager.prototype.stageResizeHandler = function (evt) {
        WinsManager.stageWidth = this._baseUi.stage.stageWidth;
        WinsManager.stageHeight = this._baseUi.stage.stageHeight;
        this.initScale();
        LogTrace.log("stageReszie!");
        //通知所有的layer
        for (var key in this._layerMap) {
            var win = this._layerMap[key];
            win.resize();
        }
    };
    /**
     * 指定回收
     */
    WinsManager.prototype.gcWindow = function (key) {
    };
    /**
     * 回收所有没有在显示列表中的界面
     */
    WinsManager.prototype.gcWindowAll = function () {
    };
    WinsManager.prototype.showFloatText = function (msg) {
        var txt = new egret.TextField();
        txt.text = msg;
        txt.width = 500;
        txt.size = 40;
        txt.textColor = 0xff3300;
        txt.x = WinsManager.stageWidth / 2 - txt.width / 2;
        txt.y = WinsManager.stageHeight / 2;
        this.gameStage().addChild(txt);
        egret.Tween.get(txt).to({ y: txt.y - 200 }, 1500).call(onComplete, this);
        function onComplete() {
            txt.parent.removeChild(txt);
        }
    };
    /**
     * 快速获取游戏舞台
     */
    WinsManager.prototype.gameStage = function () {
        if (this._baseUi != null)
            return this._baseUi.stage;
        else
            return null;
    };
    WinsManager.stageWidth = 0;
    WinsManager.stageHeight = 0;
    WinsManager.scaleX = 1;
    WinsManager.scaleY = 1;
    return WinsManager;
}());
__reflect(WinsManager.prototype, "WinsManager");
//# sourceMappingURL=WinsManager.js.map