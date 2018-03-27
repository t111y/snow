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
 * 舞台层级,包括一切地标以上的物件与角色
 * 主要包括人物,npc,生物,敌人,植被,矿物
 * 植被:循环计数法创建植被
 * @author nodep
 * @version 1.0
 */
var StageLayer = (function (_super) {
    __extends(StageLayer, _super);
    function StageLayer() {
        var _this = _super.call(this) || this;
        _this._startX = -100000;
        _this._startY = -100000;
        //----------------当前显示的格子范围------------------
        _this._gridX_from = -1;
        _this._gridX_to = -1;
        _this._gridY_from = -1;
        _this._gridY_to = -1;
        StageLayer.self = _this;
        return _this;
    }
    StageLayer.prototype.addRole = function (dis) {
        this.addChild(dis);
    };
    StageLayer.prototype.hitTestRole = function (sx, sy) {
        return sx < 0 || sy < 0 || sx > GameConfig.WORD_W || sy > GameConfig.WORD_H;
    };
    /**
     * 尝试同步区域
     * 屏幕左上角坐标
     */
    StageLayer.prototype.trySynArea = function (sx, sy) {
        //检查是否要滚动
    };
    return StageLayer;
}(egret.DisplayObjectContainer));
__reflect(StageLayer.prototype, "StageLayer");
//# sourceMappingURL=StageLayer.js.map