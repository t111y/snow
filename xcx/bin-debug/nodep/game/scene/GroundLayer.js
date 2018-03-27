var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
/**
 * 地图基础容器
 * @author nodep
 * @version 1.0
 */
var GroundLayer = (function (_super) {
    __extends(GroundLayer, _super);
    /**舞台宽度,舞台高度,世界宽度,世界高度 */
    function GroundLayer(worldW, worldH) {
        var _this = _super.call(this) || this;
        _this.mapW = worldW;
        _this.mapH = worldH;
        _this._mapBackground = new MapBackground();
        _this._rolePath = new RolePath();
        _this.addChild(_this._mapBackground);
        _this.addChild(_this._rolePath);
        // var rockBar = new RockBarContorller();
        RenderManager.getIns().registRender(_this._rolePath);
        return _this;
    }
    GroundLayer.prototype.hitTestRole = function (sx, sy) {
        return sx < 0 || sy < 0 || sx > GameConfig.WORD_W || sy > GameConfig.WORD_H;
    };
    /**同步到当前位置 */
    GroundLayer.prototype.synPositionTo = function (cx, cy) {
        var hw = this.stage.stageWidth / 2;
        var hh = this.stage.stageHeight / 2;
        if (hw > cx) {
            this.x = 0;
        }
        else if (this.mapW - cx < hw) {
            this.x = -(this.mapW - this.stage.stageWidth);
        }
        else {
            this.x = hw - cx;
        }
        if (hh > cy) {
            this.y = 0;
        }
        else if (this.mapH - cy < hh) {
            this.y = -(this.mapH - this.stage.stageHeight);
        }
        else {
            this.y = hh - cy;
        }
        this._mapBackground.render(cx, cy);
        // this.x = 0;
        // this.y = 0;
    };
    /**添加一个演员 */
    GroundLayer.prototype.addRole = function (dis) {
        this.addChild(dis);
    };
    return GroundLayer;
}(egret.DisplayObjectContainer));
__reflect(GroundLayer.prototype, "GroundLayer");
//# sourceMappingURL=GroundLayer.js.map